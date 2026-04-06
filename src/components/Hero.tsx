"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroSlides = [
  {
    headline: "Imprinting\nExcellence\nWorldwide",
    subtitle: "From offset to inkjet, books to labels and everything packaging.",
  },
  {
    headline: "From Offset to Inkjet,\nBooks to Labels\nand Everything\nPackaging",
    subtitle: "Orient is your one stop technology and equipment provider.",
  },
  {
    headline: "20,000+ Units\nInstalled in Over\n60 Countries",
    subtitle: "Orient is today the world's most prolific and largest supplier in its field.",
  },
  {
    headline: "Welcome to\nthe World of\nOrient",
    subtitle: "A print experience that is a class apart.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[index];

  return (
    <section className="relative" style={{ minHeight: "100svh", paddingTop: 80 }}>
      <div
        className="container-site flex flex-col justify-between"
        style={{ minHeight: "calc(100svh - 126px)", paddingTop: 32, paddingBottom: 0 }}
      >
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 flex-1">
          {/* Animated headline */}
          <div className="flex-1" style={{ minHeight: 340 }}>
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-near-black font-medium leading-[1.0] tracking-[-0.01em] whitespace-pre-line"
                style={{ fontSize: "clamp(40px, 5vw, 70px)" }}
              >
                {slide.headline}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Animated subtitle */}
          <div style={{ maxWidth: 340 }} className="md:text-right md:pt-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[18px] font-bold leading-[1.2] text-near-black/80"
              >
                {slide.subtitle}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex gap-2 mb-6 mt-8">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="h-[3px] rounded-full transition-all duration-500"
              style={{
                width: i === index ? 48 : 24,
                background: i === index ? "#1C1B1D" : "rgba(28,27,29,0.2)",
              }}
            />
          ))}
        </div>

        {/* Product placeholder */}
        <div
          className="bg-[#dddddc] w-full flex items-end justify-center overflow-hidden"
          style={{ height: "clamp(250px, 40vh, 500px)", borderRadius: "12px 12px 0 0" }}
        >
          <span className="text-near-black/10 text-[14px] font-medium mb-12">
            Orient Press — Product Image
          </span>
        </div>
      </div>

      {/* Scroll arrow */}
      <a href="#introduction" className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-12 h-12 rounded-full bg-black/10 backdrop-blur-sm flex items-center justify-center"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2V14M8 14L3 9M8 14L13 9" stroke="#1C1B1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </a>
    </section>
  );
}
