---
menu: "confidentialité"
title: "Renala — Politique de confidentialité"
categorie: "renala-privacy"
lang: "fr"
---

**Dernière mise à jour : 25 mars 2026**

Olombelona SAS (« nous »), 17 rue Roger Salengro, 93310 Le Pré-Saint-Gervais, France — édite Renala, un visualiseur d'espace disque pour macOS. Cette politique décrit comment Renala traite vos données.

La version de référence de cette politique est publiée à l'adresse [https://olombelona.com/renala/privacy](https://olombelona.com/renala/privacy).

---

## Ce que fait Renala

Renala analyse les dossiers et volumes que vous sélectionnez, et affiche leur contenu sous forme de treemap interactif. Les résultats d'analyse sont mis en cache localement pour accélérer les analyses futures. Vos préférences (apparence, thème de couleur, options d'affichage) sont stockées localement sur votre Mac.

## Collecte de données

**Renala ne collecte ni ne transmet aucune donnée, que ce soit à nous ou à des tiers.** Ni analytics, ni télémétrie, ni rapport de plantage, ni suivi d'utilisation d'aucune sorte.

## Accès réseau

Renala n'effectue aucune requête réseau de son propre chef. Lorsque vous ouvrez la vue des achats intégrés, votre appareil contacte les serveurs d'Apple via StoreKit pour récupérer les informations produit. Si vous effectuez un achat, Apple gère la transaction directement. Renala ne voit ni ne traite aucune information de paiement.

L'application peut également ouvrir des liens vers [olombelona.com](https://olombelona.com) dans votre navigateur par défaut à votre demande (par exemple, pour consulter cette politique de confidentialité ou la page de contact).

## Ce qui reste sur votre Mac

| Données | Emplacement de stockage | Quitte votre Mac ? |
|---------|-------------------------|--------------------|
| Cache des résultats d'analyse | Conteneur sandbox de l'app (`~/Library/Containers/com.renala.app/`) | Jamais |
| Préférences de l'application | Conteneur sandbox de l'app | Jamais |
| Signets d'accès aux dossiers | Conteneur sandbox de l'app (signets sécurisés pour les dossiers que vous avez sélectionnés) | Jamais |
| Noms de fichiers et dossiers parcourus lors de l'analyse | Mémoire uniquement pendant l'analyse | Jamais |
| Journaux de diagnostic (opt-in) | Conteneur sandbox de l'app, limités à 5 Mo, contiennent des données de chronométrage et des chemins de fichiers analysés | Jamais |

Si vous activez la journalisation de diagnostic dans les réglages, les chemins de fichiers et de dossiers peuvent être écrits dans des fichiers journaux locaux pour le débogage de performance. Ces journaux restent sur votre Mac et ne sont jamais transmis.

## Conservation et suppression des données

Vous pouvez effacer le cache d'analyse à tout moment via le bouton **Effacer** sur l'écran d'accueil. Désinstaller Renala de votre Mac efface toutes les données du conteneur sandbox, y compris le cache, les préférences, les signets et les éventuels journaux de diagnostic.

## API système utilisées

Renala accède aux API macOS suivantes uniquement pour fournir ses fonctionnalités principales :

- **Horodatages de fichiers** — pour afficher l'ancienneté des fichiers
- **Espace disque** — pour afficher l'utilisation des volumes et la progression de l'analyse
- **User defaults** — pour sauvegarder vos préférences entre les sessions
- **Presse-papiers** — pour copier les chemins de fichiers dans le presse-papiers lorsque vous utilisez l'action Copier le chemin

Ces accès sont déclarés dans le manifeste de confidentialité de Renala (`PrivacyInfo.xcprivacy`), conformément aux exigences d'Apple sur les API à justification obligatoire.

## Protection des mineurs

Renala ne collecte aucune information de qui que ce soit, y compris des enfants.

## Modifications de cette politique

Si cette politique est modifiée, la version mise à jour sera publiée à [cette adresse](https://olombelona.com/renala/privacy) avec une date révisée.

## Contact

Olombelona SAS — [contactez-nous](https://olombelona.com/contact)
