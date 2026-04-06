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
    <section className="relative overflow-hidden" style={{ height: "100svh" }}>
      {/* Video background — absolute, fills entire section including behind navbar */}
      <div className="absolute inset-0" style={{ top: -80 }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/product-press.png"
          className="w-full h-full"
          style={{ objectFit: "cover" }}
        >
          <source src="/videos/orient-hero-video.mp4" type="video/mp4" />
        </video>
        <noscript>
          <img
            src="/images/product-press.png"
            alt="Orient Inkjet Press"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </noscript>
      </div>

      {/* Content overlay */}
      <div
        className="relative z-10 container-site flex flex-col justify-between h-full"
        style={{ paddingTop: 112, paddingBottom: 40 }}
      >
        {/* Top row — headline left, subtitle right — liquid glass backdrop */}
        <div
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 p-6 md:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.15))",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            borderRadius: 12,
            boxShadow: "inset 1px 1px 1px rgba(255,255,255,0.1), inset -1px -1px 1px rgba(0,0,0,0.2), 0 4px 16px rgba(0,0,0,0.15)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* Animated headline */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-white font-medium leading-[1.0] tracking-[-0.01em] whitespace-pre-line"
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
                className="text-[18px] font-bold leading-[1.2] text-orient-red"
              >
                {slide.subtitle}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom — slide indicators + scroll arrow */}
        <div className="flex items-end justify-between">
          {/* Slide indicators */}
          <div className="flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="h-[3px] rounded-full transition-all duration-500"
                style={{
                  width: i === index ? 48 : 24,
                  background: i === index ? "#fff" : "rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </div>

          {/* Scroll arrow */}
          <a href="#introduction">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2V14M8 14L3 9M8 14L13 9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
}
