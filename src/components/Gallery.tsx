"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ marginTop: 120, marginBottom: 120 }}>
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr]" style={{ gap: 24 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="bg-[#dddddc] rounded-xl flex items-center justify-center"
            style={{ height: 562 }}
          >
            <span className="text-near-black/10 text-[14px] font-medium">Orient Press Close-up</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-[#f5f5f4] rounded-xl flex items-center justify-center"
            style={{ height: 562 }}
          >
            <span className="text-near-black/10 text-[14px] font-medium">Orient Factory Floor</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
