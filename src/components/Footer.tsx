"use client";

import Link from "next/link";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Legacy", href: "/legacy" },
      { label: "Our Infrastructure", href: "/infrastructure" },
      { label: "Our Team", href: "/team" },
      { label: "Our Patrons", href: "/patrons" },
      { label: "Suppliers Hub", href: "/suppliers" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Offset Presses",
    links: [
      { label: "Orient Standard", href: "/products/orient-standard" },
      { label: "Orient Super", href: "/products/orient-super" },
      { label: "Orient X-Cel", href: "/products/orient-x-cel" },
      { label: "Orient X-Press", href: "/products/orient-x-press" },
      { label: "Orient XLC", href: "/products/orient-xlc" },
      { label: "Folders", href: "/products/folders" },
    ],
  },
  {
    title: "Flexo & Inkjet",
    links: [
      { label: "X-Press Flex Narrow Web", href: "/products/x-press-flex-narrow" },
      { label: "X-Press Flex Mid Web", href: "/products/x-press-flex-mid" },
      { label: "X-Press Flex Wide Web", href: "/products/x-press-flex-wide" },
      { label: "Orient Jet C Series", href: "/products/orient-jet-c" },
      { label: "Orient Jet L&P Series", href: "/products/orient-jet-lp" },
    ],
  },
  {
    title: "Packaging & Services",
    links: [
      { label: "Orient X-Press Fold", href: "/products/x-press-fold" },
      { label: "Orient X-Press Cut", href: "/products/x-press-cut" },
      { label: "Spare Parts", href: "/services/spare-parts" },
      { label: "AMC Servicing", href: "/services/amc" },
      { label: "Financial Support", href: "/services/financial" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "News & Events", href: "/news" },
      { label: "Downloads", href: "/downloads" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06]" style={{ marginTop: 80 }}>
      <div className="container-site" style={{ paddingTop: 80, paddingBottom: 64 }}>
        {/* Top: logo + newsletter */}
        <div className="flex flex-col md:flex-row md:justify-between gap-12 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-sm bg-orient-red flex items-center justify-center text-white font-semibold text-base">O</div>
              <span className="text-[16px] font-medium text-near-black">Orient</span>
            </div>
            <p className="text-[14px] font-medium text-near-black/30">Est. 1946 — The Printers House</p>
          </div>

          <div style={{ maxWidth: 440 }}>
            <p className="text-[18px] font-medium text-near-black/70 mb-4">Stay Updated — Subscribe to Our Newsletter.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email" className="input-field pr-16" />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-sm bg-near-black flex items-center justify-center" aria-label="Subscribe">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </form>
          </div>
        </div>

        {/* Link columns — Settle-style mega footer */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[14px] font-semibold text-near-black/50 uppercase tracking-wider mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[15px] font-medium text-near-black/35 hover:text-near-black/70 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-black/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6">
            {["Fb", "Ig", "Li"].map((s) => <a key={s} href="#" className="text-[14px] font-medium text-near-black/30 hover:text-near-black/50 transition-colors">{s}</a>)}
            <span className="text-[14px] font-medium text-near-black/30">tphho@tphorient.com</span>
          </div>
          <span className="text-[14px] font-medium text-near-black/30">&copy; {new Date().getFullYear()} Orient — The Printers House</span>
        </div>
      </div>
    </footer>
  );
}
