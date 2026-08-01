# Intégration WhatsApp Automatisée (Baileys)

J'ai mis en place le système de notifications WhatsApp automatiques. Désormais, le site peut envoyer des messages de confirmation de manière invisible pour la cliente.

## Composants créés

### 1. Serveur Backend WhatsApp (`whatsapp-server/`)
Un serveur autonome sous Node.js qui gère la connexion WhatsApp.
- **index.js** : Utilise Baileys pour maintenir la session et Express pour recevoir les commandes du site.
- **Auto-reconnexion** : Le serveur tente de se reconnecter automatiquement en cas de coupure.
- **Endpoint API** : `http://localhost:3001/send-notification`.

### 2. Intégration Frontend (`Reservation.tsx`)
- Dès qu'une réservation est confirmée dans Firestore, le site envoie une requête discrète au serveur local pour déclencher le message WhatsApp.
- **Message formaté** : Le message envoyé contient le nom de la cliente, le service, la date et l'heure.

## Comment l'activer ?

Pour faire fonctionner le système, vous devez suivre ces étapes sur votre ordinateur :

1.  **Installation** : Allez dans le dossier `whatsapp-server` et installez les dépendances :
    ```bash
    cd whatsapp-server
    npm install
    ```
2.  **Démarrage** : Lancez le serveur :
    ```bash
    npm start
    ```
3.  **Liaison** : Un QR code va s'afficher dans votre terminal. Scannez-le avec l'application WhatsApp de votre téléphone (comme pour WhatsApp Web).
4.  **Test** : Faites une réservation sur votre site. Le message sera envoyé automatiquement !

> [!NOTE]
> Le serveur doit rester allumé pour envoyer les messages. Pour une utilisation réelle, il est conseillé de l'héberger sur un petit serveur en ligne (VPS).

> [!TIP]
> Si vous voulez aussi recevoir une notification sur votre propre numéro à chaque nouvelle réservation, assurez-vous que `OWNER_PHONE` est bien configuré dans le fichier `.env` du dossier `whatsapp-server`.
