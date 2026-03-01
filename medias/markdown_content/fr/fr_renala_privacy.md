---
menu: "confidentialité"
title: "Renala — Politique de confidentialité"
categorie: "renala-privacy"
lang: "fr"
---

**Dernière mise à jour : 1 mars 2026**

Olombelona SAS (« nous »), 17 rue Roger Salengro, 93310 Le Pré-Saint-Gervais, France — contact@olombelona.com — édite Renala, un visualiseur d'espace disque pour macOS. Cette politique décrit la façon dont Renala traite vos données.

---

## Ce que fait Renala

Renala analyse les dossiers et volumes que vous sélectionnez, et affiche leur contenu sous forme de treemap interactif. Les résultats d'analyse sont mis en cache localement pour accélérer les analyses futures. Vos préférences (apparence, thème de couleur, options d'affichage) sont stockées localement sur votre Mac.

## Collecte de données

**Renala ne collecte aucune donnée.** Il n'y a ni analytics, ni télémétrie, ni rapport de plantage, ni aucune forme de suivi d'utilisation.

## Accès réseau

Renala n'effectue aucune requête réseau, sauf lors d'un achat intégré (jar à pourboires). Dans ce cas, votre appareil communique directement avec les serveurs d'Apple via StoreKit. Renala ne voit ni ne traite aucune information de paiement.

## Ce qui reste sur votre Mac

| Données | Emplacement de stockage | Quitte votre Mac ? |
|---------|-------------------------|--------------------|
| Cache des résultats d'analyse | `~/Library/Containers/com.renala.app/` | Jamais |
| Préférences de l'application | `~/Library/Containers/com.renala.app/` | Jamais |
| Noms de fichiers et dossiers vus lors de l'analyse | Mémoire uniquement, jamais enregistrés | Jamais |

## API système utilisées

Renala accède aux API macOS suivantes uniquement pour fournir ses fonctionnalités principales :

- **Horodatages de fichiers** — pour afficher l'ancienneté des fichiers
- **Espace disque** — pour afficher l'utilisation des volumes et la progression de l'analyse
- **User defaults** — pour sauvegarder vos préférences entre les sessions

Ces accès sont déclarés dans le manifeste de confidentialité de Renala (`PrivacyInfo.xcprivacy`), conformément aux exigences d'Apple.

## Protection des mineurs

Renala ne collecte aucune information de qui que ce soit, y compris des enfants.

## Modifications de cette politique

Si cette politique est modifiée, la version mise à jour sera publiée à cette adresse avec une date révisée.

## Contact

Olombelona SAS — contact@olombelona.com
