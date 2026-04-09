"use client";

import Link from "next/link";
import Image from "next/image";

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
      { label: "X-Press Flex Narrow & Mid Web", href: "/products/x-press-flex-narrow-mid" },
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
      { label: "Spare Parts & Consumables", href: "/services/spare-parts" },
      { label: "AMC Servicing", href: "/services/amc" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "News & Events", href: "/news" },
      { label: "Downloads", href: "/downloads" },
      { label: "Contact Us", href: "/contact" },
      { label: "General Terms & Conditions", href: "#", children: [
        { label: "Domestic", href: "/assets/pdf/domestic.pdf" },
        { label: "International", href: "/assets/pdf/International.pdf" },
      ] },
      { label: "Operations & Maintenance Manual", href: "/downloads" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ marginTop: 80, background: "#000" }}>
      <div className="container-site" style={{ paddingTop: 80, paddingBottom: 64 }}>
        {/* Top: logo + newsletter */}
        <div className="flex flex-col md:flex-row md:justify-between gap-12 mb-20">
          <div>
            <div className="flex items-center mb-3">
              <Image src="/images/orient-logo.png" alt="Orient" width={140} height={44} className="object-contain brightness-0 invert" />
            </div>
            <p className="text-[14px] font-medium text-white/30">Est. 1946 — The Printers House</p>
          </div>

          <div style={{ maxWidth: 440 }}>
            <p className="text-[18px] font-medium text-white/70 mb-4">Stay Updated — Subscribe to Our Newsletter.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email" className="w-full h-[48px] px-5 pr-16 bg-white/10 border border-white/15 rounded-[6px] text-[15px] font-medium text-white placeholder:text-white/30 outline-none focus:border-white/30 transition-colors" />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-sm bg-white flex items-center justify-center" aria-label="Subscribe">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="#1C1B1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </form>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[14px] font-semibold text-white/50 uppercase tracking-wider mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href === "#" ? (
                      <span className="text-[15px] font-medium text-white/35">{link.label}</span>
                    ) : link.href.startsWith("http") ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-white/35 hover:text-white/70 transition-colors">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-[15px] font-medium text-white/35 hover:text-white/70 transition-colors">
                        {link.label}
                      </Link>
                    )}
                    {"children" in link && (link as any).children && (
                      <ul className="mt-2 space-y-2 pl-3">
                        {(link as any).children.map((child: { label: string; href: string }) => (
                          <li key={child.label}>
                            <a href={child.href} target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium text-white/25 hover:text-white/50 transition-colors">
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6">
            <a href="https://www.facebook.com/orientprintingandpackaging/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/50 transition-colors" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/orientprintingandpackaging" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/50 transition-colors" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/orientprintingandpackaging" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/50 transition-colors" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:tphho@tphorient.com" className="text-[14px] font-medium text-white/30 hover:text-white/50 transition-colors">tphho@tphorient.com</a>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1">
            <span className="text-[14px] font-medium text-white/30">&copy; {new Date().getFullYear()} Orient — The Printers House</span>
            <a href="https://settlewithai.com/" target="_blank" rel="noopener noreferrer" className="text-[12px] font-medium text-white/20 hover:text-white/40 transition-colors">Designed &amp; Developed by Settle</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
