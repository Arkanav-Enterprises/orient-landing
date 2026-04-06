"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollRevealText from "./ScrollRevealText";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} style={{ marginTop: 160, marginBottom: 120 }}>
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {/* Left — fixed width intro (Hajster: 370px) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ width: 370, flexShrink: 0, paddingTop: 10 }}
          >
            <p className="text-[18px] font-medium leading-[1.4] text-white/50">
              The name Orient comes from the rising sun — symbolizing new beginnings, energy, and the relentless pursuit of excellence in every machine we build.
            </p>
          </motion.div>

          {/* Right — title + scroll reveal */}
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="font-medium leading-[1.1] text-white mb-12"
              style={{ fontSize: "clamp(32px, 3.2vw, 50px)" }}
            >
              Meet Orient
            </motion.h2>
            <ScrollRevealText
              text="Established in 1946 by K.D. Kohli, a freedom fighter and newspaperman, Orient has grown from a single workshop in post-independence India to the world's most prolific supplier of printing machinery. Three generations of the Kohli family have steered the company through decades of innovation — from web offset to flexographic, from inkjet to packaging. Today, under the leadership of Rishabh Kohli, Orient operates a 20-acre manufacturing campus, serves 60+ countries, and has installed over 20,000 units worldwide."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
