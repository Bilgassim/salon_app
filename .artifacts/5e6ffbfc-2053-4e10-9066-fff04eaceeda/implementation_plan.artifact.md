# Plan d'implémentation - Correction de la fidélité responsive via Iframe

L'objectif est de garantir que le mode mobile du prototype affiche réellement le design responsive du site (menu hamburger, hero mobile, etc.) en isolant le viewport à l'aide d'une `iframe`.

## Problème identifié
Actuellement, le site est rendu directement dans une `div`. Le navigateur utilise donc la largeur de la fenêtre totale (1920px par exemple) pour appliquer les styles CSS. Il ignore donc les règles mobiles (`md:hidden`, etc.) même si la `div` ne fait que 340px.

## Solution proposée
Utiliser une `iframe` pour le rendu du site à l'intérieur des cadres (téléphone et ordinateur). Une `iframe` possède son propre "viewport", ce qui force le navigateur à appliquer les bons styles CSS en fonction de la largeur de l'iframe.

## Changements proposés

### 1. Mode Standalone dans `showcase-main.tsx`
- Détecter la présence d'un paramètre `standalone=true` dans l'URL.
- Si présent : Afficher uniquement l'application (le site) en plein écran.
- Si absent : Afficher l'enveloppe du prototype (Showcase).

### 2. Intégration de l'Iframe
- Dans le prototype, remplacer le composant `<AppContent />` par une `<iframe />`.
- La source de l'iframe sera l'URL actuelle du prototype augmentée du paramètre `?standalone=true`.

### 3. Synchronisation de la Navigation
- Utiliser l'URL (le hash) pour synchroniser la page affichée dans le prototype et celle affichée dans l'iframe.
- Quand on clique sur un bloc de navigation à droite, l'iframe se met à jour.

## Plan de vérification

### Vérification manuelle
- [ ] Ouvrir le prototype.
- [ ] Passer en mode **Mobile** : Vérifier la présence du menu hamburger et du design mobile.
- [ ] Passer en mode **Ordinateur** : Vérifier la présence de la barre de navigation desktop.
- [ ] Tester la navigation entre les pages via les blocs de droite.
