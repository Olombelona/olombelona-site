# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Olombelona company website — a Gatsby 5 static site with React 18, TypeScript (strict), and bilingual content (French/English). Deployed on GitHub Pages.

## Commands

| Command | Description |
|---|---|
| `npm run develop` | Start Gatsby dev server |
| `npm run build` | Production build |
| `npm run serve` | Serve production build locally |
| `npm run clean` | Clear Gatsby cache — run after plugin/config changes or when data looks stale |
| `npm run typecheck` | TypeScript type-check (`tsc --noEmit`) |

No test framework is configured. Node version is pinned to `v18.20.8` (`.nvmrc`).

- Kill port before restarting dev server: `lsof -ti:PORT | xargs kill -9` — default is 8000, pass `--port XXXX` to use another

## Environment

Requires `TYPEKIT_ID` env var (Adobe Fonts kit ID) — set in `.env` files (gitignored).
Requires `GATSBY_FORMSPREE_ENDPOINT` env var (Formspree form URL) — set in `.env` files and GitHub Actions secrets.

## Architecture

### Content Pipeline

Markdown files in `medias/markdown_content/{fr,en}/` → `gatsby-source-filesystem` → `gatsby-transformer-remark` → GraphQL nodes with `frontmatter` + `html` → render components query by `categorie` and filter by `lang` via the `useNode()` hook.

Frontmatter schema: `categorie` (home|about|team|contact|legal|privacy), `lang` (en|fr), `title`, `subtitle`, `message`, `misc`, `menu`, `privacy_link`.

Adding a new frontmatter field to contact markdown requires updating the GraphQL query in `src/render/render_contact.tsx` too.

New pages should follow the `privacy.tsx` pattern (page-level `graphql` export + `RenderPage`). Exception: `legal.tsx` uses the same pattern but predates it — both work identically.

UI navigation labels live in `medias/tree.json`, keyed by language.

### i18n Pattern

- `RegionContext` (provided globally in `gatsby-browser.tsx`) holds `lang` and `set_lang`
- Language initialises as `"fr"` at SSR and post-hydration (via `useEffect` in `src/context.tsx`). Detection uses `localStorage` first, then `window.navigator.language`. Never read client-only values (`localStorage`, `navigator`) in `useState` initialiser — causes React hydration errors (#418).
- Render components use `useStaticQuery` to fetch all edges for a `categorie`, then `useNode(data, lang)` selects the correct language node
- All `window`/`document`/`localStorage` access must be guarded with `typeof window !== "undefined"` — Gatsby runs components server-side during build

### Barrel Files (C-style "headers")

Re-export barrels follow a naming convention: `hc.tsx` (components), `hr.tsx` (render), `hu.tsx` (utils). All imports should go through these barrels.

### Key Directories

- `src/pages/` — Gatsby file-system routed pages
- `src/render/` — Data-fetching + display components (one per content category)
- `src/components/` — Reusable UI: `design.tsx` (Box primitive), `gui.tsx` (Nav, Dropdown, Region selector), `form.tsx` (Form with dot notation API)
- `src/components/struct/` — Layout shell (Header, Footer, Layout)
- `src/components/menu/` — Header/footer navigation components
- `src/utils/` — `useNode()` hook and `get_css_value()` CSS property reader

### Styling

- CSS custom properties defined in `src/components/struct/layout.css` and `src/global.css`
- Components use inline styles (JS objects) extensively
- `get_css_value(name)` reads CSS custom properties at runtime with SSR guard — returns `undefined` during SSR. Any hardcoded fallback must match the actual value in `layout.css`, or you get a flash/size mismatch on first load.
- `Box` component supports a debug border mode via `--box_default_design: 1`

### Header Layout

- Header cells use `display: flex; alignItems: center` on both the container (`menu__header_big.tsx`) and each cell box (`menu_header_content.tsx`) for vertical centering — no absolute-positioning tricks.
- Cell boxes have `position: relative` (required for dropdown panels). Do not add extra wrapper divs between a cell Box and its content without accounting for this.

### Contexts

- `RegionContext` — global language state (provided in `gatsby-browser.tsx`)
- `gatsby-ssr.tsx` mirrors `gatsby-browser.tsx` — keep both in sync when changing providers. Changes to `gatsby-ssr.tsx` require a full dev server restart (not hot-reload).
- `onRenderBody` in `gatsby-ssr.tsx` accepts `{ setHeadComponents, setHtmlAttributes }` — use to inject global `<meta>` tags or set `<html lang>`.
- `HeaderContext` — local dropdown state (provided inside `Header` component)

### GraphQL

- Render components use `useStaticQuery(graphql`...`)` filtered by `frontmatter.categorie`

### Deployment

- GitHub Pages hosting with GitHub Actions CI/CD (`.github/workflows/deploy.yml`)
- Contact form processed by Formspree (endpoint in `GATSBY_FORMSPREE_ENDPOINT` env var)
- `gatsby-plugin-fix-fouc` with 3s timeout for Flash of Unstyled Content
- Adobe Typekit fonts loaded via `gatsby-plugin-web-font-loader`
- Security headers (`Referrer-Policy`, `X-Content-Type-Options`) set via `<meta>` tags in `gatsby-ssr.tsx` (GitHub Pages does not support custom HTTP headers; `X-Frame-Options` has no `<meta>` equivalent)

## Known Issues

- `npm run typecheck` is currently clean (errors resolved).

## GitHub Pages

- Custom domain: `olombelona.com` (CNAME file in `static/`)
- DNS (Gandi): A records → GitHub Pages IPs (`185.199.108.153` – `185.199.111.153`), `www` CNAME → `olombelona.github.io`
- Dismiss Dependabot alerts (Gatsby internals are not exploitable in a static site): `gh api repos/Olombelona/olombelona-site/dependabot/alerts/NUM --method PATCH --field state=dismissed --field dismissed_reason=tolerable_risk --field dismissed_comment="..."`
- `gatsby-plugin-sitemap` was removed — no sitemap is generated (intentional, low-profile site).

## Git Conventions

- Do NOT add `Co-Authored-By` lines to commit messages
- Documentation files (README, CONTRIBUTING) are written in French
