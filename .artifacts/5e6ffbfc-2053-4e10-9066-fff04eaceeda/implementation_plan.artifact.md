# Plan d'implémentation - Serveur de Notifications WhatsApp (Baileys)

L'objectif est de mettre en place un serveur Node.js indépendant qui utilise la bibliothèque Baileys pour envoyer des notifications de confirmation de réservation via WhatsApp de manière automatique et invisible pour la cliente.

## User Review Required

> [!IMPORTANT]
> **Scannage du QR Code** : Pour que le système fonctionne, vous devrez lancer le serveur une première fois et scanner un QR code qui s'affichera dans votre terminal avec votre téléphone (comme pour WhatsApp Web). Cela liera le compte du salon au serveur.
>
> **Hébergement** : Ce serveur doit tourner en permanence (sur un PC allumé ou un VPS) pour que les messages soient envoyés instantanément.

## Proposed Changes

### Backend (Nouveau dossier `whatsapp-server`)

#### [NOUVEAU] [index.js](file:///C:/Users/dell/salon_app/whatsapp-server/index.js)
- Initialisation de la connexion WhatsApp avec `baileys`.
- Gestion de la persistance de la session (pour ne pas scanner le QR code à chaque redémarrage).
- Création d'une API Express avec un endpoint `POST /send-notification`.
- Logique d'envoi de message formaté.

#### [NOUVEAU] [.env](file:///C:/Users/dell/salon_app/whatsapp-server/.env)
- Configuration du port du serveur.
- Numéro de téléphone de la gérante (Zara).

### Frontend (Application React)

#### [MODIFIER] [Reservation.tsx](file:///C:/Users/dell/salon_app/src/app/pages/Reservation.tsx)
- Ajout d'un appel API vers le nouveau serveur backend juste après la confirmation Firestore.
- Envoi des détails (nom, service, date, créneau) au serveur.

## Plan de vérification

### Tests Automatisés / Manuels
1.  **Lancement du Backend** : Installer les dépendances (`npm install`) et lancer le serveur (`npm start`).
2.  **Liaison WhatsApp** : Scanner le QR code affiché dans le terminal.
3.  **Test de Réservation** : Effectuer une réservation sur le site web.
4.  **Vérification WhatsApp** : Confirmer que la cliente (ou le numéro de test) reçoit bien le message automatique sans action manuelle.

---

Souhaitez-vous que je procède à la création des fichiers du serveur ?
*(Note: Vous devrez lancer l'installation des paquets manuellement dans le dossier `whatsapp-server` après mon intervention).*
