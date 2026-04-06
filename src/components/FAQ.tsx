"use client";

import { useRef, useState, useEffect } from "react";
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

  useEffect(() => {
    const el = document.querySelector('.blueprint-bg');
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animate');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ marginTop: 160, marginBottom: 160 }}
    >
      {/* Animated blueprint background */}
      <div
        className="blueprint-bg absolute pointer-events-none hidden md:flex items-center justify-end"
        style={{ top: 0, bottom: 0, right: "5%", opacity: 0.18, height: "100%", width: "auto", zIndex: 0 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 740" style={{ height: "70%", width: "auto" }}>
          <style>{`
            .frame { fill: none; stroke: #1a1a1a; stroke-width: 1.2; stroke-linecap: round; stroke-linejoin: round; }
            .frame-thin { fill: none; stroke: #1a1a1a; stroke-width: 0.6; stroke-linecap: round; stroke-linejoin: round; }
            .frame-accent { fill: none; stroke: #de2127; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }
            .bp-panel { fill: rgba(26,26,26,0.03); stroke: #1a1a1a; stroke-width: 1; }
            .bp-component { fill: rgba(26,26,26,0.06); stroke: #1a1a1a; stroke-width: 1; stroke-linecap: round; }
            .bp-detail { fill: none; stroke: #1a1a1a; stroke-width: 0.5; }
            .accent-fill { fill: #de2127; stroke: none; }

            .animate .draw-1 { stroke-dasharray: 2000; stroke-dashoffset: 2000; animation: drawIn 1.8s ease-out 0.1s forwards; }
            .animate .draw-2 { stroke-dasharray: 1800; stroke-dashoffset: 1800; animation: drawIn 1.6s ease-out 0.4s forwards; }
            .animate .draw-3 { stroke-dasharray: 1600; stroke-dashoffset: 1600; animation: drawIn 1.4s ease-out 0.7s forwards; }
            .animate .draw-4 { stroke-dasharray: 1400; stroke-dashoffset: 1400; animation: drawIn 1.2s ease-out 1.0s forwards; }
            .animate .draw-5 { stroke-dasharray: 1200; stroke-dashoffset: 1200; animation: drawIn 1.2s ease-out 1.3s forwards; }
            .animate .draw-6 { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: drawIn 1.0s ease-out 1.6s forwards; }
            .animate .draw-7 { stroke-dasharray: 800; stroke-dashoffset: 800; animation: drawIn 1.0s ease-out 1.9s forwards; }
            .animate .draw-8 { stroke-dasharray: 600; stroke-dashoffset: 600; animation: drawIn 0.8s ease-out 2.2s forwards; }

            .animate .fade-1 { opacity: 0; animation: fadeIn 0.8s ease-out 2.5s forwards; }
            .animate .fade-2 { opacity: 0; animation: fadeIn 0.8s ease-out 2.8s forwards; }
            .animate .fade-3 { opacity: 0; animation: fadeIn 0.8s ease-out 3.1s forwards; }

            .animate .pulse { animation: subtlePulse 3s ease-in-out 3.5s infinite; }
            .animate .bp-float { animation: floatUp 6s ease-in-out 3.5s infinite; }

            .draw-1, .draw-2, .draw-3, .draw-4, .draw-5, .draw-6, .draw-7, .draw-8 {
              stroke-dasharray: 2000; stroke-dashoffset: 2000;
            }
            .fade-1, .fade-2, .fade-3 { opacity: 0; }

            @keyframes drawIn { to { stroke-dashoffset: 0; opacity: 1; } }
            @keyframes fadeIn { to { opacity: 1; } }
            @keyframes subtlePulse { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }
            @keyframes floatUp { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-4px); } }
          `}</style>

          <g className="bp-float">
            <rect x="60" y="40" width="480" height="620" rx="8" className="frame draw-1"/>
            <rect x="80" y="30" width="440" height="60" rx="6" className="frame draw-1"/>
            <line x1="90" y1="35" x2="510" y2="35" className="frame-thin draw-1"/>
            <line x1="85" y1="85" x2="515" y2="85" className="frame-thin draw-1"/>

            <rect x="95" y="100" width="410" height="520" rx="5" className="frame draw-2"/>
            <line x1="110" y1="105" x2="110" y2="615" className="frame-thin draw-2"/>
            <line x1="118" y1="105" x2="118" y2="615" className="frame-thin draw-2"/>
            <line x1="490" y1="105" x2="490" y2="615" className="frame-thin draw-2"/>
            <line x1="482" y1="105" x2="482" y2="615" className="frame-thin draw-2"/>

            <rect x="135" y="130" width="330" height="440" rx="4" className="frame draw-3"/>
            <line x1="135" y1="155" x2="465" y2="155" className="frame draw-3"/>
            <line x1="145" y1="145" x2="455" y2="145" className="frame-thin draw-3"/>

            <rect x="165" y="175" width="270" height="360" rx="3" className="frame draw-4"/>
            <line x1="170" y1="220" x2="430" y2="220" className="frame-thin draw-4"/>
            <line x1="170" y1="440" x2="430" y2="440" className="frame-thin draw-4"/>

            <rect x="200" y="245" width="200" height="175" rx="3" className="frame-accent draw-5"/>
            <rect x="230" y="280" width="140" height="50" rx="25" className="bp-panel draw-6"/>
            <line x1="220" y1="305" x2="380" y2="305" className="bp-detail draw-6" strokeDasharray="4,3"/>
            <rect x="270" y="340" width="60" height="30" rx="3" className="bp-component draw-6"/>
            <line x1="285" y1="345" x2="315" y2="345" className="bp-detail draw-7"/>
            <line x1="285" y1="355" x2="315" y2="355" className="bp-detail draw-7"/>
            <rect x="290" y="360" width="20" height="8" rx="2" className="accent-fill fade-1"/>

            <rect x="170" y="260" width="22" height="100" rx="2" className="bp-component draw-5"/>
            <line x1="181" y1="265" x2="181" y2="355" className="bp-detail draw-6"/>
            <circle cx="181" cy="280" r="5" className="bp-component draw-7"/>
            <circle cx="181" cy="340" r="5" className="bp-component draw-7"/>
            <rect x="408" y="260" width="22" height="100" rx="2" className="bp-component draw-5"/>
            <line x1="419" y1="265" x2="419" y2="355" className="bp-detail draw-6"/>
            <circle cx="419" cy="280" r="5" className="bp-component draw-7"/>
            <circle cx="419" cy="340" r="5" className="bp-component draw-7"/>

            <rect x="145" y="460" width="80" height="90" rx="3" className="bp-panel draw-5"/>
            <rect x="155" y="470" width="60" height="35" rx="2" className="bp-component draw-6"/>
            <rect x="158" y="515" width="14" height="10" rx="2" className="bp-component draw-7"/>
            <rect x="178" y="515" width="14" height="10" rx="2" className="bp-component draw-7"/>
            <rect x="198" y="515" width="14" height="10" rx="2" className="bp-component draw-7"/>
            <circle cx="185" cy="540" r="4" className="accent-fill fade-2 pulse"/>

            <rect x="375" y="460" width="80" height="90" rx="3" className="bp-panel draw-5"/>
            <rect x="385" y="470" width="60" height="35" rx="2" className="bp-component draw-6"/>
            <rect x="390" y="515" width="45" height="8" rx="2" className="bp-component draw-7"/>
            <rect x="390" y="530" width="30" height="8" rx="2" className="bp-component draw-7"/>

            <path d="M 181 360 L 181 440 L 230 440 L 230 420" className="bp-detail draw-7" strokeDasharray="3,4"/>
            <path d="M 419 360 L 419 440 L 370 440 L 370 420" className="bp-detail draw-7" strokeDasharray="3,4"/>
            <path d="M 300 370 L 300 435" className="bp-detail draw-7" strokeDasharray="3,4"/>

            <line x1="130" y1="160" x2="130" y2="560" className="frame-thin draw-3"/>
            <line x1="470" y1="160" x2="470" y2="560" className="frame-thin draw-3"/>

            <rect x="145" y="575" width="310" height="35" rx="3" className="bp-panel draw-4"/>
            <line x1="155" y1="592" x2="445" y2="592" className="bp-detail draw-5"/>
            <rect x="255" y="600" width="90" height="12" rx="3" className="bp-component draw-6"/>
            <rect x="275" y="603" width="50" height="6" rx="2" className="accent-fill fade-3"/>

            <path d="M 68 50 L 68 70" className="frame-thin draw-2"/>
            <path d="M 68 50 L 88 50" className="frame-thin draw-2"/>
            <path d="M 532 50 L 532 70" className="frame-thin draw-2"/>
            <path d="M 532 50 L 512 50" className="frame-thin draw-2"/>
            <path d="M 68 650 L 68 630" className="frame-thin draw-2"/>
            <path d="M 68 650 L 88 650" className="frame-thin draw-2"/>
            <path d="M 532 650 L 532 630" className="frame-thin draw-2"/>
            <path d="M 532 650 L 512 650" className="frame-thin draw-2"/>

            <line x1="55" y1="100" x2="55" y2="620" stroke="#999" strokeWidth="0.4" strokeDasharray="2,4" className="fade-1"/>
            <line x1="545" y1="100" x2="545" y2="620" stroke="#999" strokeWidth="0.4" strokeDasharray="2,4" className="fade-1"/>
            <line x1="95" y1="670" x2="505" y2="670" stroke="#999" strokeWidth="0.4" strokeDasharray="2,4" className="fade-2"/>
            <line x1="52" y1="100" x2="58" y2="100" stroke="#999" strokeWidth="0.5" className="fade-1"/>
            <line x1="52" y1="620" x2="58" y2="620" stroke="#999" strokeWidth="0.5" className="fade-1"/>
            <line x1="95" y1="667" x2="95" y2="673" stroke="#999" strokeWidth="0.5" className="fade-2"/>
            <line x1="505" y1="667" x2="505" y2="673" stroke="#999" strokeWidth="0.5" className="fade-2"/>

            <g stroke="#de2127" strokeWidth="0.6" className="fade-3">
              <line x1="295" y1="95" x2="305" y2="95"/>
              <line x1="300" y1="90" x2="300" y2="100"/>
              <line x1="295" y1="625" x2="305" y2="625"/>
              <line x1="300" y1="620" x2="300" y2="630"/>
              <line x1="60" y1="345" x2="70" y2="345"/>
              <line x1="65" y1="340" x2="65" y2="350"/>
              <line x1="530" y1="345" x2="540" y2="345"/>
              <line x1="535" y1="340" x2="535" y2="350"/>
            </g>
          </g>
        </svg>
      </div>

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
