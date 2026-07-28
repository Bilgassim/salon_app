# Plan d'implémentation : Installation Multi-Apps (Client & Admin)

L'objectif est de permettre l'installation de deux icônes distinctes sur l'écran d'accueil : une pour le site client ("Zara Beauté") et une pour la gestion ("Zara Admin").

## Solutions Techniques

### 1. PWA Shortcuts (Raccourcis)
- Ajouter des raccourcis dans le manifeste principal.
- **Bénéfice** : En restant appuyé sur l'icône "Zara Beauté", une option "Admin" apparaîtra pour ouvrir directement le tableau de bord.

### 2. Double Installation (Manifestes Dynamiques)
- Créer un deuxième fichier de manifeste spécifique pour l'administration.
- Utiliser un script pour changer le lien du manifeste dans le `<head>` selon la page où se trouve l'utilisateur.
- **Bénéfice** : Permet d'avoir deux icônes avec des noms et des couleurs différentes sur le téléphone.

## Changements Proposés

### 1. [Vite] Enrichissement du Manifeste Principal
- Dans `vite.config.ts`, ajouter la section `shortcuts` :
    - Nom : "Admin"
    - URL : "/#/admin-zara"
    - Icône spécifique.

### 2. [Public] Création du Manifeste Admin
- Créer [public/manifest-admin.webmanifest](file:///C:/Users/dell/salon_app/public/manifest-admin.webmanifest) :
    - `name` : "Zara Admin"
    - `id` : "zara-admin-app"
    - `start_url` : "/salon_app/#/admin-zara"
    - `theme_color` : "#04080f" (couleur sombre pro)

### 3. [Logic] Sélecteur de Manifeste
- Créer un composant `ManifestSelector.tsx` qui :
    - Détecte si l'URL contient `admin-zara`.
    - Change dynamiquement la balise `<link rel="manifest">`.
    - Change le titre `<meta name="apple-mobile-web-app-title">`.

## Plan de Travail

### [ ] Phase 1 : Raccourcis & Manifeste Statique
- Configurer les raccourcis dans le build.
- Écrire le fichier de manifeste admin dans le dossier public.

### [ ] Phase 2 : Logique de switch
- Développer le composant de bascule de manifeste.
- L'intégrer dans le composant `Root`.

## Vérification
1. Sur la page d'accueil -> Vérifier que "Zara Beauté" est installable.
2. Sur la page `/admin-zara` -> Vérifier que le navigateur propose d'installer "Zara Admin" comme une nouvelle application.
3. Vérifier que les deux icônes coexistent sur l'écran d'accueil.
