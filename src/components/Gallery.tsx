"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

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
            className="rounded-xl overflow-hidden relative"
            style={{ height: 562 }}
          >
            <Image src="/images/press-closeup.jpg" alt="Orient press precision machining" fill className="object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-xl overflow-hidden relative"
            style={{ height: 562 }}
          >
            <Image src="/images/factory-floor.jpg" alt="Orient factory floor" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
