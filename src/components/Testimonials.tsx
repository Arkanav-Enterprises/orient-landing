"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "TPH Orient's machines have run flawlessly in our press room for over two decades. Their robust build quality is unmatched.",
    name: "Global Publishing Partner",
    company: "Southeast Asia",
  },
  {
    quote:
      "From installation to ongoing service, Orient has been a reliable partner. Their team understands production deadlines.",
    name: "Packaging Solutions Director",
    company: "Middle East",
  },
  {
    quote:
      "We evaluated suppliers worldwide before choosing Orient. The combination of precision engineering and responsive support made the decision clear.",
    name: "Print Operations Manager",
    company: "West Africa",
  },
  {
    quote:
      "Orient's flexo presses transformed our label production. The print quality and uptime have exceeded all expectations.",
    name: "Converting Plant Head",
    company: "East Africa",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ marginTop: 160, marginBottom: 160 }}>
      <div className="container-site">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-medium leading-[1.1] text-near-black mb-14"
          style={{ fontSize: "clamp(28px, 3.2vw, 50px)" }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="bg-[#f5f5f4] rounded-xl"
              style={{ padding: "40px" }}
            >
              <p className="text-[18px] font-medium text-near-black/60 leading-[1.5] mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <span className="text-[15px] font-medium text-near-black block">
                  {t.name}
                </span>
                <span className="text-[14px] font-medium text-near-black/35">
                  {t.company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
