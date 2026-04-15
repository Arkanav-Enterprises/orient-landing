# Brochure Update — 2026-04-15

Handoff note for the wiki manager. Three brochures were revised on 2026-04-15 (Orient Jet C-Series, Orient Jet L&P Series, Orient X-Press Flex). The on-site comparison table, the on-site AI chat prompt (`content/orient-ai.md`), and the per-machine product detail pages have all been updated to match. **Please mirror the changes below into the company Claude project instructions and the internal wiki so every Claude surface stays aligned.**

As of this update, the previous 2026-04-14 handoff (`BROCHURE-UPDATE-2026-04-14.md`) is still accurate *except* for the specific fields listed below — those older values are now superseded.

---

## 1. Files swapped on-site

| Brochure | File on site | Status |
|---|---|---|
| Orient Jet C-Series | `public/assets/pdf/orient-jet-c-series.pdf` | replaced |
| Orient Jet L&P Series | `public/assets/pdf/orient-jet-lp-series.pdf` | replaced |
| Orient X-Press Flex | `public/assets/pdf/xpress-flex.pdf` | replaced |

The other seven brochures in `public/assets/pdf/` are unchanged.

---

## 2. Orient Jet C-Series — minor corrections

Spec-table values are otherwise consistent with the 2026-04-14 handoff. The revised brochure fixes three small typos and adds one new line under the web-width section:

- **New (Machine Width):** the brochure now explicitly states that the **standard common web width is 550 mm** (custom widths configurable across the 330–1200 mm range).
- **New (Max Imaging Width):** the brochure now lists **standard common imaging widths of 432 mm and 540 mm** (custom widths configurable up to 1180 mm).

Apply these two clarifications to any wiki page or chat instruction that describes C-Series widths. All other C-Series specs from the 2026-04-14 update remain correct (aqueous inkjet, mono or 4-colour CMYK, 40–250 gsm, IR + hot-air drying, 100 m/min @ 600 dpi / 80 m/min @ 1200 dpi with optional 120 m/min @ 1200×900 and 150 m/min @ 1200×600, custom Piezo DOD heads — **still no third-party branding**).

---

## 3. Orient Jet L&P Series — minor corrections

Same pattern as C-Series: three small typo fixes plus one new line.

- **New (Machine Width):** brochure now states **standard common widths are 330 mm and 450 mm** (max 880 mm, custom widths configurable).
- **New (Max Imaging Width):** brochure now states **standard common imaging widths are 324 mm and 432 mm** (max 864 mm, custom widths configurable).

All other L&P specs from the 2026-04-14 update remain correct (UV Inkjet, up to 8 colours — White + CMYK + optional orange/violet/green/clear/double white, UV LED curing, Orient Jet UV inks, 75 m/min, 800 mm roll diameter, 76 mm 3" core on air shaft, custom Piezo DOD UV heads, finishing via hybrid flexo line).

---

## 4. Orient X-Press Flex — **major revision**

The flexo brochure has been substantially rewritten. Spec values that changed are marked **bold**; wiki entries should be updated against the brochure PDF, not against any prior summary.

### Narrow Web

| Field | Was (2026-04-14) | Now (2026-04-15) |
|---|---|---|
| Max web widths | 450 mm (also available 330–540 mm) | **350 mm / 450 mm / 550 mm** (three standard sizes) |
| Max printing widths | — | **340 mm @ 350 web · 440 mm @ 450 web · 540 mm @ 550 web** |
| Die-cutting repeat | 304.8–609.6 mm | 304.8–609.6 mm (unchanged) |
| Max unwinding/rewinding diameter | — | **1,050 mm** (new) |
| Max matrix diameter | — | **700 mm** (new) |
| Driving mode | — | **Full Servo** (new) |
| Substrate thickness | — | **12 – 350 µm** (new) |
| Attachments | — | **Delam Relam · Cold Foil · Peel & Seal · Turn Bar** (new row) |
| Registration | — | **Auto** (new) |
| Pre-registration / Second pass | — | **Both Available** (new) |

### Mid Web

| Field | Was (2026-04-14) | Now (2026-04-15) |
|---|---|---|
| Max web widths | 650 mm (also available 540–1000 mm) | **650 mm / 750 mm / 850 mm** (three standard sizes) |
| Max printing widths | — | **640 mm @ 650 · 740 mm @ 750 · 840 mm @ 850** |
| Printing repeat | 177.8–609.6 mm | **177.8–609.6 mm @ 650 web · 350–850 mm @ 750 / 850 web** (now width-dependent) |
| Max unwinding/rewinding diameter | — | **1,050 mm** (new) |
| Driving mode | — | **Full Servo** (new) |
| Substrate thickness | — | **12 – 350 µm** (new) |
| Attachments | — | **Delam Relam · Cold Foil · Peel & Seal · Turn Bar** (new row) |
| Registration / Pre-registration / Second pass | — | **Auto / Available / Available** (new) |

### Wide Web — **biggest changes**

| Field | Was (2026-04-14) | Now (2026-04-15) |
|---|---|---|
| Max web width | 1,100 mm | **1,000 – 1,320 mm** |
| Max printing width | — | **1,270 mm** (new) |
| Max mechanical speed | **220 m/min** | **200 m/min** ← revised downward |
| Max unwinding/rewinding diameter | — | **1,050 mm** (new) |
| Driving mode | — | **Full Servo** (new) |
| Substrate thickness | — | **12 – 350 µm** (new) |
| Registration / Pre-registration / Second pass | — | **Auto / Available / Available** (new) |

**Important:** the wide-web headline speed has dropped from 220 m/min to **200 m/min**. Any wiki copy, sales collateral, or Claude instruction that still cites 220 m/min for wide-web is now out of date and must be corrected. The homepage comparison table has been updated to `180 m/min (Narrow/Mid) · 200 m/min (Wide)`.

### New slide

The revised flexo brochure adds a summary slide titled **"Why Orient X-Press Flex?"** (six-box layout covering Full Servo Drive, Wide Substrate Range, Ink Versatility, Orient X-Gear & Custom Print Units, and a highlighted "Go Hybrid: X-Press Flex + Orient Jet" callout). Any wiki entry on the flexo range should reflect these as the canonical talking points going forward.

---

## 5. Behaviour unchanged

The rules captured in the 2026-04-14 handoff still apply verbatim:

- Print heads are **custom high-end Piezo DOD** — never attribute to Kyocera, Epson, or any other third-party manufacturer.
- Do not cite a specific print-head service-life hour count.
- Offset recommendation order: lead with Super and X-Cel; XLC only for space constraints; X-Press only for max-speed or by-name enquiries.
- L&P finishing is handled via the hybrid flexo line, not paper finishing.
- Pricing → always redirect to sales (`tphho@tphorient.com`, +91 11 2331 3071).
- Delivery: typically 4 months from advance payment, Ex Works (EXW).

The on-site AI additionally appends a performance disclaimer to any answer that references speeds, throughput, run length, or numeric specs: *"Performance of the machine may vary depending on a number of factors including substrate type, application, operator skill etc."* The same disclaimer is rendered below every spec table on the site. If the company Claude projects do not currently append this line on spec-related answers, please add the same rule.

---

## 6. Where these changes live in this repo (for reference)

- `src/lib/machine-specs.ts` — family-level comparison table. Only value changed: flexo Print Speed row now reads `180 m/min (Narrow/Mid) · 200 m/min (Wide)`.
- `src/app/products/orient-jet-c/page.tsx` — Machine Width and Imaging Width rows annotated with standard common widths.
- `src/app/products/orient-jet-lp/page.tsx` — Machine Width and Imaging Width rows annotated with standard common widths.
- `src/app/products/x-press-flex-narrow-mid/page.tsx` — comparison table reworked: three widths per family, plus new rows for Max Printing Widths, Unwinding/Rewinding Diameter, Matrix Diameter, Driving Mode, Substrate Thickness, Attachments, Registration, Pre-Registration, Second Pass.
- `src/app/products/x-press-flex-wide/page.tsx` — speed banner 220 → 200 m/min, max web width 1,100 → 1,000–1,320 mm, new rows added as above.
- `content/orient-ai.md` — Orient AI system prompt. Flexo section rewritten to reflect three sub-widths per family and the 200 m/min wide-web speed. C-Series and L&P bullets updated with the standard common width notes.
- `public/assets/pdf/orient-jet-c-series.pdf`, `orient-jet-lp-series.pdf`, `xpress-flex.pdf` — brochure files replaced.

When the next brochure update lands: update `machine-specs.ts` (family row), update the matching PDP (per-model detail), update `content/orient-ai.md` (LLM prompt copy), swap the PDF in `public/assets/pdf/`, and extend this instructions folder with a new dated handoff note.
