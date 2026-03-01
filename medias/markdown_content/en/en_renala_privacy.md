---
menu: "privacy"
title: "Renala — Privacy Policy"
categorie: "renala-privacy"
lang: "en"
---

**Last updated: 2026-03-01**

Olombelona SAS ("we", "us", "our"), 17 rue Roger Salengro, 93310 Le Pré-Saint-Gervais, France — publishes Renala, a macOS disk space visualizer. This policy describes how Renala handles your data.

---

## What Renala does

Renala scans folders and volumes you select and displays their contents as an interactive treemap. Scan results are cached locally to speed up future scans. Your preferences (appearance, color theme, display options) are stored locally on your Mac.

## Data collection

**Renala collects no data.** There is no analytics, no telemetry, no crash reporting, and no usage tracking of any kind.

## Network access

Renala makes no network requests except when you make an in-app purchase (tip jar). In that case, your device communicates directly with Apple's servers via StoreKit. Renala never sees or handles payment information.

## What stays on your Mac

| Data | Where it is stored | Leaves your Mac? |
|------|--------------------|-----------------|
| Scan results cache | `~/Library/Containers/com.renala.app/` | Never |
| App preferences | `~/Library/Containers/com.renala.app/` | Never |
| File and folder names seen during scanning | Memory only, never written to a log | Never |

## System APIs used

Renala accesses the following macOS APIs solely to provide its core functionality:

- **File timestamps** — to display file age information
- **Disk space** — to show volume usage and scan progress
- **User defaults** — to save your preferences between sessions

These are declared in Renala's privacy manifest (`PrivacyInfo.xcprivacy`) as required by Apple.

## Children's privacy

Renala does not collect any information from anyone, including children.

## Changes to this policy

If this policy changes, the updated version will be posted at this URL with a revised date.

## Contact

Olombelona SAS — [contact form](https://olombelona.com/contact)
