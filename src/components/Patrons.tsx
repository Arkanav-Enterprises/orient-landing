"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";

const Globe = dynamic(() => import("./Globe"), { ssr: false });

const countries = [
  "Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium",
  "Brazil", "Canada", "Chile", "China", "Colombia", "Egypt", "Ethiopia",
  "Ghana", "Greece", "Hungary", "Indonesia", "Iran", "Iraq", "Italy",
  "Jordan", "Kenya", "Kuwait", "Mexico", "Morocco", "Myanmar", "Nepal",
  "Netherlands", "New Zealand", "Nigeria", "Oman", "Qatar", "Russia",
  "Saudi Arabia", "South Africa", "Spain", "Sri Lanka", "UAE", "UK",
  "USA", "Venezuela", "Vietnam", "Yemen", "Zimbabwe",
];

export default function Patrons() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ marginTop: 160, marginBottom: 160 }}>
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-medium leading-[1.1] text-white"
            style={{ fontSize: "clamp(28px, 3.2vw, 50px)", maxWidth: 500 }}
          >
            Trusted Across 60+ Countries
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[18px] font-medium text-white/40"
            style={{ maxWidth: 380 }}
          >
            Imprinting new standards in printing and packaging machinery across the world.
          </motion.p>
        </div>

        {/* Globe */}
        <div className="flex justify-center my-12">
          <div style={{ width: "min(90vw, 700px)", height: "min(90vw, 700px)" }}>
            <Globe className="w-full h-full" />
          </div>
        </div>

        {/* Scrolling logo placeholders */}
        <div className="space-y-3 mb-16 overflow-hidden">
          <div className="flex gap-3 animate-scroll-left">
            {[...Array(14)].map((_, i) => (
              <div key={i} className="shrink-0 bg-[#111] rounded-[4px] flex items-center justify-center" style={{ width: 160, height: 80 }}>
                <span className="text-white/8 text-[11px] font-medium">Client Logo</span>
              </div>
            ))}
          </div>
          <div className="flex gap-3 animate-scroll-right">
            {[...Array(14)].map((_, i) => (
              <div key={i} className="shrink-0 bg-[#111] rounded-[4px] flex items-center justify-center" style={{ width: 160, height: 80 }}>
                <span className="text-white/8 text-[11px] font-medium">Client Logo</span>
              </div>
            ))}
          </div>
        </div>

        {/* Country tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2"
        >
          {countries.map((country) => (
            <span
              key={country}
              className="text-[13px] font-medium text-white/30 px-3 py-1.5 border border-white/8 rounded-[4px]"
            >
              {country}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
