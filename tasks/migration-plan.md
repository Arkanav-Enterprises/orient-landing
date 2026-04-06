# tphorient.com Migration Plan

> **Status:** Draft — execute when ready to go live
> **Last updated:** 2026-04-07
> **Prepared by:** Settle (settlewithai.com)

---

## Pre-Migration (Do Before DNS Switch)

### 1. Add Analytics & Tracking Tags
- [ ] Add GA4 property: `G-B3M8N6Y5NP`
- [ ] Add Google Ads conversion tag: `AW-10894253399`
- [ ] Add Meta Pixel: `957027983344751`
- [ ] Add Google Search Console verification: `iI6HDJIxc8dutC6FF7g9efMgTGx1edTpATg7TDkMFqM`
- [ ] Verify all fire correctly in dev before going live

### 2. Add Custom Domain to Vercel
- [ ] Go to Vercel Dashboard → Project Settings → Domains
- [ ] Add `www.tphorient.com` as production domain
- [ ] Add `tphorient.com` (non-www) — configure to redirect to `www`
- [ ] Vercel will provide DNS records (CNAME or A records)

### 3. Final Content Review
- [ ] Review all page content for accuracy
- [ ] Verify all product PDFs download correctly
- [ ] Test contact form submission
- [ ] Test chat AI responses
- [ ] Check all external links (news articles, LinkedIn, etc.)

---

## Migration Day (DNS Switch)

### 4. Update DNS Records
- [ ] Log into domain registrar for `tphorient.com`
- [ ] Update DNS to point to Vercel (per records from step 2)
- [ ] TTL recommendation: set to 300s (5 min) 24h before switch, so propagation is fast
- [ ] Wait for propagation (typically 5–30 minutes)

### 5. Verify SSL
- [ ] Vercel auto-provisions SSL — confirm `https://www.tphorient.com` loads with valid cert
- [ ] Confirm `http://` redirects to `https://`
- [ ] Confirm `tphorient.com` (non-www) redirects to `www.tphorient.com`

### 6. Fix tph.co.in Redirect
- [ ] Current state: `tph.co.in` → 302 (temporary) to `tphorient.com`
- [ ] Change to: `tph.co.in` → 301 (permanent) to `https://www.tphorient.com`
- [ ] This preserves any PageRank flowing from the old domain

---

## Post-Migration (First 48 Hours)

### 7. Google Search Console
- [ ] Re-verify ownership of `www.tphorient.com` in GSC
- [ ] Submit sitemap: `https://www.tphorient.com/sitemap.xml`
- [ ] Use "Request Indexing" on key pages: `/`, `/products`, `/about`, `/contact`
- [ ] If old site was a separate GSC property, use Change of Address tool (only if domain changed)

### 8. Test All 301 Redirects
Test these URLs resolve correctly (all should 301/308 to new paths):

```
/orient-standard.php         → /products/orient-standard
/orient-super.php            → /products/orient-super
/orient-x-cel.php            → /products/orient-x-cel
/orient-xpress.php           → /products/orient-x-press
/orient-xlc.php              → /products/orient-xlc
/product.php                 → /products
/about-us.php                → /about
/our-legacy.php              → /about#legacy
/contact.php                 → /contact
/download.php                → /downloads
/news-and-events.php         → /news
/spare-parts.php             → /services/spare-parts
/amc-servicing.php           → /services/amc
/inkjet-digital-printing-machine.php → /products/orient-jet-c
```

### 9. Monitor for Errors
- [ ] Check Vercel logs for 404s: `vercel logs <url> --level error`
- [ ] Check GSC → Coverage report for crawl errors daily for first week
- [ ] If new 404s appear from old URLs we missed, add redirects to `next.config.ts`

---

## Post-Migration (First 30 Days)

### 10. SEO Monitoring
- [ ] **Week 1:** Check GSC daily — look for indexing issues, crawl errors, manual actions
- [ ] **Week 2:** Compare impressions/clicks to pre-migration baseline
- [ ] **Week 3–4:** Verify key pages are indexed (search `site:tphorient.com/products`)
- [ ] If rankings drop significantly, check: redirects working, no noindex tags, sitemap submitted

### 11. Retire Old Infrastructure
- [ ] Keep old IIS/Plesk hosting active for 90 days as fallback
- [ ] After 90 days with stable traffic, decommission old server
- [ ] Cancel old hosting subscription
- [ ] Ensure `tph.co.in` redirect continues working (separate from main hosting)

### 12. Ongoing SEO Improvements (Optional)
- [ ] Add Product schema (JSON-LD) to individual product pages
- [ ] Add FAQ schema to the FAQ section on homepage
- [ ] Add BreadcrumbList schema to product pages
- [ ] Create an OG image per page (currently using logo for all)
- [ ] Add `hreflang` tags if targeting specific regional markets
- [ ] Set up Google Ads conversion tracking on contact form submission

---

## What's Already Done (No Action Needed)

| Item | Status |
|------|--------|
| robots.txt | ✅ Live at /robots.txt |
| sitemap.xml | ✅ 23 URLs with priorities |
| Meta titles (per page) | ✅ Template: "Page \| Orient — The Printers House" |
| Meta descriptions (per page) | ✅ Unique for Products, About, Contact, Downloads, News |
| Open Graph tags | ✅ og:title, og:description, og:image, og:type, og:locale |
| Twitter Cards | ✅ summary_large_image |
| Canonical URLs | ✅ Set per page |
| JSON-LD Organization schema | ✅ With address, contact, social links |
| 301 redirects (35 URLs) | ✅ All .php URLs mapped in next.config.ts |
| Social links (FB, IG, LinkedIn) | ✅ In footer with correct URLs |
| Mobile responsive | ✅ All pages tested |
| HTTPS | ✅ Auto via Vercel |
| Clean URL structure | ✅ No .php, no query strings |

---

## Key Contacts

- **Domain registrar:** [Check with IT team]
- **Old hosting (IIS/Plesk):** [Check with IT team]
- **tph.co.in domain:** [Check with IT team]
- **Google Search Console access:** [Check with marketing team]
- **GA4 / Google Ads access:** [Check with marketing team]
- **Site developer:** Settle (settlewithai.com)
