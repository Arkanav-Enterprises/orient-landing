# Orient Website — SEO Recommendations

> **Last updated:** 2026-04-09
> **Prepared by:** Settle (settlewithai.com)
> **For:** Orient SEO Team

---

## Current SEO Status

### What's Already Done

| Item | Status | Details |
|------|--------|---------|
| robots.txt | Done | Allows all, blocks `/api/`, includes sitemap URL |
| sitemap.xml | Done | 20 URLs with priorities (dynamic via `sitemap.ts`) |
| Meta titles | Done | Template: `"Page \| Orient — The Printers House"` |
| Meta descriptions | Done | Unique for homepage, about, contact, downloads, news |
| Open Graph tags | Done | og:title, og:description, og:image, og:type, og:locale |
| Twitter Cards | Done | summary_large_image |
| Canonical URLs | Done | Set for main pages via layout files |
| Organization schema (JSON-LD) | Done | Name, address, contact, social links, founding date |
| 301 redirects | Done | 35+ old `.php` URLs mapped in `next.config.ts` |
| Clean URL structure | Done | No `.php`, no query strings, semantic paths |
| Mobile responsive | Done | All pages tested |
| HTTPS | Done | Auto via Vercel |
| Favicons & PWA manifest | Done | Multiple sizes, theme color, app manifest |
| Self-hosted PDFs | Done | T&C and O&M manuals served from our domain |

---

## Gaps & Recommendations

### Priority 1 — High Impact, Should Do Before Launch

#### 1.1 Add Product Page Metadata

**Problem:** All 9 product pages use the global metadata. Each product page should have a unique title, description, and keywords to rank for product-specific searches.

**Action:** Create `layout.tsx` files (or use `generateMetadata`) for each product page. Example:

```
Title: "Orient Super — Web Offset Printing Press | Orient"
Description: "Orient Super web offset press — 30,000 cph, 4 colours both sides, ideal for book and commercial printing. Versatile flagship press from The Printers House."
```

**Target keywords per product:**
- Orient Super → "web offset printing press", "30000 cph press", "book printing machine"
- Orient X-Cel → "high speed web offset press", "36000 cph press", "newspaper printing machine"
- Orient Jet C Series → "digital inkjet printing press", "duplex inkjet press", "Kyocera print head press"
- X-Press Flex → "flexographic printing machine", "flexo press India", "label printing machine"

#### 1.2 Add `/manuals` to Sitemap

**Problem:** The newly created `/manuals` page is not in the sitemap.

**Action:** Add to `src/app/sitemap.ts`:
```ts
{ url: "/manuals", priority: 0.5, changeFrequency: "monthly" as const }
```

#### 1.3 Add Service Page Metadata

**Problem:** `/services/spare-parts` and `/services/amc` have no page-specific metadata.

**Action:** Create `layout.tsx` files with unique titles and descriptions:
- Spare Parts → "Genuine Spare Parts & Consumables | Orient"
- AMC → "Annual Maintenance Contracts & Servicing | Orient"

#### 1.4 Unique OG Images

**Problem:** All pages share the Orient logo as the OG image. Social shares and link previews all look the same.

**Action:** Create unique OG images (1200x630) for at least:
- Homepage (hero shot of facility or flagship press)
- Each product page (product photo with name overlay)
- About page (factory or team photo)

---

### Priority 2 — Medium Impact, Recommended

#### 2.1 Product Schema (JSON-LD)

**Problem:** No `Product` structured data on product pages. Missing opportunity for rich results in search.

**Action:** Add JSON-LD to each product page:

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Orient Super Web Offset Press",
  "description": "Versatile web offset press, 30,000 cph...",
  "image": "https://www.tphorient.com/images/orient-super.jpg",
  "brand": { "@type": "Brand", "name": "Orient" },
  "manufacturer": {
    "@type": "Organization",
    "name": "The Printers House Pvt. Ltd."
  },
  "category": "Web Offset Printing Press"
}
```

#### 2.2 BreadcrumbList Schema

**Problem:** No breadcrumb structured data. Breadcrumbs help Google understand site hierarchy and can appear in search results.

**Action:** Add `BreadcrumbList` JSON-LD to product and service pages:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tphorient.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.tphorient.com/products" },
    { "@type": "ListItem", "position": 3, "name": "Orient Super" }
  ]
}
```

#### 2.3 FAQPage Schema

**Problem:** The homepage has an FAQ section but it's not marked up with `FAQPage` schema. This is a missed opportunity for FAQ rich results in Google.

**Action:** Add `FAQPage` JSON-LD to the homepage with the existing Q&A content.

#### 2.4 LocalBusiness Schema

**Problem:** Currently using `Organization` schema. Since Orient has a physical HQ and branch offices, `LocalBusiness` (or `ManufacturingBusiness`) would be more specific and could surface in local search results.

**Action:** Either replace or supplement `Organization` with:
```json
{
  "@type": "ManufacturingBusiness",
  "name": "Orient — The Printers House",
  "address": { ... },
  "geo": { "@type": "GeoCoordinates", "latitude": 28.6325, "longitude": 77.2195 },
  "openingHours": "Mo-Sa 09:00-18:00"
}
```

---

### Priority 3 — Nice to Have, Long-Term

#### 3.1 Blog / Content Strategy

**Problem:** The `/news` page has press coverage but no original content. Orient has deep domain expertise that could drive organic traffic.

**Recommendations:**
- Publish technical articles: "Web Offset vs Digital Inkjet: Which is Right for Your Print Run?"
- Buyer's guides: "How to Choose a Flexographic Press"
- Case studies: "How [Customer] Increased Output 40% with Orient X-Cel"
- Industry commentary on printing trends

Target long-tail keywords like:
- "web offset vs digital printing"
- "flexographic printing machine for labels"
- "best printing press for book publishing"

#### 3.2 Hreflang Tags

**Problem:** Orient exports to 60+ countries but has no multi-language signals.

**Action:** If targeting specific regional markets, add `hreflang` tags. At minimum, add `x-default` for the English site.

#### 3.3 Google Ads Conversion Tracking

**Problem:** Google Ads tag ID is ready (`AW-10894253399`) but not implemented.

**Action:** After SMTP is wired up for the contact form, fire a conversion event on successful form submission. This is critical for measuring ROI on ad spend.

#### 3.4 Image Alt Text Audit

**Action:** Review all product and team images for descriptive alt text. Current product images use generic names — alt text should include:
- Product name
- Product type (e.g., "web offset press")
- Key differentiator (e.g., "30,000 cph")

#### 3.5 Page Speed Optimization

- Audit with Lighthouse — Vercel + Next.js already handles most optimizations
- Ensure all images use `next/image` with proper `sizes` attributes (currently done)
- Consider lazy-loading below-fold videos on the About page

#### 3.6 Internal Linking

- Product pages should cross-link to related products (e.g., C Series → L&P Series)
- Add "Related Products" section to product pages
- Link from blog/news articles to relevant product pages

---

## Pre-Launch SEO Checklist

This should be completed before the DNS switch to `tphorient.com`:

- [ ] Add GA4 property: `G-B3M8N6Y5NP`
- [ ] Add Google Ads tag: `AW-10894253399`
- [ ] Add Meta Pixel: `957027783344751`
- [ ] Add GSC verification: `iI6HDJIxc8dutC6FF7g9efMgTGx1edTpATg7TDkMFqM`
- [ ] Add `/manuals` to sitemap
- [ ] Add product page metadata (titles + descriptions)
- [ ] Add service page metadata
- [ ] Verify all 301 redirects work
- [ ] Test sitemap.xml renders correctly

## Post-Launch SEO Checklist (First 30 Days)

- [ ] Submit sitemap in Google Search Console
- [ ] Request indexing for key pages
- [ ] Monitor GSC Coverage report daily for week 1
- [ ] Compare impressions/clicks to pre-migration baseline
- [ ] Verify `site:tphorient.com` shows all pages indexed
- [ ] Change `tph.co.in` redirect from 302 to 301
- [ ] Monitor for new 404s and add redirects as needed

---

## Reference

- **Sitemap config:** `src/app/sitemap.ts`
- **Robots config:** `src/app/robots.ts`
- **Global metadata:** `src/app/layout.tsx`
- **Organization schema:** `src/app/layout.tsx` (JSON-LD script tag)
- **301 redirects:** `next.config.ts` → `redirects()`
- **Migration plan:** `tasks/migration-plan.md`
