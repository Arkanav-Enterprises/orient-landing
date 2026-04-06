"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const aboutLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Legacy", href: "/legacy" },
  { label: "Our Infrastructure", href: "/infrastructure" },
  { label: "Our Patrons", href: "/patrons" },
  { label: "Suppliers Hub", href: "/suppliers" },
  { label: "Our Team", href: "/team" },
];

const productColumns = [
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
    title: "Services",
    links: [
      { label: "Spare Parts", href: "/services/spare-parts" },
      { label: "AMC Servicing", href: "/services/amc" },
      { label: "Financial Support", href: "/services/financial" },
    ],
  },
  {
    title: "Flexo Presses",
    links: [
      { label: "X-Press Flex Narrow Web", href: "/products/x-press-flex-narrow" },
      { label: "X-Press Flex Mid Web", href: "/products/x-press-flex-mid" },
      { label: "X-Press Flex Wide Web", href: "/products/x-press-flex-wide" },
    ],
  },
  {
    title: "Inkjet Presses",
    links: [
      { label: "Orient Jet C Series", href: "/products/orient-jet-c" },
      { label: "Orient Jet L&P Series", href: "/products/orient-jet-lp" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openDropdown(name: string) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  }

  function closeDropdown() {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || activeDropdown ? "bg-white/80 backdrop-blur-xl" : "bg-transparent"
        }`}
        style={{ height: 80 }}
      >
        <div className="container-site h-full flex items-center">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-sm bg-orient-red flex items-center justify-center text-white font-semibold text-[15px]">O</div>
            <span className="text-[15px] font-medium text-near-black">Orient</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 ml-10">
            <Link href="/about" className="text-[15px] font-medium text-near-black/60 hover:text-near-black transition-colors px-4 py-2">
              About Us
            </Link>

            {/* Products mega dropdown */}
            <div
              className="relative"
              onMouseEnter={() => openDropdown("products")}
              onMouseLeave={closeDropdown}
            >
              <button className="flex items-center gap-1 text-[15px] font-medium text-near-black/60 hover:text-near-black transition-colors px-4 py-2">
                Products
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="mt-0.5"><path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
              </button>
              <AnimatePresence>
                {activeDropdown === "products" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 pt-2"
                    style={{ width: "max-content" }}
                    onMouseEnter={() => openDropdown("products")}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="bg-[#f5f5f4] border border-black/8 rounded-[6px] p-6 flex gap-10">
                      {productColumns.map((col) => (
                        <div key={col.title} style={{ minWidth: 180 }}>
                          <span className="text-[12px] font-semibold text-near-black/40 uppercase tracking-wider block mb-3">{col.title}</span>
                          {col.links.map((l) => (
                            <Link key={l.href} href={l.href} className="block text-[14px] font-medium text-near-black/50 hover:text-near-black py-1.5 transition-colors">
                              {l.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/news" className="text-[15px] font-medium text-near-black/60 hover:text-near-black transition-colors px-4 py-2">News & Events</Link>
            <Link href="/downloads" className="text-[15px] font-medium text-near-black/60 hover:text-near-black transition-colors px-4 py-2">Downloads</Link>
            <Link href="/contact" className="text-[15px] font-medium text-near-black/60 hover:text-near-black transition-colors px-4 py-2">Contact</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <Link href="/contact" className="btn btn-outline text-[14px] h-[40px] px-5">Request a Quote</Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden flex flex-col gap-[5px] p-2 ml-auto" aria-label="Menu">
            <motion.span animate={mobileOpen ? { rotate: 45, y: 7 } : {}} className="w-5 h-[2px] bg-near-black block" />
            <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="w-5 h-[2px] bg-near-black block" />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -7 } : {}} className="w-5 h-[2px] bg-near-black block" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl overflow-y-auto" style={{ paddingTop: 80 }}>
            <div className="container-site py-8 space-y-6">
              <div>
                <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-[16px] font-medium text-near-black py-2">About Us</Link>
              </div>
              {productColumns.map((col) => (
                <div key={col.title}>
                  <p className="text-[12px] font-semibold text-near-black/40 uppercase tracking-wider mb-3">{col.title}</p>
                  {col.links.map((l) => <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block text-[16px] font-medium text-near-black/60 py-2">{l.label}</Link>)}
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <Link href="/news" onClick={() => setMobileOpen(false)} className="block text-[16px] font-medium text-near-black py-2">News & Events</Link>
                <Link href="/downloads" onClick={() => setMobileOpen(false)} className="block text-[16px] font-medium text-near-black py-2">Downloads</Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-[16px] font-medium text-near-black py-2">Contact</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
