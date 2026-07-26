# Plan d'implémentation : Gestion Responsable des Réservations

Ce plan vise à permettre aux clientes de modifier ou d'annuler leur réservation de manière autonome, tout en instaurant des garde-fous pour éviter les abus (comme les annulations multiples).

## Fonctionnalités Proposées

### 1. Persistance Locale
- Utilisation du `localStorage` pour enregistrer la réservation de l'utilisatrice sur son appareil.
- Données stockées : Service, Date, Créneau, Nom, Téléphone, et un compteur d'annulations.

### 2. Interface "Ma Réservation"
- Si une réservation est détectée, elle s'affiche en priorité sur la page `/reservation`.
- Affichage d'un récapitulatif clair avec deux actions : **Modifier** et **Annuler**.

### 3. Logique d'Annulation Responsable
- **Règle d'or :** Une seule annulation autonome autorisée par jour/session.
- Si l'utilisatrice tente d'annuler pour la deuxième fois, le bouton est bloqué et un message invite à contacter le salon via WhatsApp pour toute modification manuelle.
- Demande de confirmation avant toute annulation définitive.

### 4. Logique de Modification
- Le bouton "Modifier" pré-remplit le formulaire existant et ramène l'utilisatrice à l'étape du choix du créneau ou du service.

## Changements Techniques

### [Reservation.tsx](file:///C:/Users/dell/salon_app/src/app/pages/Reservation.tsx)
- Ajouter des fonctions utilitaires pour gérer le `localStorage` (`saveReservation`, `getReservation`, `clearReservation`).
- Ajouter un état `existingBooking` récupéré au montage du composant.
- Créer un sous-composant `ManageBooking` pour l'interface de gestion.
- Mettre à jour `handleConfirm` pour sauvegarder les données localement.

## Vérification Plan

### Tests Manuels
- Effectuer une réservation complète -> Vérifier qu'elle apparaît au rechargement de la page.
- Modifier la réservation -> Vérifier que le nouveau créneau est bien pris en compte.
- Annuler la réservation -> Vérifier qu'elle disparaît.
- Tenter une deuxième réservation + annulation -> Vérifier que le système bloque l'annulation et affiche le message de contact WhatsApp.
