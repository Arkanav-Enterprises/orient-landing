"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const milestones = [
  { label: "Year", year: "1946", event: "Founded by K.D. Kohli, freedom fighter and newspaperman, in post-independence India" },
  { label: "Year", year: "1960s", event: "First web offset printing press manufactured in India, pioneering domestic production" },
  { label: "Year", year: "1980s", event: "Export operations launched, bringing Orient machinery to international markets" },
  { label: "Year", year: "2000s", event: "Expansion into flexographic and digital inkjet printing technology" },
  { label: "Year", year: "2020s", event: "20,000+ units installed worldwide under the leadership of Rishabh Kohli" },
];

export default function Legacy() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="news" ref={sectionRef} style={{ marginTop: 200, marginBottom: 200 }}>
      <div className="container-site">
        <h2
          className="font-medium leading-[1.1] text-white mb-20"
          style={{ fontSize: "clamp(28px, 3.2vw, 50px)" }}
        >
          Our History
        </h2>

        <div className="relative">
          {/* Left arrow line — repeating carets */}
          <ScrollRevealLine sectionRef={sectionRef} count={milestones.length} />

          {/* Milestones */}
          <div style={{ paddingLeft: 60 }}>
            {milestones.map((ms, i) => (
              <MilestoneRow key={ms.year} milestone={ms} index={i} total={milestones.length} sectionRef={sectionRef} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollRevealLine({ sectionRef }: { sectionRef: React.RefObject<HTMLDivElement | null>; count: number }) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const revealHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // SVG caret as data URI for repeating background
  const caretSvg = (color: string) =>
    `url("data:image/svg+xml,%3Csvg width='14' height='18' viewBox='0 0 14 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 12L1 3H13L7 12Z' fill='${encodeURIComponent(color)}'/%3E%3C/svg%3E")`;

  return (
    <div className="absolute left-0 top-0 bottom-0" style={{ width: 24 }}>
      {/* Gray carets — repeating background fills full height */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: caretSvg("rgba(255,255,255,0.06)"),
          backgroundSize: "14px 18px",
          backgroundRepeat: "repeat-y",
          backgroundPosition: "center top",
        }}
      />
      {/* Revealed carets — clipped by scroll */}
      <motion.div
        className="absolute left-0 right-0 top-0 overflow-hidden"
        style={{ height: revealHeight }}
      >
        <div
          className="w-full h-[200%]"
          style={{
            backgroundImage: caretSvg("rgba(255,255,255,0.5)"),
            backgroundSize: "14px 18px",
            backgroundRepeat: "repeat-y",
            backgroundPosition: "center top",
          }}
        />
      </motion.div>
    </div>
  );
}

function MilestoneRow({
  milestone,
  index,
  total,
  sectionRef,
}: {
  milestone: (typeof milestones)[number];
  index: number;
  total: number;
  sectionRef: React.RefObject<HTMLDivElement | null>;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start 0.85", "start 0.4"],
  });

  // Overlay slides away (translateY from 0% to -100%) as scroll reveals this row
  const overlayY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div ref={rowRef} className="relative overflow-hidden" style={{ paddingTop: 48, paddingBottom: 48 }}>
      {/* White overlay that slides away — Hajster's reveal mechanic */}
      <motion.div
        className="absolute inset-0 bg-black z-10 pointer-events-none"
        style={{ y: overlayY, opacity: 0.85 }}
      />

      {/* Content */}
      <div className="flex gap-8 md:gap-12 items-start">
        {/* Year column */}
        <div className="shrink-0" style={{ width: 200 }}>
          <span className="text-[18px] font-medium text-white/40 block mb-1">
            {milestone.label}
          </span>
          <span className="font-medium leading-[1.0] text-white block" style={{ fontSize: 70 }}>
            {milestone.year}
          </span>
        </div>

        {/* Event text */}
        <div className="flex-1 pt-6" style={{ maxWidth: 400 }}>
          <p className="text-[18px] font-medium leading-[1.4] text-white/70">
            {milestone.event}
          </p>
        </div>

      </div>
    </div>
  );
}
