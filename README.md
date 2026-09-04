# Sémaphore

Site du cabinet Sémaphore — Laurence Crespel, graphologue et morphopsychologue à Vertou.

Site statique construit avec [Nuxt 4](https://nuxt.com) et [@nuxt/content](https://content.nuxt.com), déployé sur Netlify. Le contenu des pages est en markdown dans `content/`, éditable en ligne via Netlify CMS sur `/admin`.

## Développement

Prérequis : Node 20 ou plus récent.

```bash
npm install
npm run dev        # serveur de développement sur localhost:3000
npm run generate   # build statique vers .output/public
npm run preview    # prévisualise le build statique
```

## Modifier le contenu

Le texte des pages vit dans `content/*.md` et les actualités dans `content/actu/*.md` — pas dans les fichiers `.vue`, qui ne sont que des gabarits d'affichage.

Le plus simple pour Laurence est de passer par `/admin` (Netlify CMS), qui écrit directement dans ces fichiers.

Chaque fichier markdown doit respecter le schéma déclaré dans `content.config.ts` : une page a besoin d'un `title`, une actualité d'un `title`, d'une `date` (texte libre) et d'une `description`. Un frontmatter invalide fait échouer le build.

## Déploiement

Netlify lit `netlify.toml` : commande `npm run generate`, dossier publié `.output/public`.
