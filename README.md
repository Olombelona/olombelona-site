# Olombelona

Site vitrine de la société Olombelona — atelier de création digitale spécialisé dans le développement d'applications sur mesure.

Site statique construit avec **Gatsby 5**, **React 18** et **TypeScript**, avec du contenu bilingue (français / anglais). Hébergé sur **Netlify**.

## Prérequis

- [Node.js](https://nodejs.org/) v18.12.1 (voir `.nvmrc`)
- npm

```bash
nvm use
```

## Installation

```bash
npm install
```

Créer un fichier `.env.development` à la racine du projet :

```
TYPEKIT_ID=votre_id_typekit
```

## Commandes

| Commande | Description |
|---|---|
| `npm run develop` | Lancer le serveur de développement Gatsby |
| `npm run build` | Build de production |
| `npm run serve` | Servir le build de production en local |
| `npm run clean` | Vider le cache Gatsby |
| `npm run typecheck` | Vérification des types TypeScript |

## Structure du projet

```
├── gatsby-config.ts          # Configuration Gatsby et plugins
├── gatsby-browser.tsx        # Providers côté client (RegionContext)
├── gatsby-ssr.tsx            # Providers côté SSR (RegionContext)
├── medias/
│   ├── markdown_content/
│   │   ├── fr/               # Contenu en français (Markdown)
│   │   └── en/               # Contenu en anglais (Markdown)
│   ├── tree.json             # Labels de navigation par langue
│   └── icon.png              # Icône du manifest PWA
├── src/
│   ├── pages/                # Pages routées par Gatsby
│   ├── render/               # Composants de rendu (un par catégorie de contenu)
│   ├── components/
│   │   ├── struct/           # Layout, Header, Footer
│   │   ├── menu/             # Navigation header/footer
│   │   ├── design.tsx        # Primitif Box
│   │   ├── gui.tsx           # Nav, Dropdown, sélecteur de langue
│   │   └── form.tsx          # Formulaire (API dot notation)
│   └── utils/                # Hook useNode(), utilitaire CSS
```

## Contenu bilingue

Le contenu est géré via des fichiers Markdown dans `medias/markdown_content/{fr,en}/`. Chaque fichier contient un frontmatter avec les champs suivants :

- `categorie` : home | about | team | contact | legal
- `lang` : fr | en
- `title`, `subtitle`, `message`, `misc`, `menu`

La langue est détectée automatiquement depuis le navigateur et peut être changée via le sélecteur dans le header.

## Déploiement

Le site est déployé automatiquement sur [Netlify](https://www.netlify.com/). Les formulaires utilisent Netlify Forms.

## Auteur

Stanislas Marçais / Knupel
