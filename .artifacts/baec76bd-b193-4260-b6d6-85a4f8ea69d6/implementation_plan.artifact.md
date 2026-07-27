# Plan d'implémentation : File d'attente dynamique et Gestion Admin

L'objectif est de synchroniser la file d'attente vue par les clients avec la réalité du salon gérée sur le tableau de bord Admin.

## Changements Proposés

### 1. [Base de données] Evolution du modèle
- Utilisation du champ `status` pour filtrer les clients :
    - `confirmed` : En attente dans la file.
    - `completed` : Prestation terminée (disparaît de la file et du tableau de bord principal).
    - `cancelled` : Annulé par le client ou l'admin.

### 2. [Page Réservation] File d'attente réelle
- **Suppression des données fictives** : Retrait de `EXISTING_RESERVATIONS`.
- **Lecture en temps réel** : La liste des clients affichée dans le widget "File d'attente" proviendra directement de Firestore (uniquement ceux avec le statut `confirmed` pour aujourd'hui).
- **Mémorisation du DocID** : Lors d'une réservation, l'identifiant unique de Firebase sera stocké dans le téléphone du client pour permettre une annulation réelle en base de données.

### 3. [Tableau de Bord Admin] Contrôle total
- **Affichage du Rang** : Chaque bloc client affichera son numéro d'ordre (1, 2, 3...).
- **Actions rapides** : Ajout de deux boutons sur chaque fiche client :
    - **"Terminer" (Passer)** : Change le statut en `completed`. Le client libère sa place dans la file d'attente.
    - **"Supprimer"** : Supprime définitivement la réservation.
- **Tri chronologique** : Les clients sont classés par heure de réservation pour respecter l'ordre d'arrivée.

### 4. [Logique d'Annulation]
- Quand un client annule via son interface, le document correspondant dans Firebase passera en `cancelled`.

## Plan de Travail

### [ ] Phase 1 : Mise à jour de `Reservation.tsx`
- Connecter le widget de file d'attente à Firestore.
- Modifier la sauvegarde pour inclure l'ID du document dans le `localStorage`.
- Lier le bouton "Annuler" à la suppression/mise à jour dans Firebase.

### [ ] Phase 2 : Enrichissement de `Admin.tsx`
- Ajouter le calcul du rang (index + 1).
- Implémenter les fonctions `handleComplete` et `handleDelete`.
- Ajouter les boutons d'action avec confirmation.

## Vérification
1. Réserver sur un téléphone -> Vérifier l'apparition immédiate sur l'Admin avec le Rang 1.
2. Réserver sur un deuxième téléphone -> Rang 2.
3. Cliquer sur "Terminer" côté Admin -> Le premier client doit disparaître de la file d'attente sur les deux téléphones.
