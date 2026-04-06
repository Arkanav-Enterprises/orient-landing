"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ marginTop: 160, marginBottom: 200 }}>
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ maxWidth: 540 }}>
            <h2 className="font-medium leading-[1.1] text-near-black mb-8" style={{ fontSize: "clamp(28px, 3.2vw, 50px)" }}>
              Choose Precision, Choose Orient
            </h2>
            <p className="text-[18px] font-medium text-near-black/40 leading-[1.4] mb-8">
              Join the 20,000+ production facilities worldwide that trust Orient for their printing and packaging machinery.
            </p>
            <a href="#contacts" className="btn btn-cream text-[16px]">I Want to Install Orient</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-xl overflow-hidden relative flex-1"
            style={{ height: 500, maxWidth: 600, marginLeft: "auto" }}
          >
            <Image
              src="/images/team-photo.jpg"
              alt="Orient team"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
