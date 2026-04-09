# Orient Website — Handoff Document

> **Last updated:** 2026-04-09
> **Prepared by:** Settle (settlewithai.com)
> **Vercel preview:** https://orient-landing-opal.vercel.app
> **Production target:** https://www.tphorient.com

---

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:3000
```

Requires **Node.js 20+** and an `ANTHROPIC_API_KEY` env var for the Orient AI chat feature.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| AI Chat | Anthropic Claude Haiku 4.5 (streaming) |
| Hosting | Vercel (auto-deploys on push to `main`) |
| Domain | `www.tphorient.com` (pending DNS switch) |

---

## Site Structure

### Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, products grid, technical specs + AI chat, testimonials, CTA |
| `/about` | Unified About page with sidebar nav (About, Legacy, Infrastructure, Team, Suppliers, Patrons) |
| `/contact` | Contact form + HQ info + contact directory tree |
| `/downloads` | Product catalogs with PDF preview |
| `/manuals` | Operations & Maintenance manuals (4 PDFs, self-hosted) |
| `/news` | News & Events |
| `/careers` | Careers page |
| `/privacy` | Privacy Policy |
| `/terms` | Terms & Conditions |

### Product Pages (9)

| Route | Product |
|-------|---------|
| `/products/orient-super` | Orient Super (Web Offset) |
| `/products/orient-x-cel` | Orient X-Cel (Web Offset) |
| `/products/orient-x-press` | Orient X-Press (Web Offset) |
| `/products/orient-xlc` | Orient XLC (Web Offset) |
| `/products/folders` | Folder Units |
| `/products/orient-jet-c` | Orient Jet C Series (Digital Inkjet) |
| `/products/orient-jet-lp` | Orient Jet L&P Series (Digital Inkjet) |
| `/products/x-press-flex-narrow-mid` | X-Press Flex Narrow & Mid Web (Flexo) |
| `/products/x-press-flex-wide` | X-Press Flex Wide Web (Flexo) |

### Service Pages (2)

| Route | Service |
|-------|---------|
| `/services/spare-parts` | Spare Parts & Consumables |
| `/services/amc` | AMC Servicing |

---

## Key Components

| Component | File | Description |
|-----------|------|-------------|
| `Navbar` | `src/components/Navbar.tsx` | Mega menu with product previews |
| `Footer` | `src/components/Footer.tsx` | 5-column links, social, T&C PDFs |
| `Specifications` | `src/components/Specifications.tsx` | Spec table + Orient AI chat toggle |
| `ProductPage` | `src/components/ProductPage.tsx` | Shared product page template |
| `PageShell` | `src/components/PageShell.tsx` | Shared page wrapper (title + subtitle) |
| `ChatWidget` | `src/components/ChatWidget.tsx` | Floating AI chat bubble |

---

## API Routes

| Route | Purpose |
|-------|---------|
| `/api/chat` | Orient AI — streams Claude Haiku responses about Orient products |
| `/api/download` | PDF proxy — whitelisted file downloads from tphorient.com |

### Orient AI Chat — Important Notes

- **Flagship offset models:** Orient Super and Orient X-Cel are positioned as flagships in the system prompt. X-Press is only mentioned if asked by name or about max speed.
- **Print heads:** Spec table shows "Kyocera" for C-Series and L&P (simplified from detailed model names).
- **Product-scoped mode:** When accessed from a product page, the AI is restricted to only answer about that specific product.

---

## Self-Hosted Assets

All PDFs are self-hosted in `public/assets/pdf/`:

| File | Purpose |
|------|---------|
| `domestic.pdf` | General T&C — Domestic |
| `International.pdf` | General T&C — International |
| `Orient_Jet_C_Series_Manual.pdf` | O&M Manual — C Series |
| `Orient_Jet_LP_Series_Manual.pdf` | O&M Manual — L&P Series |
| `Orient_Web_Offset_Manual.pdf` | O&M Manual — Web Offset |
| `Orient_XPress_Flex_Manual.pdf` | O&M Manual — X-Press Flex |

Product catalog PDFs are still served from `tphorient.com/assets/pdf/` via the `/api/download` proxy route.

---

## Deployment

- **Auto-deploy:** Every push to `main` triggers a Vercel production deployment.
- **Do NOT** use `vercel --prod` from the CLI — use git push only.
- **Preview:** Every PR gets a preview URL automatically.
- **Env vars:** Set `ANTHROPIC_API_KEY` in Vercel Dashboard → Settings → Environment Variables.

---

## Contact Data

Contacts are defined at the top of `src/app/contact/page.tsx`:

- **Corporate HQ:** tphho@tphorient.com
- **Spare Parts (Domestic & Export):** netrapal@tphorient.com / +91 98107 33931
- **AMC & Servicing:** netrapal@tphorient.com / +91 98107 33931
- **Promotional & PR:** amarjeet@tphorient.com

---

## Pending Items

| Item | Status | Notes |
|------|--------|-------|
| Contact form email delivery | Awaiting SMTP details | Form exists but doesn't send — needs backend wiring |
| DNS switch to Vercel | Pre-migration | See `tasks/migration-plan.md` for full checklist |
| Analytics tags (GA4, Google Ads, Meta Pixel) | Pre-migration | Tag IDs ready, need to be added before go-live |
| Google Search Console verification | Post-migration | Verification token ready |

---

## 301 Redirects

35+ redirects from old `.php` URLs are configured in `next.config.ts`. Examples:

```
/orient-super.php         → /products/orient-super
/about-us.php             → /about
/contact.php              → /contact
/download.php             → /downloads
/spare-parts.php          → /services/spare-parts
```

Full list in `next.config.ts` → `redirects()`.

---

## Migration Plan

See `tasks/migration-plan.md` for the complete pre-migration, migration day, and post-migration checklist.
