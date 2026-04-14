"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Image from "next/image";

const benefits = [
  {
    title: "Global Reach",
    stat: "60+ Countries",
    description: "With 20,000+ units installed worldwide and dedicated agents in over 60 countries, Orient delivers and services wherever you operate.",
    img: "/images/benefit-global.jpg",
  },
  {
    title: "Proven Track Record",
    stat: "20,000+ Units",
    description: "Nearly eight decades of continuous manufacturing have made Orient the world's most prolific supplier in its field.",
    img: "/images/benefit-press-internals.jpg",
  },
  {
    title: "Complete Support",
    stat: "79 Years",
    description: "From spare parts and AMC servicing to financial support — Orient is with you at every step of your production journey.",
    img: "/images/benefit-support.jpg",
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
      style={{ height: `${benefits.length * 150}vh`, marginBottom: 10 }}
    >
      {/* Sticky viewport */}
      <div
        className="sticky top-0 w-full overflow-hidden"
        style={{ height: "100vh" }}
      >
        {/* Full-bleed background image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={benefits[activeIndex].img}
              alt={benefits[activeIndex].title}
              fill
              className="object-cover"
              priority={activeIndex === 0}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/25" />
          </motion.div>
        </AnimatePresence>

        {/* Content layout: title left, card right */}
        <div
          className="container-site relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8"
          style={{ height: "100%", justifyContent: "center" }}
        >
          {/* Left title — white text on dark bg */}
          <div className="md:w-[40%] md:pr-[60px] shrink-0 pt-24 md:pt-0">
            <h2
              className="font-medium leading-[1.3] text-white"
              style={{ fontSize: "clamp(24px, 2.5vw, 50px)" }}
            >
              Even More Reasons to Choose Orient for Your Production
            </h2>
          </div>

          {/* Right card area — white card like Hajster */}
          <div
            className="flex-1 w-full flex md:justify-end"
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
                  <div
                    className="rounded-2xl p-6 md:p-10"
                    style={{
                      background: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.15))",
                      backdropFilter: "blur(6px)",
                      WebkitBackdropFilter: "blur(6px)",
                      boxShadow: "inset 1px 1px 1px rgba(255,255,255,0.1), inset -1px -1px 1px rgba(0,0,0,0.2), 0 4px 16px rgba(0,0,0,0.15)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <h3 className="text-[28px] font-medium leading-[1.3] text-white mb-5">
                      {benefits[activeIndex].title}
                    </h3>
                    <p
                      className="font-medium text-white leading-[1.1] mb-5"
                      style={{ fontSize: "clamp(32px, 3vw, 50px)" }}
                    >
                      ↓ {benefits[activeIndex].stat}
                    </p>
                    <p className="text-[16px] font-medium leading-[1.5] text-white/75">
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
