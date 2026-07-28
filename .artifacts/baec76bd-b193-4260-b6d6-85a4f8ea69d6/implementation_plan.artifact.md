# Plan d'implémentation : Compatibilité Android & Installation "App Store"

Ce plan vise à offrir aux utilisateurs Android une expérience d'installation aussi fluide et professionnelle qu'une application téléchargée sur le Play Store, tout en conservant les optimisations faites pour l'iPhone.

## Stratégie pour Android (Chrome/Samsung)
Sur Android, le processus est beaucoup plus automatisé. Nous allons utiliser l'événement `beforeinstallprompt` pour afficher un bouton "Installer" personnalisé qui déclenche l'installation native.

## Changements Proposés

### 1. [Vite] Manifest "Rich UI"
- Mettre à jour `vite.config.ts` pour transformer le manifeste simple en un manifeste "riche" (nécessaire pour le look App Store sur Android).
- Ajouter une description détaillée et des placeholders pour les captures d'écran.

### 2. [UI] Nouveau Composant `UnifiedInstallPrompt`
- Ce composant remplacera `IOSInstallPrompt`.
- **Sur iPhone** : Il affichera toujours le guide visuel (Partager -> Écran d'accueil).
- **Sur Android** : Il affichera un bouton bleu élégant **"Télécharger l'application"** qui s'active automatiquement dès que Chrome autorise l'installation.

### 3. [Logic] Gestion de l'installation native
- Capturer l'événement d'installation de Chrome.
- Masquer le bouton une fois que l'application est installée pour ne pas encombrer l'écran.

## Plan de Travail

### [ ] Phase 1 : Manifest & Captures d'écran
- Configurer les métadonnées de l'application dans le fichier de build.

### [ ] Phase 2 : Développement du `UnifiedInstallPrompt`
- Implémenter la logique `beforeinstallprompt` pour Android.
- Unifier le design avec les polices **Fraunces** et **Outfit**.

### [ ] Phase 3 : Intégration
- Remplacer l'ancien prompt par le nouveau dans `Root.tsx`.

## Vérification
- **Sur Android** : Ouvrir le site, attendre quelques secondes, et vérifier l'apparition du bouton d'installation. Cliquer et vérifier que le système Android propose d'installer "Zara Beauté".
- **Sur iPhone** : Vérifier que le guide visuel fonctionne toujours.
