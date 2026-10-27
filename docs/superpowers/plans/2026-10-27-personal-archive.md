# Personal Archive Implementation Plan

> **For agentic workers:** Use the current session's parallel implementation and review tools. Track completion below.

**Goal:** Deliver a responsive, research-first personal site using the visual language of RhineLabUI and the user's own logo.

**Architecture:** Buildless HTML, CSS and JavaScript ES modules. Static HTML contains readable content; a data module supports accessible project details and archive search. All content and assets ship on GitHub Pages.

**Tech Stack:** HTML, CSS, browser JavaScript, Node native tests, Python static preview server.

**Spec:** ../specs/2026-10-27-personal-archive-design.md

## Global constraints

Preserve confirmed personal facts and original assets. No fabricated PhD topic, supervisor, awards, employment, or project dates. Respect reduced motion and keyboard access. No backend, runtime dependencies, autoplay audio, or external font dependency.

## Review focus

Empty/multiword/unmatched search; Escape and focus return from dialogs; 390px viewport overflow; localStorage failure; original images, PDF and MP4 paths.

## Tasks

- [x] Content: create assets/archive-data.mjs exporting entries and searchEntries(query, category='all'); test multiword search and category combinations in tests/archive.test.mjs.
- [x] Presentation: rebuild index.html and assets/site.css with all six content sections, the preserved logo, perspective hero, responsive layout, and reduced-motion rules.
- [x] Interaction: assets/site.mjs imports entries/searchEntries; implements native dialogs, search, filters, active navigation, theme/motion preferences and optional subtle pointer movement.
- [x] Verify: run native Node tests, syntax and asset checks, desktop/mobile CUA browser inspection and keyboard interaction checks; obtain an independent source review and fix material findings.

## Execution notes

Continue in the dedicated local checkout on branch redesign-personal-archive; the prior academic edits are retained. No existing automated tests or build pipeline were present. Root implements UI; bounded content/data work is delegated. Source-reference inspection is complete.

## Verification results

- Nine Node archive/search/asset tests passed; JavaScript syntax check and `git diff --check` passed.
- HTML validation found 38 unique IDs; all 51 href/src references resolve locally or use valid external destinations. Academic dates and email checked. External destination uptime was not exhaustively tested.
- Browser checks covered 390px mobile and 1440px desktop, mobile section navigation, empty and multiword search, category filtering, nested dialogs, Escape, focus restoration, theme persistence, and motion control. No horizontal overflow at either tested width; no console warnings/errors.
- Independent source review identified light-accent contrast and a missing static Leo Rover code link. Both were fixed; revised accent contrast is 5.06:1 against paper.
- Browser findings fixed: mobile navigation access, immediate Escape from a populated search field, and glass dossier content extending beyond its panel.
- Saved homepage and research previews in the workspace `preview/` directory outside the deployable repository.
- The user approved publication after reviewing the profile-first ordering and colour portrait. GitHub connector write access is verified; the publishing target is the root of `main` in the existing GitHub Pages setup.
