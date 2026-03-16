# Plan : Migration Netlify → GitHub Pages

**Date de création : 2026-03-16**
**Statut global : en cours**

---

## Secrets à migrer

| Secret | Valeur / source | Destination | Statut |
|---|---|---|---|
| `TYPEKIT_ID` | `hdj5dnb` (fichiers `.env`) | GitHub Actions secrets | :white_check_mark: fait |
| `GATSBY_FORMSPREE_ENDPOINT` | `https://formspree.io/f/xreyyknp` | GitHub Actions secrets + `.env` / `.env.development` | :white_check_mark: fait |

---

## Étapes

### 1. Remplacer Netlify Forms par Formspree
- [x] Modifier `src/components/form.tsx` — retirer `data-netlify`, `data-netlify-honeypot`, champs cachés Netlify ; ajouter `action` Formspree et champ honeypot `_gotcha`
- [x] Mettre à jour le contenu légal FR/EN (`fr_legal.md`, `en_legal.md`)
- [x] Mettre à jour la politique de confidentialité FR/EN (`fr_privacy.md`, `en_privacy.md`)
- [x] Mettre à jour le texte de consentement contact FR/EN (`fr_contact.md`, `en_contact.md`)
- [x] Créer un compte Formspree et un formulaire → endpoint : `https://formspree.io/f/xreyyknp`
- [x] Ajouter `GATSBY_FORMSPREE_ENDPOINT` dans `.env` et `.env.development`
- [x] Tester le formulaire localement

### 2. Workflow GitHub Actions
- [x] Créer `.github/workflows/deploy.yml` (Node 18, `npm ci && npm run build`, deploy-pages)
- [x] Ajouter le secret `TYPEKIT_ID` dans GitHub → Settings → Secrets → Actions
- [x] Ajouter le secret `GATSBY_FORMSPREE_ENDPOINT` dans GitHub → Settings → Secrets → Actions
- [x] Activer GitHub Pages : Settings → Pages → Source : « GitHub Actions »
- [x] Vérifier que le premier déploiement réussit

### 3. En-têtes de sécurité
- [x] Ajouter les balises `<meta>` dans `gatsby-ssr.tsx` (`Referrer-Policy`, `X-Content-Type-Options`)
- **Note :** `X-Frame-Options` n'a pas d'équivalent `<meta>` — limitation acceptée pour un site statique

### 4. Domaine personnalisé
- [x] Ajouter `static/CNAME` avec `olombelona.com`
- [x] Configurer le domaine personnalisé dans GitHub Pages (`olombelona.com`)
- [ ] Activer « Enforce HTTPS » (en attente du certificat — nécessite DNS d'abord)

### 5. Migration DNS (Gandi)
- [x] Mettre à jour les enregistrements A vers les IP GitHub Pages (TTL 3600, cutover direct)
- [x] Mettre à jour le CNAME `www` → `olombelona.github.io`
- [x] Vérifier que le site fonctionne sur `http://olombelona.com`
- [x] Vérifier le certificat HTTPS (Let's Encrypt, expire 2026-06-14)
- [x] Activer « Enforce HTTPS »

### 6. Nettoyage
- [x] Supprimer `netlify.toml`
- [x] Mettre à jour `CLAUDE.md` — remplacer les sections Netlify par GitHub Pages
- [ ] Supprimer les variables d'environnement de Netlify (`TYPEKIT_ID`)
- [ ] Désactiver / supprimer le site Netlify

### 7. Vérification finale
- [ ] `npm run build` passe localement
- [ ] Le workflow GitHub Actions déploie avec succès
- [ ] Le formulaire de contact envoie correctement via Formspree
- [ ] Le domaine personnalisé résout et sert en HTTPS
- [ ] Toutes les pages s'affichent correctement (accueil, à propos, contact, renala, confidentialité, légal)
- [ ] En-têtes de sécurité présents (`curl -I`)

---

## Rollback

Tant que le site Netlify est actif, un retour arrière consiste à remettre les enregistrements DNS vers Netlify (délai = durée du TTL, 5 min si abaissé).
