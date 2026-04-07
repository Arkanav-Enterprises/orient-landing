"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

/* ── Google Translate ── */
declare global {
  interface Window {
    google: { translate: { TranslateElement: new (opts: Record<string, unknown>, id: string) => void } };
    googleTranslateElementInit: () => void;
  }
}

function useGoogleTranslate() {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (document.getElementById("google-translate-script")) { setLoaded(true); return; }
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", layout: 2 /* SIMPLE */ },
        "google_translate_element"
      );
      setLoaded(true);
    };
    const s = document.createElement("script");
    s.id = "google-translate-script";
    s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return { loaded, open, toggle: () => setOpen((v) => !v) };
}

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
      { label: "Orient Super", href: "/products/orient-super", img: "/images/prod-super-1.jpg" },
      { label: "Orient X-Cel", href: "/products/orient-x-cel", img: "/images/prod-xcel-1.jpg" },
      { label: "Orient X-Press", href: "/products/orient-x-press", img: "/images/prod-xpress-1.jpg" },
      { label: "Orient XLC", href: "/products/orient-xlc", img: "/images/prod-xlc-1.jpg" },
      { label: "Folders", href: "/products/folders", img: "/images/prod-folders-1.jpg" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Spare Parts & Consumables", href: "/services/spare-parts", img: "/images/consumables-inks.jpg" },
      { label: "AMC Servicing", href: "/services/amc", img: "/images/amc-servicing.jpg" },
    ],
  },
  {
    title: "Flexo Presses",
    links: [
      { label: "X-Press Flex Narrow & Mid Web", href: "/products/x-press-flex-narrow-mid", img: "/images/prod-flex-nm-1.jpg" },
      { label: "X-Press Flex Wide Web", href: "/products/x-press-flex-wide", img: "/images/prod-flex-wide-1.jpg" },
    ],
  },
  {
    title: "Inkjet Presses",
    links: [
      { label: "Orient Jet C Series", href: "/products/orient-jet-c", img: "/images/prod-jet-c-1.jpg" },
      { label: "Orient Jet L&P Series", href: "/products/orient-jet-lp", img: "/images/prod-jet-lp-1.jpg" },
    ],
  },
];

const defaultProductPreview = "/images/prod-jet-c-1.jpg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [previewImg, setPreviewImg] = useState<string>(defaultProductPreview);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { open: translateOpen, toggle: toggleTranslate } = useGoogleTranslate();

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
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setPreviewImg(defaultProductPreview);
    }, 150);
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
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/images/orient-logo.png" alt="Orient" width={120} height={38} className="object-contain" priority />
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
              <button type="button" className="flex items-center gap-1 text-[15px] font-medium text-near-black/60 hover:text-near-black transition-colors px-4 py-2">
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
                    <div className="bg-[#f5f5f4] border border-black/8 rounded-[6px] p-6 flex gap-8 items-start">
                      {productColumns.map((col) => (
                        <div key={col.title} style={{ minWidth: 170 }}>
                          <span className="text-[12px] font-semibold text-near-black/40 uppercase tracking-wider block mb-3">{col.title}</span>
                          {col.links.map((l) => (
                            <Link
                              key={l.href}
                              href={l.href}
                              onMouseEnter={() => setPreviewImg(l.img)}
                              className="block text-[14px] font-medium text-near-black/50 hover:text-near-black py-1.5 transition-colors"
                            >
                              {l.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                      {/* Preview column */}
                      <div className="shrink-0" style={{ width: 220 }}>
                        <div
                          className="relative bg-black/[0.04] rounded-[6px] overflow-hidden"
                          style={{ aspectRatio: "4 / 3" }}
                        >
                          <Image
                            key={previewImg}
                            src={previewImg}
                            alt="Product preview"
                            fill
                            className="object-cover"
                            sizes="220px"
                          />
                        </div>
                      </div>
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
            <button onClick={toggleTranslate} className="w-[40px] h-[40px] flex items-center justify-center rounded-lg text-near-black/40 hover:text-near-black/70 hover:bg-black/[0.04] transition-colors" aria-label="Translate" title="Translate page">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </button>
            <Link href="/contact" className="btn btn-outline text-[14px] h-[40px] px-5">Request a Quote</Link>
          </div>

          {/* Mobile: quote CTA + translate + toggle */}
          <div className="lg:hidden flex items-center gap-1 ml-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[36px] px-4 rounded-md border border-black/15 text-[16px] font-medium text-near-black hover:border-black/40 transition-colors mr-1 whitespace-nowrap"
            >
              Request Quote
            </Link>
            <button onClick={toggleTranslate} className="w-[36px] h-[36px] flex items-center justify-center rounded-lg text-near-black/40 hover:text-near-black/70 transition-colors" aria-label="Translate">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="flex flex-col gap-[5px] p-2" aria-label="Menu">
              <motion.span animate={mobileOpen ? { rotate: 45, y: 7 } : {}} className="w-5 h-[2px] bg-near-black block" />
              <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="w-5 h-[2px] bg-near-black block" />
              <motion.span animate={mobileOpen ? { rotate: -45, y: -7 } : {}} className="w-5 h-[2px] bg-near-black block" />
            </button>
          </div>
        </div>
      </header>

      {/* Google Translate widget — always in DOM for init, visually toggled */}
      <div
        id="google_translate_element"
        className={`fixed z-[60] bg-white rounded-xl shadow-xl border border-black/10 p-3 min-w-[200px] transition-all duration-200 [&>.goog-te-gadget]:font-[inherit] [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-black/10 [&_select]:bg-[#f5f5f4] [&_select]:px-3 [&_select]:py-2.5 [&_select]:text-sm [&_select]:text-near-black/70 [&_select]:outline-none [&_.goog-te-gadget>span]:hidden [&_.goog-logo-link]:hidden [&_.goog-te-gadget>div:first-child]:hidden ${translateOpen ? "top-[84px] right-4 opacity-100 visible" : "top-[70px] right-4 opacity-0 invisible"}`}
      />

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
