"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const benefits = [
  {
    title: "Global Reach",
    stat: "60+ Countries",
    description: "With 20,000+ units installed worldwide and dedicated agents in over 60 countries, Orient delivers and services wherever you operate.",
  },
  {
    title: "Proven Track Record",
    stat: "20,000+ Units",
    description: "Nearly eight decades of continuous manufacturing have made Orient the world's most prolific supplier in its field.",
  },
  {
    title: "Complete Support",
    stat: "79 Years",
    description: "From spare parts and AMC servicing to financial support — Orient is with you at every step of your production journey.",
  },
];

export default function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      Math.floor(v * benefits.length),
      benefits.length - 1
    );
    if (idx !== activeIndex) setActiveIndex(idx);
  });

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${benefits.length * 100 + 50}vh`, marginBottom: 10 }}
    >
      {/* Sticky viewport */}
      <div
        className="sticky top-0 w-full overflow-hidden"
        style={{ height: "100vh" }}
      >
        {/* Background */}
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundColor: `hsl(0, 0%, ${10 + activeIndex * 5}%)` }}
          transition={{ duration: 0.5 }}
        />

        {/* Content layout: title left, card right */}
        <div
          className="container-site relative z-10 flex items-center"
          style={{ height: "100%" }}
        >
          {/* Left title — always visible */}
          <div style={{ width: "40%", paddingRight: 60, flexShrink: 0 }}>
            <h2
              className="font-medium leading-[1.3] text-cream"
              style={{ fontSize: "clamp(24px, 2.5vw, 50px)" }}
            >
              Even More Reasons to Choose Orient for Your Production
            </h2>
          </div>

          {/* Right card area — fixed size container, cards swap inside */}
          <div
            className="flex-1 flex justify-end"
            style={{ position: "relative" }}
          >
            <div style={{ width: "100%", maxWidth: 560 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="bg-white rounded-xl" style={{ padding: 40 }}>
                    <h3 className="text-[28px] font-medium leading-[1.3] text-near-black mb-5">
                      {benefits[activeIndex].title}
                    </h3>
                    <p
                      className="font-medium text-near-black leading-[1.1] mb-5"
                      style={{ fontSize: "clamp(32px, 3vw, 50px)" }}
                    >
                      ↓ {benefits[activeIndex].stat}
                    </p>
                    <p className="text-[16px] font-medium leading-[1.5]" style={{ color: "#78797E" }}>
                      {benefits[activeIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
