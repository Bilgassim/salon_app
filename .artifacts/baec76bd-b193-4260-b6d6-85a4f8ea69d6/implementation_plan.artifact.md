# Plan d'implémentation : Compatibilité iPhone (iOS) & Installation PWA

L'objectif est de permettre l'installation du site en tant qu'application sur iPhone, ce qui est nécessaire pour activer les notifications push sur iOS.

## Pourquoi l'iPhone ne propose pas de bouton "Télécharger" ?
Contrairement à Android, Apple ne permet pas aux navigateurs d'afficher un bouton automatique d'installation. L'utilisateur doit obligatoirement :
1. Utiliser **Safari**.
2. Cliquer sur le bouton **Partager** (le carré avec une flèche vers le haut).
3. Cliquer sur **Sur l'écran d'accueil**.

## Changements Proposés

### 1. [HTML] Optimisation pour Apple
- Ajouter les balises meta spécifiques à iOS dans `index.html` :
    - `apple-mobile-web-app-capable` : Pour masquer la barre d'adresse.
    - `apple-mobile-web-app-status-bar-style` : Pour une intégration propre.
    - `apple-touch-icon` : Pour avoir une belle icône sur l'écran d'accueil.

### 2. [Vite] Restauration des Icônes PWA
- Créer des icônes temporaires (ou utiliser un placeholder) pour que le manifeste soit valide aux yeux d'Apple.
- Mettre à jour `vite.config.ts` pour inclure ces icônes.

### 3. [UI] Guide d'Installation pour iPhone
- Créer un petit composant discret `IOSInstallPrompt` qui s'affiche uniquement sur iPhone/iPad.
- Ce composant expliquera visuellement à l'utilisateur comment installer l'app (Partager -> Écran d'accueil).

## Plan de Travail

### [ ] Phase 1 : Meta tags & Icônes
- Modifier `index.html` pour inclure le support Apple.
- Configurer une icône par défaut dans `public/`.

### [ ] Phase 2 : Guide visuel
- Créer le composant d'aide à l'installation dans `src/app/components/ui/IOSInstallPrompt.tsx`.
- L'intégrer dans `Root.tsx`.

## Vérification
- Ouvrir le site sur Safari iPhone -> Vérifier que l'option "Sur l'écran d'accueil" affiche bien le logo et le nom de l'app.
- Une fois installé, vérifier que le site s'ouvre sans les barres de navigation du navigateur (plein écran).
