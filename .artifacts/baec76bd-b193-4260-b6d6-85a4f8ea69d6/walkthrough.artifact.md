# Walkthrough - Installation Multi-Apps (Client & Admin)

J'ai implémenté une solution innovante pour vous permettre d'avoir **deux icônes distinctes** sur votre écran d'accueil : une pour vos clientes et une pour votre gestion personnelle.

## Nouvelles Fonctionnalités

### 1. Double Identité PWA
- **Zara Beauté (Client)** : L'application principale pour les réservations.
- **Zara Admin (Gestion)** : Une application séparée qui ouvre directement votre tableau de bord.
- **Comment ça marche ?** Le site détecte sur quelle page vous vous trouvez et propose l'installation de l'application correspondante.

### 2. Raccourcis (Shortcuts)
- Si vous installez uniquement l'application cliente, vous pouvez maintenant rester appuyé sur l'icône pour voir un menu **"Admin"** apparaître. Cela vous permet d'accéder à vos réservations encore plus vite.

### 3. Design Différencié
- L'application Admin possède son propre nom ("Zara Admin") et une couleur de thème plus sombre pour la distinguer facilement de l'interface cliente.

## Comment installer les deux ?

1. **Pour l'app Cliente** : Allez sur la page d'accueil et utilisez le bouton "Télécharger" (Android) ou "Sur l'écran d'accueil" (iPhone).
2. **Pour l'app Admin** : Allez sur `.../salon_app/#/admin-zara`. Le site vous proposera alors d'installer "Zara Admin" comme une nouvelle application.

---

### Pour mettre à jour votre site :

```powershell
rm -r -force dist
npm run deploy
git add .
git commit -m "feat: enable double PWA installation for client and admin"
git push origin main
```

> [!TIP]
> Une fois sur la page Admin, si le bouton d'installation ne s'affiche pas tout de suite, rafraîchissez la page une fois pour que le nouveau "moteur" se mette en place.
