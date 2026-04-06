"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ScrollRevealText({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.2"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={containerRef}
      className="font-medium leading-[1.35] text-white"
      style={{ fontSize: "clamp(22px, 2vw, 30px)" }}
    >
      {words.map((word, i) => (
        <RevealWord
          key={`${word}-${i}`}
          word={word}
          index={i}
          total={words.length}
          scrollProgress={scrollYProgress}
        />
      ))}
    </p>
  );
}

function RevealWord({
  word,
  index,
  total,
  scrollProgress,
}: {
  word: string;
  index: number;
  total: number;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  // Each word reveals over a small range of the total scroll
  const wordStart = index / total;
  const wordEnd = Math.min((index + 3) / total, 1);

  const opacity = useTransform(scrollProgress, [wordStart, wordEnd], [0.12, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.3em]">
      {word}
    </motion.span>
  );
}
