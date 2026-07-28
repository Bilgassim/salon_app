# Walkthrough - File d'attente Dynamique & Gestion Totale Admin

J'ai transformé la file d'attente "fictive" en un système **100% réel et synchronisé** avec votre base de données Firebase.

## Changements Majeurs

### 1. File d'attente en temps réel (Côté Client)
- **Données Réelles :** Les personnages fictifs ont été supprimés. Désormais, la file d'attente n'affiche que les **vrais clients** qui ont réservé pour aujourd'hui via le site.
- **Synchronisation :** Si vous validez un client sur votre tableau de bord, il disparaît instantanément de la file d'attente de tout le monde.
- **Identification "Vous" :** Le client voit sa propre position mise en avant par le mot "Vous" dans la file.

### 2. Tableau de Bord Admin Amélioré (`/admin-zara`)
- **Numérotation des Rangs :** Chaque client a désormais son numéro de rang (RANG #1, RANG #2...) basé sur l'ordre d'arrivée. C'est l'ordre dans lequel vous devez les servir.
- **Actions de Gestion :**
    - **Bouton "Terminer" :** Une fois la prestation finie, cliquez ici. Le client est marqué comme "Terminé" en base de données et libère sa place dans la file d'attente.
    - **Bouton "Supprimer" :** Pour effacer définitivement une erreur ou une réservation indésirable.
- **Tri Chronologique :** Les clients sont classés du plus ancien au plus récent (le premier en haut est le prochain à servir).

### 3. Annulation Synchronisée
- Lorsqu'un client annule sa réservation depuis son téléphone, son bloc **disparaît automatiquement** de votre tableau de bord admin et de la file d'attente publique.

### 4. Installation Universelle (PWA)
- **Sur Android :** Un bouton bleu "Télécharger l'application" apparaît désormais automatiquement. Il déclenche une installation fluide avec une interface de style "App Store".
- **Sur iPhone :** Le guide visuel intelligent (Partager -> Écran d'accueil) est maintenu pour accompagner les utilisatrices Apple.
- **Stand-alone :** Une fois installée, l'application s'ouvre en plein écran sans les barres du navigateur, offrant une expérience 100% native.

## Comment tester ?
1. Ouvrez la page de réservation sur un téléphone et réservez.
2. Ouvrez la page `/admin-zara` sur votre ordinateur : vous verrez le client apparaître avec le **RANG #1**.
3. Cliquez sur **"Terminer"** sur l'ordinateur : vous verrez le client disparaître instantanément du téléphone.

---

### Pour mettre à jour votre site :
```powershell
git add .
git commit -m "feat: dynamic real-time queue and full admin control"
git push origin main
npm run deploy
```
