---
menu: "privacy"
title: "Renala — Privacy Policy"
categorie: "renala-privacy"
lang: "en"
---

**Last updated: 2026-03-25**

Olombelona SAS ("we", "us", "our"), 17 rue Roger Salengro, 93310 Le Pré-Saint-Gervais, France — publishes Renala, a macOS disk space visualizer. This policy describes how Renala handles your data.

The canonical version of this policy is published at [https://olombelona.com/renala/privacy](https://olombelona.com/renala/privacy).

---

## What Renala does

Renala scans folders and volumes you select and displays their contents as an interactive treemap. Scan results are cached locally to speed up future scans. Your preferences (appearance, color theme, display options) are stored locally on your Mac.

## Data collection

**Renala does not collect or transmit any data to us or to third parties.** There is no analytics, no telemetry, no crash reporting, and no usage tracking of any kind.

## Network access

Renala makes no network requests on its own. When you open the in-app purchases view, your device contacts Apple's servers via StoreKit to fetch product information. If you complete a purchase, Apple handles the transaction directly. Renala never sees or handles payment information.

The app can also open links to [olombelona.com](https://olombelona.com) in your default browser at your request (for example, to view this privacy policy or the contact page).

## What stays on your Mac

| Data | Where it is stored | Leaves your Mac? |
|------|--------------------|-----------------|
| Scan results cache | App sandbox container (`~/Library/Containers/com.renala.app/`) | Never |
| App preferences | App sandbox container | Never |
| Folder access bookmarks | App sandbox container (security-scoped bookmarks for folders you selected) | Never |
| File and folder names seen during scanning | Memory only during the scan | Never |
| Diagnostic logs (opt-in) | App sandbox container, capped at 5 MB, contains timing data and scanned file paths | Never |

If you enable diagnostic logging in settings, file and folder paths may be written to local log files for performance debugging. These logs stay on your Mac and are never transmitted.

## Data retention and deletion

You can clear the scan cache at any time using the **Clear** button on the home screen. Deleting Renala from your Mac removes all data in the sandbox container, including the cache, preferences, bookmarks, and any diagnostic logs.

## System APIs used

Renala accesses the following macOS APIs solely to provide its core functionality:

- **File timestamps** — to display file age information
- **Disk space** — to show volume usage and scan progress
- **User defaults** — to save your preferences between sessions
- **Pasteboard** — to copy file paths to the clipboard when you use the Copy Path action

These are declared in Renala's privacy manifest (`PrivacyInfo.xcprivacy`) where required by Apple's required-reason API policy.

## Children's privacy

Renala does not collect any information from anyone, including children.

## Changes to this policy

If this policy changes, the updated version will be posted at [this URL](https://olombelona.com/renala/privacy) with a revised date.

## Contact

Olombelona SAS — [contact us](https://olombelona.com/contact)
