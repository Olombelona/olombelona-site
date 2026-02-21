# Contribuer à Olombelona

Merci de votre intérêt pour ce projet. Voici les conventions à suivre pour contribuer.

## Mise en place

1. Cloner le dépôt
2. Installer les dépendances : `npm install`
3. Utiliser la bonne version de Node : `nvm use`
4. Créer un fichier `.env.development` avec votre `TYPEKIT_ID`
5. Lancer le serveur de développement : `npm run develop`

## Conventions de code

### Imports

Tous les imports passent par les fichiers barrel :
- `hc.tsx` pour les composants
- `hr.tsx` pour les rendus
- `hu.tsx` pour les utilitaires

### Styles

- Les propriétés CSS personnalisées sont définies dans `src/components/struct/layout.css` et `src/global.css`
- Les composants utilisent des styles inline (objets JS)
- `get_css_value(name)` permet de lire les propriétés CSS à l'exécution

### TypeScript

- Le mode strict est activé
- Lancer `npm run typecheck` avant de soumettre des changements

### Contenu bilingue

- Tout nouveau contenu doit être ajouté en **français et en anglais**
- Les fichiers Markdown vont dans `medias/markdown_content/fr/` et `medias/markdown_content/en/`
- Le frontmatter doit inclure au minimum `categorie` et `lang`

## Vérifications avant commit

1. `npm run build` — le build de production doit réussir sans erreur
2. `npm run typecheck` — la vérification des types doit passer
3. Tester le changement de langue sur les pages concernées
4. Vérifier qu'il n'y a pas d'avertissements dans la console du navigateur

## Branches et commits

- Travailler sur une branche dédiée, pas directement sur `main`
- Messages de commit concis et descriptifs, en anglais
