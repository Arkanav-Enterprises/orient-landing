# Brochure Update — 2026-04-14

Handoff note for the wiki manager. These are the spec corrections pulled from the updated brochure set (10 PDFs delivered via WeTransfer on 2026-04-14, plus a revised Jet C-Series brochure delivered later the same day). Both the on-site comparison table and the on-site AI chat have been updated to match; please mirror the same corrections into the company Claude project instructions / internal wiki so every Claude surface stays aligned with the printed brochures.

> **Important branding change (2026-04-14, same-day revision):** the revised Jet C-Series brochure drops **all Kyocera branding** from print-head callouts. Orient's print heads are to be described as "custom high-end Piezo DOD inkjet print heads, engineered and manufactured exclusively for Orient" — **no third-party manufacturer should be named** in any customer-facing content or LLM context. This applies to both the Jet C-Series and the Jet L&P Series (the L&P brochure already used the no-brand phrasing, but the wiki previously mentioned Kyocera Katana variants — remove those too). See Section 6 for the full change list.

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

## 4. Product Detail Page (PDP) enrichment from the new brochures

Each per-machine PDP previously had a minimal spec block (2–4 rows) and a short feature bullet list from the old brochures. The new brochures carry full technical specification tables, so every PDP has been expanded to match. The company Claude project instructions / wiki entries for each machine should be brought up to the same level of detail so internal answers don't lag behind the public site.

### Orient Super (`/products/orient-super`)
- Description now states the three module options (Mono Unit / 3-Colour Satellite / 4 High Tower) and the multi-web configuration options (4 colours one web both sides, 2 colours two webs both sides, 1 colour three webs both sides).
- Features list expanded with: hard chromium plated cylinders, lever-type swing-down ink fountain, slit or spring-type plate lock-up, motorized side register, brushmist dampening, plus the optional upgrades (narrow gap blanket, stainless steel cylinders, centralized water + chiller, auto grease lubrication, AC drive).
- Specs now include Paper Width (660–889 mm), Max Reel Diameter (1,070 mm / 42"), Plate Width (890 mm), Plate Thickness (0.28 / 0.30 mm), Blanket Thickness w/ packing (2.1 mm), Paper Grammage (38–100 gsm), Available Cut-offs (508 · 533 · 546 · 560 · 578 · 630 mm).

### Orient X-Cel (`/products/orient-x-cel`)
- Description now explicitly positions X-Cel as "20% faster than Orient Super" (per brochure copy).
- Features list expanded with: hardened and ground bushes in frame, dynamically balanced cylinders, motorized circumferential register on loading side, PU-covered ink vibrator rollers with narrow gap blanket lock-up, plus optional upgrades.
- Specs mirror Super's structure: Paper Width 660–889 mm, Max Reel 1,070 mm, Plate Width 890 mm, Plate Thickness 0.28 / 0.30 mm, Blanket Thickness 2.1 mm, Paper Grammage 38–100 gsm, Available Cut-offs 508–630 mm.

### Orient X-Press (`/products/orient-x-press`)
- Description expanded to call out Siemens PLC, colour touchscreen console, and ink/water balance through the screen.
- Features list rewritten: solid stainless steel cylinders preloaded in nickel double-row taper roller bearings, hardened and ground bushes, motorized ink fountain rollers, slit-type plate lock-up with quick-positioning pins (half-plate possible), narrow gap blanket lock-up, motorized side and circumferential register, brushmist dampening, pneumatic on/off for main impression / ink feed / ink form / damper, Siemens PLC + touchscreen console, centralized water with chiller, reverse inching.
- Specs expanded: Paper Width **700–915 mm** (note: different from Super/X-Cel), Plate Width **915 mm**, Available Cut-offs **533 · 546 · 578 mm** (only three cut-offs for X-Press), Console = Siemens Colour Touchscreen.
- Configurations corrected from "Full Tower · Double Width" to **Mono Unit · 3-Colour Satellite · 4 High Tower** (matching Super and X-Cel — the X-Press is single-width single-circumference per brochure).

### Orient XLC (`/products/orient-xlc`)
- Description states 578 mm cut-off up front and tower height under 3.1 m.
- Features list expanded with: web-wrap contact between blankets (prevents fluttering), contactless brushmist dampening (variable speed), motorized ink fountain roller, one extra rider roller per side, slit-type plate lock-up, narrow gap blanket cylinders, hardened & ground cylinder bores.
- Specs now include the full XLC single cut-off table: Paper Width 660–889 mm, Max Reel 1,070 mm, Plate Width 889 mm, Plate Length (Slit) 609 mm, Plate Thickness 0.28 mm, Blanket Width 889 mm, Blanket Length (Narrow Gap) 651 mm, Printing Length (Narrow Gap) 563 mm, Paper Grammage 38–100 gsm, Tower Height 3,065 mm, Tower Width 1,390 mm.

### Orient Jet C-Series (`/products/orient-jet-c`)
Previously nearly empty. Now a complete spec sheet:
- Description: production-grade aqueous inkjet for book, commercial, newspaper, and **security** printing — mono or 4-colour CMYK, simplex or duplex, with in-line finishing.
- Speed banner: **Up to 100 m/min @ 600 dpi · 80 m/min @ 1200 dpi**.
- Features include custom high-end Piezo DOD print heads (long-lasting service life, engineered and manufactured exclusively for Orient), IR + hot-air drying, Orient Jet aqueous inks (open system, no proprietary lock-in), full VDP, web cleaner/anti-static/servo tension/web-break sensor, hybrid-readiness with X-Press Flex, Harlequin RIP.
- Specs: Printing Technology, Colour Configuration, Resolution, Print Speed (both modes), Machine Width (330–1,200 mm), Imaging Width (324–1,180 mm), Substrate Types, Substrate Weight (40–250 gsm), Ink, Print Heads, Drying, Max Roll Diameter (1,200 mm), Finishing (in-line sheeter / folder / rewinder / perforation / perfect binding), Environment (40–60% RH, dust-free).
- Optional speed variants mentioned: 1200 × 900 dpi @ 120 m/min, 1200 × 600 dpi @ 150 m/min.

### Orient Jet L&P Series (`/products/orient-jet-lp`)
Previously nearly empty **and factually incorrect** (described "paper, plastics, metals" as substrates). Now corrected and expanded:
- Description: UV inkjet digital press for labels and flexible packaging, up to 8 colours with UV LED curing, designed to integrate with X-Press Flex for hybrid digital + flexo production.
- Speed banner: **Up to 75 m/min**.
- Features: custom Piezo DOD UV print heads, up to 8 colour stations (White + CMYK + optional orange, violet, green, clear, double white), UV LED curing, Orient Jet UV inks, hybrid-readiness (inline flexo priming, coating, cold foil, die-cutting, lamination, slitting, rewinding), full VDP, corona treater / web cleaner / anti-static / servo tension / chiller roll / splice table / web aligner.
- Specs: Printing Technology (UV Inkjet), Colour Configuration (up to 8 · White + CMYK + spot), Resolution (600 / 1200 dpi), Print Speed, Curing (UV LED), Machine Width (330–880 mm), Imaging Width (324–864 mm), Substrate Types (self-adhesive labels, paper, vinyl, BOPP, PET, PE, PP, metallized films, clear films, filmic, specialty), Ink (Orient Jet UV), Print Heads, Roll Diameter (800 mm), Core Size (76 mm / 3" on air shaft), Hybrid Capability, Environment.

### X-Press Flex Narrow & Mid Web (`/products/x-press-flex-narrow-mid`)
- Description now covers: Orient X-Gear design, custom cylinder assembly, UV LED / hot-air / IR curing, ink compatibility (UV LED / water-based / solvent), and hybrid-readiness with Orient Jet.
- **Comparison table corrected**: previously listed Narrow as 330–650 mm and Mid as 650–1,000 mm. Brochure says Narrow **max 450 mm**, Mid **max 650 mm** (with other sizes configurable).
- Comparison rows now: Max Web Width, Printing Repeat (177.8–609.6 mm), Die-Cutting Repeat (304.8–609.6 mm), Max Mechanical Speed (180 m/min), Ink Curing (UV LED · Hot Air · IR), Applicable Ink (UV LED / water-based / solvent), Typical Applications.
- Speed banner added: **Up to 180 m/min**.

### X-Press Flex Wide Web (`/products/x-press-flex-wide`)
- Description corrected: web width **up to 1,100 mm** (not 1,000–1,500 mm as previously listed).
- Speed banner added: **Up to 220 m/min** (was absent; old site said "up to 250 m/min" in the homepage table, which was also an overstatement).
- Features: max 1,100 mm web width, sleeve technology with ≤50% wastage reduction, speed up to 220 m/min, ink curing UV LED / IR / hot air, ink compatibility UV LED / water-based / solvent, chill water 20–22 °C, hybrid-readiness.
- Specs: Max Web Width, Printing Repeat (350–850 mm), Max Mechanical Speed, Ink Curing, Applicable Ink, Chill Water (20–22 °C), Wastage Reduction, Typical Sectors.

### Folders (`/products/folders`)
- Features list corrected to match brochure lineup and web counts:
  - Jaw 1:2 Standard: 4 webs, 16,000 cph
  - Jaw 1:2 Super: **6–8 webs** (was listed as 8), 30,000 cph
  - Jaw 2:2 Heavy Duty: 8 webs, 36,000 cph
  - Tucker: 10 webs, 50,000 cph
  - X-Press 1:2:2: 12 webs, 50,000 cph
- Features now include: dynamically-balanced RTF/cutting/jaw cylinders, pneumatic RTF trolley tyres + air formers (Heavy Duty and up), optional 1/4 page folder, cross perforator, slitter on nipping rollers, upper former, fly-wheel delivery, cut-off compensator.

---

## 5. Where these changes live in this repo (for reference)

- `src/lib/machine-specs.ts` — single source of truth for the 4-family comparison table.
- `src/components/Specifications.tsx` — imports from `machine-specs.ts` and renders the homepage table.
- `src/app/api/chat/route.ts` — imports from `machine-specs.ts` via `specsAsMarkdown()` and injects per-family spec blocks into the LLM system prompt. Prose context (print-head variants, per-model offset detail, behavioural rules) is maintained directly in this file.
- `src/app/products/<machine>/page.tsx` — per-machine product detail pages (PDPs). Each one now carries its brochure-sourced spec table and feature list directly (no shared data source, because per-model specs differ too much to usefully centralize).
- `public/assets/pdf/` — the ten brochures above.

When a brochure changes in the future: update `machine-specs.ts` (for the family-level comparison row), update the matching PDP (for per-model detail), swap the PDF in `public/assets/pdf/`, then extend this note.

---

## 6. Jet C-Series revised brochure — print-head branding change (2026-04-14, same-day revision)

A revised Jet C-Series brochure arrived shortly after the initial set and changes the marketing copy around print heads. Spec table itself is **unchanged**. The changes:

| Location in brochure | Previous wording | New wording |
|---|---|---|
| Tech callout (cover area) | "Kyocera RC / Industrial Piezo / Custom Print Heads" | "Industrial Piezo DOD / Custom Print Heads" (Kyocera removed) |
| Print Heads body copy | "Custom high-end Kyocera RC piezo print heads, specially engineered and manufactured exclusively for Orient" | "Custom high-end piezo inkjet print heads, specially engineered and manufactured exclusively for Orient" |
| Service life callout | "~25,000-Hour Life" | "Long Lasting Life" (the specific hour count has been removed) |
| Ink callout | "Aqueous Bulk" | "Aqueous" |

**Instruction for all Claude surfaces (site chat + company Claude projects + wiki):**

- Never attribute Orient Jet print heads to Kyocera, Epson, or any other third-party manufacturer. The correct line is: **"custom high-end Piezo DOD inkjet print heads, engineered and manufactured exclusively for Orient."**
- Do not cite a specific service-life hour count (the "~25,000 hours" figure has been withdrawn in favour of "long-lasting"). If a customer asks for a number, redirect to sales.
- Apply the same rule to the Jet L&P Series (UV inkjet). The L&P brochure also describes heads as custom Piezo DOD with no third-party branding. Any prior internal docs naming "Kyocera Katana" or similar variants for L&P are out of date and should be purged.

**Changes applied in this repo for the Jet C-Series revision:**

- `public/assets/pdf/orient-jet-c-series.pdf` — brochure file swapped for the revised version.
- `src/lib/machine-specs.ts` — "Print Head / Plate" row for both Jet C and Jet L&P changed from `Kyocera (Piezo DOD)` to `Custom Piezo DOD`.
- `src/app/api/chat/route.ts` — Kyocera/Epson head-variant lines removed from both the C-Series and L&P sections of the system prompt; replaced with the no-third-party phrasing above.
- `src/app/products/orient-jet-c/page.tsx` — description, feature bullet, and "Print Heads" spec row rewritten; the "~25,000-hour" life reference removed in favour of "long-lasting."
- `HANDOFF.md` — internal doc note updated.
- `SEO-RECOMMENDATIONS.md` — the targeted keyword "Kyocera print head press" removed from the Jet C-Series list and replaced with "aqueous inkjet press."
