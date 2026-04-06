"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const products = [
  { category: "Web Offset Printing", name: "Orient Offset Series", img: "/images/product-offset-series.png", light: false },
  { category: "Flexographic Printing", name: "Orient X-Press Flex", img: "/images/product-xpress-flex.jpg", light: true },
  { category: "Digital Inkjet Printing", name: "Orient Jet Series", img: "/images/product-jet-series.jpg", light: false },
];

export default function Products() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="catalog" ref={ref} style={{ marginBottom: 10 }}>
      <div className="container-site">
        <div className="rounded-xl bg-[#f5f5f4]" style={{ padding: "76px 76px 100px" }}>
          {/* Top row */}
          <div className="flex items-center justify-between mb-16">
            <span className="text-[16px] font-medium text-near-black/30">Since 1946</span>
            <span className="text-[24px] font-medium text-near-black tracking-[0.02em]">Orient</span>
          </div>

          {/* 3 column grid — 19px gap like Hajster */}
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

                {/* Button */}
                <button className="btn btn-arr text-[16px] mt-3 w-full bg-transparent text-near-black border-black/15 hover:border-black/30 rounded-xl">
                  <span>More Details</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 9H14M14 9L9.5 4.5M14 9L9.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
