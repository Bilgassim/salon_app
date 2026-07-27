# Plan d'implémentation : Intégration Firebase & PWA

L'objectif est d'utiliser les clés fournies par l'utilisateur pour connecter le frontend au backend Firebase, permettant ainsi le stockage des réservations et l'envoi de notifications gratuites.

## Changements Techniques

### 1. Installation des dépendances
- `npm install firebase` : SDK Firebase.
- `npm install vite-plugin-pwa -D` : Plugin pour transformer le site en application installable.

### 2. [NOUVEAU] Configuration Firebase
- Créer [src/firebase.ts](file:///C:/Users/dell/salon_app/src/firebase.ts) pour initialiser l'application avec les clés fournies.
- Exposer les instances `db` (Firestore) et `messaging` (Notifications).

### 3. [MODIFICATION] Page Réservation
- Dans [Reservation.tsx](file:///C:/Users/dell/salon_app/src/app/pages/Reservation.tsx) :
    - Modifier `handleConfirm` pour envoyer les données vers Firestore en plus du `localStorage`.
    - Ajouter un état "chargement" lors de la synchronisation avec Firebase.

### 4. [NOUVEAU] Service Worker & Manifest
- Configurer [vite.config.ts](file:///C:/Users/dell/salon_app/vite.config.ts) pour générer les fichiers PWA.
- Définir le nom de l'app, les couleurs de thème (Bleu Zara) et les icônes.

### 5. [NOUVEAU] Interface Admin
- Créer une page simple `/admin-zara` qui affiche la liste des réservations en temps réel.
- Cette page demandera l'autorisation de notifications pour que la gérante reçoive les alertes.

## Plan de Vérification
1. Faire une réservation -> Vérifier l'apparition instantanée dans la console Firebase.
2. Installer le site sur mobile via le bouton du navigateur.
3. Tester la réception d'une notification push sur le bureau/mobile.
