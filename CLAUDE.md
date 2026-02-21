# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Olombelona company website — a Gatsby 5 static site with React 18, TypeScript (strict), and bilingual content (French/English). Deployed on Netlify.

## Commands

| Command | Description |
|---|---|
| `npm run develop` | Start Gatsby dev server |
| `npm run build` | Production build |
| `npm run serve` | Serve production build locally |
| `npm run clean` | Clear Gatsby cache |
| `npm run typecheck` | TypeScript type-check (`tsc --noEmit`) |

No test framework is configured. Node version is pinned to `v18.12.1` (`.nvmrc`).

## Environment

Requires `TYPEKIT_ID` env var (Adobe Fonts kit ID) — set in `.env` files (gitignored).

## Architecture

### Content Pipeline

Markdown files in `medias/markdown_content/{fr,en}/` → `gatsby-source-filesystem` → `gatsby-transformer-remark` → GraphQL nodes with `frontmatter` + `html` → render components query by `categorie` and filter by `lang` via the `useNode()` hook.

Frontmatter schema: `categorie` (home|about|team|contact|legal), `lang` (en|fr), `title`, `subtitle`, `message`, `misc`, `menu`.

UI navigation labels live in `medias/tree.json`, keyed by language.

### i18n Pattern

- `RegionContext` (provided globally in `gatsby-browser.tsx`) holds `lang` and `set_lang`
- Language detected from `window.navigator.language` at runtime; defaults to `fr`, uses `en` for non-French
- Render components use `useStaticQuery` to fetch all edges for a `categorie`, then `useNode(data, lang)` selects the correct language node

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
- `get_css_value(name)` reads CSS custom properties at runtime with SSR guard
- `Box` component supports a debug border mode via `--box_default_design: 1`

### Contexts

- `RegionContext` — global language state (provided in `gatsby-browser.tsx`)
- `HeaderContext` — local dropdown state (provided inside `Header` component)

### GraphQL

- Render components use `useStaticQuery(graphql`...`)` filtered by `frontmatter.categorie`
- Exception: `legal.tsx` uses a page-level `graphql` export query (data passed as page props)

### Deployment

- Netlify hosting with Netlify Forms (`data-netlify="true"`)
- `gatsby-plugin-fix-fouc` with 3s timeout for Flash of Unstyled Content
- Adobe Typekit fonts loaded via `gatsby-plugin-web-font-loader`

## Git Conventions

- Do NOT add `Co-Authored-By` lines to commit messages
