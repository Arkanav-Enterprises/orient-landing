# Brochure Update — 2026-04-14

Handoff note for the wiki manager. These are the spec corrections pulled from the updated brochure set (10 PDFs delivered via WeTransfer on 2026-04-14). Both the on-site comparison table and the on-site AI chat have been updated to match; please mirror the same corrections into the company Claude project instructions / internal wiki so every Claude surface stays aligned with the printed brochures.

---

## 1. Brochures now in `/downloads`

All ten brochures are hosted under `public/assets/pdf/` (served at `/assets/pdf/<file>.pdf`). The old externally-hosted set on `tphorient.com` is no longer referenced by the site.

| Label on site | File |
|---|---|
| Orient Super | `orient-super.pdf` |
| Orient X-Cel | `xcel.pdf` |
| Orient X-Press | `xpress.pdf` |
| Orient XLC | `xlc.pdf` |
| X-Press Flex | `xpress-flex.pdf` |
| Orient Jet C Series | `orient-jet-c-series.pdf` |
| Orient Jet L&P Series | `orient-jet-lp-series.pdf` |
| Folders | `folders.pdf` |
| After Sales Services | `after-sales-services.pdf` |
| Group Company Profile | `orient-printpack-profile.pdf` |

**Catalog structure changes vs. the prior list:**

- "Orient Jet Digital Machine" → split into two distinct entries: **Orient Jet C Series** (commercial / book / newspaper, aqueous inkjet) and **Orient Jet L&P Series** (labels & packaging, UV inkjet). These are genuinely different machines with different ink chemistry, curing, and substrate range — they should be treated as separate products everywhere.
- "AMC Service Catalogue" → renamed to **After Sales Services**.
- "Spare Parts Catalog" → **removed** (no longer supplied as a standalone brochure).

---

## 2. Factual corrections driven by the brochures

Apply these to any wiki page, chat instruction, or knowledge base snippet that mentions the affected machines.

### Orient Jet L&P Series — major corrections

The L&P Series was previously documented as an aqueous inkjet for paper. The brochure makes clear it is a **UV inkjet for labels & packaging substrates**. This is the most important correction in this update.

| Field | Was | Now |
|---|---|---|
| Type | Digital Inkjet (Simplex) | **UV Inkjet Digital (Simplex)** |
| Ink | Orientjet IDS · Aqueous-based | **Orient Jet UV inks** |
| Curing | (not stated) | **UV LED** |
| Colours | Up to 4, expandable | **Up to 8 · White + CMYK + Orange / Violet / Green / Clear / Double White** |
| Media support | Coated & Uncoated, 40–240 g/m² | **Self-adhesive labels, vinyl, BOPP, PET, PE, PP, metallized films, clear films, filmic, coated stocks** |
| Print speed | Up to 80 m/min | **Up to 75 m/min** |
| Finishing | In-Line Sheeter · Folder | **Die-cutting, lamination, slitting, rewinding — via hybrid flexo line (not paper finishing)** |

### Orient Jet C-Series — minor corrections

| Field | Was | Now |
|---|---|---|
| Media support | 40–240 g/m² | **40–250 g/m²** |
| Colours | Up to 4 (CMYK) | **Mono or 4-colour CMYK** (the press is available in a mono variant) |
| Curing | (not stated) | **IR & Hot Air** |
| Print speed phrasing | Up to 100 m/min | **Up to 100 m/min @ 600 dpi · 80 m/min @ 1200 dpi** (the brochure distinguishes by resolution) |

### Orient X-Press Flex — corrections

| Field | Was | Now |
|---|---|---|
| Print speed | Up to 250 m/min | **180 m/min (Narrow / Mid Web) · up to 220 m/min (Wide Web)** |
| Curing / drying | (not stated) | **UV LED · Hot Air · IR** (varies by application) |

### Orient Web Offset range — cleanup

- Remove "Standard" from the model list. The current lineup is **Super · X-Cel · X-Press · XLC** (plus the Folders family).
- Max speed reference point: **X-Press at 50,000 cph** is the flagship; Super = 30,000 cph, X-Cel = 36,000 cph, XLC = 32,000 cph. Paper grammage 38–100 gsm, reel diameter 1070 mm (42"), plate width 889–915 mm depending on model.

---

## 3. Chat guidance that should be kept in sync

The on-site AI (homepage chat widget + per-product page widgets) now uses a single source of truth at `src/lib/machine-specs.ts`. If the company Claude projects are pulling from their own instruction copy, please apply the corrections above and also these behavioural rules that our on-site chat already follows:

- **Offset recommendation order:** lead with Orient Super and Orient X-Cel for most enquiries. Only mention XLC when the customer raises space constraints. Only mention X-Press when the customer asks for maximum speed or names it specifically.
- **Jet L&P hybrid line:** when asked about finishing on the L&P, explain that finishing is handled via the hybrid flexo line (die-cutting, lamination, slitting, rewinding, cold foil, white ink, spot colours) — not traditional paper finishing.
- **Pricing:** always redirect to sales (`tphho@tphorient.com`, +91 11 2331 3071).
- **Delivery:** typically 4 months from advance payment, Ex Works (EXW).

---

## 4. Where these changes live in this repo (for reference)

- `src/lib/machine-specs.ts` — single source of truth for the 4-family comparison table.
- `src/components/Specifications.tsx` — imports from `machine-specs.ts` and renders the homepage table.
- `src/app/api/chat/route.ts` — imports from `machine-specs.ts` via `specsAsMarkdown()` and injects per-family spec blocks into the LLM system prompt. Prose context (print-head variants, per-model offset detail, behavioural rules) is maintained directly in this file.
- `public/assets/pdf/` — the ten brochures above.

When a brochure changes in the future, update `machine-specs.ts` first, then swap the PDF in `public/assets/pdf/`, then update this note.
