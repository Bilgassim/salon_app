# Plan d'implémentation : Rappels Clients & Expérience Pro

L'objectif est de s'assurer que la cliente ne manque pas son rendez-vous en lui proposant un système de rappel automatique, gratuit et respectueux de son temps.

## Approche Retenue : Le "Rappel Intelligent"

Puisque nous voulons une solution gratuite et fiable, nous allons combiner deux méthodes :

### 1. [Fiabilité 100%] Intégration Calendrier (Option A)
- **Fonctionnement** : Après la confirmation, un bouton élégant **"Ajouter à mon calendrier"** apparaît.
- **Détails** : En un clic, cela crée un événement dans le calendrier de la cliente (Google, iPhone, Outlook) avec :
    - Titre : ✂️ Rendez-vous Centre de Beauté Zara
    - Lieu : Salon Zara
    - **Alerte : Automatiquement réglée sur 1 heure avant.**

### 2. [Moderne] Notifications Push Locales (Option B)
- **Fonctionnement** : Si la cliente a installé l'application (PWA), on lui propose d'activer les notifications de rappel.
- **Note** : Cette méthode est plus moderne mais dépend de la compatibilité du navigateur (très bonne sur Android, en progrès sur iPhone).

## Changements Proposés

### 1. [UI] Mise à jour de la page de Confirmation
- Dans [Reservation.tsx](file:///C:/Users/dell/salon_app/src/app/pages/Reservation.tsx) :
    - Modifier l'écran de succès pour inclure le nouveau bloc de rappel.
    - Créer un bouton principal stylisé pour l'ajout au calendrier.
    - Ajouter une petite option "M'alerter par notification" (Push).

### 2. [Logique] Générateur d'événements
- Créer une fonction utilitaire pour générer des liens `Google Calendar` et des fichiers `.ics` (standard universel).

### 3. [Design] Respect de la charte
- Utilisation des couleurs **Bleu Zara**, de la police **Fraunces** pour les titres et **Outfit** pour les boutons d'action.

## Plan de Vérification
1. Confirmer une réservation fictive.
2. Cliquer sur "Ajouter au calendrier".
3. Vérifier que l'événement s'ouvre bien sur téléphone avec le rappel de 1h configuré.
4. Tester le bouton de notification push (si PWA installée).
