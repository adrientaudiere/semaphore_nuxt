# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing site for **Sémaphore** (Laurence Crespel, graphologue/morphopsychologue). All user-facing copy is in **French** — keep it that way when editing templates or content.

Stack: Nuxt 4 + `@nuxt/content` v3 (file-based markdown), Tailwind CSS, `@nuxt/icon`, `@nuxt/fonts`, Netlify CMS. `ssr: true` with Nitro prerendering — every route is written as complete HTML at build time and served as static files.

## Commands

```bash
npm install
npm run dev        # dev server on localhost:3000
npm run generate   # static build -> .output/public (this is the deploy artifact)
npm run preview    # serve the generated output locally
```

There is no linter and no test suite in this project.

## Architecture

### Nuxt 4 layout: source lives in `app/`

Nuxt 4 moved the source directory. `app/` holds `app.vue`, `pages/`, `layouts/`, `components/` and `assets/`. Static files served at the site root live in `public/` (Nuxt 2's `static/`). `content/`, `nuxt.config.ts`, `content.config.ts` and `tailwind.config.js` stay at the repo root.

### Content is markdown, pages are thin shells

Every `app/pages/*.vue` is a near-empty wrapper that fetches its markdown through `queryCollection()` inside `useAsyncData`, and renders it with `<ContentRenderer :value="page" />`. The mapping is 1:1 by name:

- `app/pages/bilan.vue` → `content/bilan.md`, `app/pages/apropos.vue` → `content/apropos.md`, etc.
- `app/pages/actualite.vue` and `app/pages/index.vue` list `content/actu/` (news posts) via `queryCollection('actu').all()`.
- `app/pages/[slug].vue` renders a single post: `queryCollection('actu').path('/actu/' + slug).first()`.

**Text edits belong in `content/*.md`, not in the `.vue` files.** Adding a new static page means creating both the markdown file and a matching page component (and a nav entry in `app/components/TheNavBar.vue`).

`[slug].vue` sits at the root of `app/pages/`, so a news post lives at `/<slug>`, not `/actu/<slug>` — even though its path *inside the collection* is `/actu/<slug>`. A post slug colliding with an existing page name (e.g. `formation`) would be shadowed by the static route.

### Collections are schema-checked

`content.config.ts` declares two collections with zod schemas: `pages` (all `content/*.md`, excluding `actu/**`, requires `title`) and `actu` (`content/actu/*.md`, requires `title`, `date`, `description`). A markdown file whose frontmatter breaks its schema **fails the build**, which is the main behavioural difference from Nuxt 2.

Note `date` is a free-text **string** (e.g. "A distance le mardi 3 novembre 2026 de 12h30 à 14h"), not a parsed date, so posts are not sorted chronologically by it.

Adding a frontmatter field means updating **three** places: the markdown, the zod schema in `content.config.ts`, and `public/admin/config.yml` (or the CMS drops the field on save).

`@nuxt/content` v3 builds a SQLite database at build time (`better-sqlite3`), cached in the gitignored `.data/` folder.

### Netlify CMS

`public/admin/config.yml` exposes two collections editable at `/admin` through Netlify Identity + git-gateway on `master`: `pages` (→ `content/`) and `Actualites` (→ `content/actu`, slug `{{year}}-{{month}}-{{day}}-{{slug}}`). Commits titled `Update Actualites "…"` come from that editor. Media uploads go to `public/img` and are referenced as `/img/...`.

### Deployment

`netlify.toml` pins the build: `npm run generate`, publish directory `dist`, Node 22 (Nuxt 4 requires Node 20+). It overrides whatever is configured in the Netlify UI.

**The publish directory differs between local and Netlify.** Locally `nuxt generate` writes to `.output/public`; on Netlify, Nitro auto-detects the host and switches to the `netlify-static` preset, which writes to `dist` instead. Pointing `publish` at `.output/public` makes the deploy fail with `Deploy directory '.output/public' does not exist` even though the build itself succeeded — the build log's `Nitro preset: netlify-static` line is the tell. To reproduce the Netlify output locally, run `NITRO_PRESET=netlify-static npm run generate`.

`public/sw.js` is a **service-worker unregistration stub**, not a real service worker. The old Nuxt 2 site shipped a `@nuxtjs/pwa` worker that cached `/_nuxt/` CacheFirst; the stub clears those caches and unregisters itself so returning visitors get the new site. It can be deleted once the installed base has turned over. It is force-kept in git via a `!public/sw.js` exception, because `.gitignore` still holds a blanket `sw.*` rule.

`public/_redirects` holds the Netlify redirect from the old `/entreprises` URL to `/pitcheravecimpact`.

### Styling

Two layers coexist — prefer Tailwind:

- **Tailwind** with a custom, deliberately small palette in `tailwind.config.js` (`gris`, `bleu`, `orange`, `vert`, `rouge`, `gris_clair`, `violet`, `vert_sombre`) and Quicksand as the sans/body font. Only these color names exist; the default Tailwind palette is replaced, not extended. The `content` globs scan `app/`, so classes built dynamically in strings will be purged out.
- **Global element styles** live in the un-scoped `<style>` of `app/layouts/default.vue` (headings, links, lists) plus `app/assets/css/main.css`. Page-level `<style>` blocks are frequently un-scoped too, so they leak globally.

Quicksand is self-hosted by `@nuxt/fonts`: it is downloaded at build time and served from the site, so visitors make no request to Google.

Icons use `@nuxt/icon`'s global `<Icon name="..." />` component with Iconify's FontAwesome sets, e.g. `<Icon name="fa-solid:envelope-square" />` and `<Icon name="fa-brands:linkedin" />`. Only `@iconify-json/fa-solid` and `@iconify-json/fa-brands` are installed.

Components are auto-imported, so no explicit `import`/`components` registration in `.vue` files.

### Other

- Analytics is GoatCounter, injected via `app.head.script` in `nuxt.config.ts`.
- `public/README.md` is a leftover Nuxt 2 scaffold file that is still published at `/README.md`; harmless, safe to delete.
