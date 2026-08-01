import {
    makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    makeCacheableSignalKeyStore
} from '@whiskeysockets/baileys';
import { Boom } from '@hapi/boom';
import qrcode from 'qrcode-terminal';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pino from 'pino';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let sock;

async function connectToWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');
    const { version, isLatest } = await fetchLatestBaileysVersion();

    console.log(`Utilisation de WhatsApp v${version.join('.')}, latest: ${isLatest}`);

    sock = makeWASocket({
        version,
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, pino({ level: 'silent' })),
        },
    });

    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect, qr } = update;

        if (qr) {
            console.log('--- SCANNEZ CE QR CODE AVEC VOTRE WHATSAPP ---');
            qrcode.generate(qr, { small: true });
        }

        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect.error instanceof Boom)?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log('Connexion fermée due à ', lastDisconnect.error, ', reconnexion: ', shouldReconnect);
            if (shouldReconnect) {
                connectToWhatsApp();
            }
        } else if (connection === 'open') {
            console.log('--- CONNEXION WHATSAPP ÉTABLIE ---');
        }
    });

    sock.ev.on('creds.update', saveCreds);
}

// Endpoint pour envoyer les notifications
app.post('/send-notification', async (req, res) => {
    const { name, phone, service, slot, date } = req.body;

    if (!sock) {
        return res.status(500).json({ error: 'WhatsApp non connecté' });
    }

    try {
        // Formater le numéro (enlever les espaces, +, etc.)
        let formattedPhone = phone.replace(/\D/g, '');
        // Ajouter l'identifiant WhatsApp si absent
        if (!formattedPhone.endsWith('@s.whatsapp.net')) {
            formattedPhone += '@s.whatsapp.net';
        }

        const message = `🌟 *Confirmation de Réservation - Centre Zara*\n\n` +
            `Bonjour *${name}*,\n\n` +
            `Votre rendez-vous est confirmé :\n` +
            `✂️ *Service :* ${service}\n` +
            `📅 *Date :* ${date}\n` +
            `🕐 *Heure :* ${slot}\n\n` +
            `Nous avons hâte de vous recevoir ! ✨\n\n` +
            `_Ceci est un message automatique._`;

        await sock.sendMessage(formattedPhone, { text: message });

        // Optionnel : Envoyer aussi à la gérante (Zara)
        const ownerPhone = process.env.OWNER_PHONE;
        if (ownerPhone) {
            let formattedOwner = ownerPhone.replace(/\D/g, '') + '@s.whatsapp.net';
            const ownerMsg = `🔔 *Nouvelle Réservation*\n\n` +
                `👤 *Client :* ${name}\n` +
                `📞 *Tél :* ${phone}\n` +
                `✂️ *Service :* ${service}\n` +
                `📅 *Date :* ${date}\n` +
                `🕐 *Heure :* ${slot}`;
            await sock.sendMessage(formattedOwner, { text: ownerMsg });
        }

        res.json({ success: true });
    } catch (err) {
        console.error('Erreur envoi message:', err);
        res.status(500).json({ error: 'Échec de l\'envoi du message' });
    }
});

app.listen(port, () => {
    console.log(`Serveur API prêt sur http://localhost:${port}`);
});

connectToWhatsApp();
