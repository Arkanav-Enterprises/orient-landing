"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    category: "Web Offset Printing",
    name: "Orient Offset Series",
    img: "/images/product-offset-series.png",
    light: false,
    machines: [
      { name: "Orient Super", href: "/products/orient-super" },
      { name: "Orient X-Cel", href: "/products/orient-x-cel" },
      { name: "Orient X-Press", href: "/products/orient-x-press" },
      { name: "Orient XLC", href: "/products/orient-xlc" },
    ],
  },
  {
    category: "Flexographic Printing",
    name: "Orient X-Press Flex",
    img: "/images/product-xpress-flex.jpg",
    light: true,
    machines: [
      { name: "X-Press Flex Wide Web", href: "/products/x-press-flex-wide" },
      { name: "X-Press Flex Narrow & Mid Web", href: "/products/x-press-flex-narrow-mid" },
    ],
  },
  {
    category: "Digital Inkjet Printing",
    name: "Orient Jet Series",
    img: "/images/product-jet-series.jpg",
    light: false,
    machines: [
      { name: "Orient Jet L&P Series", href: "/products/orient-jet-lp" },
      { name: "Orient Jet C Series", href: "/products/orient-jet-c" },
    ],
  },
];

export default function Products() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (openIndex === null) return;
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [openIndex]);

  return (
    <section id="catalog" ref={ref} style={{ marginBottom: 10 }}>
      <div className="container-site">
        <div className="rounded-xl bg-[#f5f5f4] px-5 py-12 md:px-[76px] md:py-[76px] md:pb-[100px]">
          {/* Top row */}
          <div className="flex items-center justify-between mb-16">
            <span className="text-[16px] font-medium text-near-black/30">Since 1946</span>
            <span className="text-[24px] font-medium text-near-black tracking-[0.02em]">Orient</span>
          </div>

          {/* 3 column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 24 }}>
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              >
                {/* Image card */}
                <div className="relative bg-[#dddddc] rounded-xl overflow-hidden flex items-end p-6" style={{ height: 403 }}>
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="relative z-10">
                    <p className={`text-[14px] font-medium mb-1 ${product.light ? "text-white/60" : "text-near-black/50"}`}>{product.category}</p>
                    <p className={`text-[28px] font-medium leading-[1.2] ${product.light ? "text-white" : "text-near-black"}`}>{product.name}</p>
                  </div>
                </div>

                {/* Button + dropdown wrapper */}
                <div className="relative" ref={openIndex === i ? dropdownRef : undefined}>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="btn btn-arr text-[16px] mt-3 w-full bg-transparent text-near-black border-black/15 hover:border-black/30 rounded-xl"
                  >
                    <span>More Details</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      className="transition-transform duration-200"
                      style={{ transform: openIndex === i ? "rotate(90deg)" : "none" }}
                    >
                      <path d="M4 9H14M14 9L9.5 4.5M14 9L9.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  {openIndex === i && (
                    <div
                      className="absolute left-0 right-0 mt-2 rounded-xl border border-black/10 bg-white overflow-hidden z-20"
                      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
                    >
                      {product.machines.map((machine, j) => (
                        <Link
                          key={machine.href}
                          href={machine.href}
                          className="flex items-center justify-between px-5 py-4 text-[15px] font-medium text-near-black hover:bg-black/[0.03] transition-colors"
                          style={j < product.machines.length - 1 ? { borderBottom: "1px solid rgba(0,0,0,0.06)" } : {}}
                        >
                          <span>{machine.name}</span>
                          <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="text-near-black/30 flex-shrink-0 ml-3">
                            <path d="M4 9H14M14 9L9.5 4.5M14 9L9.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
