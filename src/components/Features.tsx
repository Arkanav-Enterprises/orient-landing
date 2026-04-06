"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    label: "Printing",
    icon: <svg width="40" height="40" viewBox="0 0 48 48" fill="none"><path d="M16 12l8-4 8 4M12 20l12-4 12 4M16 28l8-4 8 4" stroke="#FFFCE3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    label: "Converting",
    icon: <svg width="40" height="40" viewBox="0 0 48 48" fill="none"><path d="M10 16l14 8-14 8V16z" stroke="#FFFCE3" strokeWidth="1.5" strokeLinejoin="round" /><path d="M24 16l14 8-14 8V16z" stroke="#FFFCE3" strokeWidth="1.5" strokeLinejoin="round" /></svg>,
  },
  {
    label: "Finishing",
    icon: <svg width="40" height="40" viewBox="0 0 48 48" fill="none"><rect x="10" y="10" width="28" height="28" rx="4" stroke="#FFFCE3" strokeWidth="1.5" /><path d="M18 24h12M24 18v12" stroke="#FFFCE3" strokeWidth="1.5" strokeLinecap="round" /></svg>,
  },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ marginBottom: 10 }}>
      <div className="container-site">
        {/* Hajster: bg #78797E, padding 160px 76px */}
        <div className="rounded-xl bg-medium-gray flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16" style={{ padding: "160px 76px" }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-medium leading-[1.1] text-cream"
            style={{ fontSize: "clamp(28px, 3.2vw, 50px)", maxWidth: 480 }}
          >
            Offset, Flexo, Digital & Packaging
          </motion.h2>

          <div className="flex flex-wrap gap-8 justify-center">
            {features.map((feat, i) => (
              <motion.div
                key={feat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="flex items-center justify-center rounded-xl" style={{ width: 100, height: 100, border: "2px solid rgba(255,252,227,0.25)" }}>
                  {feat.icon}
                </div>
                <span className="text-[16px] font-medium text-cream/70">{feat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
