"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Introduction() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="introduction" ref={ref} style={{ marginTop: 160, marginBottom: 200 }}>
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {/* Left — body text + CTA (fixed width like Hajster's 370px) */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ maxWidth: 420, flexShrink: 0 }}>
            <p className="text-[18px] font-medium leading-[1.4] text-white/60 mb-8">
              Orient is an India-rooted manufacturer of printing and packaging machinery, offering not only product quality but also customer peace of mind since 1946.
            </p>
            <a href="#about" className="btn btn-cream text-[16px] h-[48px]">About Our Company</a>
          </motion.div>

          {/* Right — large display text (flex: 1) */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }} className="flex-1" style={{ maxWidth: 800 }}>
            <p className="text-[50px] font-medium leading-[1.1] text-white" style={{ fontSize: "clamp(28px, 3.2vw, 50px)" }}>
              Development, Manufacturing, Installation, and Service of World-Class Printing Machinery.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
