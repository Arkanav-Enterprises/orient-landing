"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const Globe = dynamic(() => import("./Globe"), { ssr: false });

const countries = [
  "Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium",
  "Brazil", "Canada", "Chile", "China", "Colombia", "Egypt", "Ethiopia",
  "Ghana", "Greece", "Hungary", "Indonesia", "Iran", "Iraq", "Italy",
  "Jordan", "Kenya", "Kuwait", "Mexico", "Morocco", "Myanmar", "Nepal",
  "Netherlands", "New Zealand", "Nigeria", "Oman", "Qatar", "Russia",
  "Saudi Arabia", "South Africa", "Spain", "Sri Lanka", "UAE", "UK",
  "USA", "Venezuela", "Vietnam", "Yemen", "Zimbabwe",
];

function CountryCloud() {
  const containerRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let destroyed = false;

    import("TagCloud").then((mod) => {
      if (destroyed || !containerRef.current) return;
      const TagCloud = mod.default ?? mod;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      instanceRef.current = (TagCloud as any)(".tagcloud-sphere", countries, {
        radius: 260,
        maxSpeed: "slow",
        initSpeed: "slow",
        direction: 135,
        keep: true,
      });
    });

    return () => {
      destroyed = true;
      if (instanceRef.current?.destroy) instanceRef.current.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="tagcloud-sphere"
      style={{
        width: 520,
        height: 520,
        fontSize: "13px",
        fontWeight: 500,
        color: "rgba(28,27,29,0.4)",
        fontFamily: "var(--font-roboto-flex), Helvetica Neue, sans-serif",
        cursor: "default",
      }}
    />
  );
}

export default function Patrons() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ marginTop: 160, marginBottom: 160 }}>
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-medium leading-[1.1] text-near-black"
            style={{ fontSize: "clamp(28px, 3.2vw, 50px)", maxWidth: 500 }}
          >
            Trusted by Industry Leaders Worldwide
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[18px] font-medium text-near-black/40"
            style={{ maxWidth: 380 }}
          >
            Imprinting new standards in printing and packaging machinery across the world.
          </motion.p>
        </div>

        {/* Globe + Country Cloud side by side */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 my-12">
          <div style={{ width: "min(90vw, 560px)", height: "min(90vw, 560px)" }}>
            <Globe className="w-full h-full" />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <CountryCloud />
          </motion.div>
        </div>

        {/* Scrolling client logos */}
        {(() => {
          const row1 = Array.from({ length: 16 }, (_, i) => ((i % 16) + 1));
          const row2 = Array.from({ length: 16 }, (_, i) => ((i % 16) + 17));
          const LogoItem = ({ n }: { n: number }) => (
            <div className="shrink-0 flex items-center justify-center" style={{ width: 160, height: 80 }}>
              <Image src={`/images/logos/logo${n}.png`} alt={`Client logo ${n}`} width={140} height={60} className="object-contain max-h-[60px] opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            </div>
          );
          return (
            <div className="space-y-3 mb-4 overflow-hidden">
              <div className="flex gap-3 animate-scroll-left">
                {[...row1, ...row1].map((n, i) => <LogoItem key={i} n={n} />)}
              </div>
              <div className="flex gap-3 animate-scroll-right">
                {[...row2, ...row2].map((n, i) => <LogoItem key={i} n={n} />)}
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
