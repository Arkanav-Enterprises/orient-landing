"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What industries does TPH Orient serve?",
    answer:
      "Orient supplies machinery to newspaper printers, commercial print houses, book publishers, flexible packaging converters, label manufacturers, and carton producers. Our equipment serves any industry requiring high-volume, precision printing or converting.",
  },
  {
    question: "Do you offer international servicing?",
    answer:
      "Yes. Orient has dedicated agents and service teams in over 60 countries. We provide on-site installation, operator training, annual maintenance contracts (AMC), and spare parts delivery worldwide.",
  },
  {
    question: "What makes Orient presses 'quality conscious'?",
    answer:
      "Every Orient machine is built at our 20-acre manufacturing campus using in-house engineering, rigorous quality checks, and decades of design refinement. We control the entire process from casting and machining to assembly and testing.",
  },
  {
    question: "What types of presses does Orient manufacture?",
    answer:
      "Orient produces web offset presses, sheetfed offset presses, flexographic presses, digital inkjet presses, and a full range of converting and finishing equipment including folders, sheeters, and slitter-rewinders.",
  },
  {
    question: "How do I request a quote or schedule a demo?",
    answer:
      "Use the contact form below or email tphho@tphorient.com. Our team will respond within 48 hours with a tailored proposal based on your production requirements.",
  },
  {
    question: "Does Orient provide financing options?",
    answer:
      "Yes. Orient offers financial support and flexible payment structures to help production facilities of all sizes invest in new equipment. Contact our sales team for details.",
  },
];

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);


  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ marginTop: 160, marginBottom: 160 }}
    >
      <div className="container-site relative">
        <div className="mx-auto" style={{ maxWidth: 720 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-medium leading-[1.1] text-near-black text-center mb-16"
            style={{ fontSize: "clamp(28px, 3.2vw, 50px)" }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="border-b border-black/[0.06]"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 text-left cursor-pointer"
                    style={{ padding: "28px 0" }}
                  >
                    <span className="text-[20px] font-medium text-near-black leading-[1.3]">
                      {faq.question}
                    </span>
                    <span
                      className="text-near-black/30 text-[24px] leading-none shrink-0 transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p
                          className="text-[17px] font-normal text-near-black/50 leading-[1.6]"
                          style={{ paddingBottom: 28 }}
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
