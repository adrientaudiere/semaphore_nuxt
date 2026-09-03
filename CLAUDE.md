# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing site for **Sémaphore** (Laurence Crespel, graphologue/morphopsychologue). All user-facing copy is in **French** — keep it that way when editing templates or content.

Stack: Nuxt 2 + `@nuxt/content` (file-based markdown), Tailwind CSS, Vuetify, FontAwesome, Netlify CMS. `ssr: false`, `target: 'static'` — the site is pre-rendered by `nuxt generate` and served as static files.

## Commands

```bash
npm install
npm run dev        # dev server on localhost:3000
npm run generate   # static build -> dist/ (this is the deploy artifact)
npm run build && npm run start   # SPA build + node server (not the deploy path)
npm run lint       # eslint over .js/.vue
npm test           # jest (coverage is collected by default)
npx jest test/Logo.spec.js   # single test file
npx jest -t "is a Vue instance"   # single test by name
```

ESLint also runs inside the webpack build via `@nuxtjs/eslint-module`, so lint errors break `dev`/`generate`.

The toolchain is Nuxt 2 / webpack 4. On Node ≥ 17 it can fail with `ERR_OSSL_EVP_UNSUPPORTED`; if so, prefix commands with `NODE_OPTIONS=--openssl-legacy-provider`.

## Architecture

### Content is markdown, pages are thin shells

Every `pages/*.vue` is a near-empty wrapper that fetches its markdown from `content/` via `asyncData({ $content })` and renders it with `<nuxt-content :document="page" />`. The mapping is 1:1 by name:

- `pages/bilan.vue` → `content/bilan.md`, `pages/apropos.vue` → `content/apropos.md`, etc.
- `pages/actualite.vue` and `pages/index.vue` list `content/actu/` (news posts) via `$content('actu').fetch()`.
- `pages/_slug.vue` renders a single post: `$content('actu', params.slug)`.

**Text edits belong in `content/*.md`, not in the `.vue` files.** Adding a new static page means creating both the markdown file and a matching page component (and a nav entry in `components/TheNavBar.vue`).

`_slug.vue` sits at the root of `pages/`, so a news post lives at `/<slug>`, not `/actu/<slug>`. A post slug colliding with an existing page name (e.g. `formation`) would be shadowed by the static route.

Markdown frontmatter is load-bearing: pages read `title`/`description`, and `actu` posts also read `date` — note `date` is a free-text **string** (e.g. "A distance le mardi 3 novembre 2026 de 12h30 à 14h"), not a parsed date, so posts are not sorted chronologically by it.

### Netlify CMS

`static/admin/config.yml` exposes two collections editable at `/admin` through Netlify Identity + git-gateway on `master`: `pages` (→ `content/`) and `Actualites` (→ `content/actu`, slug `{{year}}-{{month}}-{{day}}-{{slug}}`). Commits titled `Update Actualites "…"` come from that editor. If a frontmatter field is added to markdown, add it to `config.yml` too or the CMS will drop it on save. Media uploads go to `static/img` and are referenced as `/img/...`.

### Styling

Three layers coexist — prefer Tailwind:

- **Tailwind** with a custom, deliberately small palette in `tailwind.config.js` (`gris`, `bleu`, `orange`, `vert`, `rouge`, `gris_clair`, `violet`, `vert_sombre`) and Quicksand as the sans/body font. Only these color names exist; the default Tailwind palette is replaced, not extended. `purge` scans `components/`, `layouts/`, `pages/`, `plugins/`, `nuxt.config.js` — classes built dynamically in strings will be purged out.
- **Global element styles** live in the un-scoped `<style>` of `layouts/default.vue` (headings, links, lists, paragraph indent) plus `assets/css/main.sass`. Page-level `<style>` blocks are frequently un-scoped too, so they leak globally.
- **Vuetify** components (`v-card`, `v-btn`) are used on the news listing pages only; `defaultAssets: false`, so no Vuetify fonts/icons are loaded.

Icons use the `nuxt-fontawesome` global component `<fas icon="..." />` (solid + brands sets registered in `nuxt.config.js`).

Components are auto-imported (`components: true`), so no explicit `import`/`components` registration in `.vue` files.

### Other

- `middleware/`, `plugins/`, `store/` contain only the Nuxt scaffold READMEs — nothing is wired up.
- Analytics is GoatCounter, injected via `head.script` in `nuxt.config.js`.
- `test/` holds a single smoke test; there is no test infrastructure beyond `@vue/test-utils` mounts.
