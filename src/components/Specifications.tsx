"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const machines = [
  { label: "Orient Jet C-Series", subtitle: "Commercial Digital Inkjet", img: "/images/spec-jet-c.jpg" },
  { label: "Orient Jet L&P Series", subtitle: "Label & Packaging Inkjet", img: "/images/spec-jet-lp.jpg" },
  { label: "Orient Offset", subtitle: "Web Offset Press Range", img: "/images/spec-offset.jpg" },
  { label: "Orient X-Press Flex", subtitle: "Flexographic Press Range", img: "/images/spec-flex.jpg" },
] as const;

const specs = [
  { label: "Type", values: ["Digital Inkjet (Duplex)", "Digital Inkjet (Simplex)", "Web Offset", "Flexographic"] },
  { label: "Application", values: ["Book, Commercial, Newspaper", "Labels, Flexible Packaging", "Newspaper, Book, Commercial", "Labels, Films, Flexible Packaging"] },
  { label: "Print Head / Plate", values: ["Kyocera RC / Katana / Epson D / I / S", "Kyocera Katana / Epson D", "CTP Plates", "Photopolymer Plates"] },
  { label: "Resolution", values: ["600 / 1200 dpi", "600 / 1200 dpi", "Industry standard offset", "Up to 4800 dpi screening"] },
  { label: "Max Print Width", values: ["1080 mm (324–1080 mm)", "1080 mm (324–1080 mm)", "Up to 1400 mm", "330–1500 mm (narrow / mid / wide)"] },
  { label: "Print Speed", values: ["Up to 100 m/min", "Up to 80 m/min", "Up to 50,000 cph (X-Press)", "Up to 250 m/min"] },
  { label: "Colours", values: ["Up to 4 (CMYK)", "Up to 4, expandable", "4 colours both sides", "Up to 10 colours"] },
  { label: "Media Support", values: ["Coated & Uncoated, 40–240 g/m²", "Coated & Uncoated, 40–240 g/m²", "Newsprint to coated stock", "Films, foils, paper, board"] },
  { label: "Ink System", values: ["Orientjet IDS · Aqueous-based", "Orientjet IDS · Aqueous-based", "Conventional offset inks", "UV / Water-based / Solvent"] },
  { label: "Models", values: ["Orient Jet C-Series", "Orient Jet L&P Series", "Standard · Super · X-Cel · X-Press · XLC", "Narrow · Mid · Wide Web"] },
  { label: "Finishing", values: ["In-Line Sheeter · Folder", "In-Line Sheeter · Folder", "Folders · Stackers", "Die-cutting · Lamination · Slitting"] },
];

type ChatMsg = { role: "user" | "assistant"; content: string };

const chatSuggestions = [
  "What is the max print width?",
  "C-Series vs L&P Series differences?",
  "What print heads are available?",
  "Tell me about the ink system",
  "What media weights are supported?",
  "Is duplex printing available?",
];

export default function Specifications() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeMachine, setActiveMachine] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarDropdownOpen, setSidebarDropdownOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isChatMode, setIsChatMode] = useState(false);

  // Default to chat on mobile after hydration
  useEffect(() => {
    if (window.innerWidth < 768) setIsChatMode(true);
  }, []);

  // Chat state
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMsg[]>([]);
  const [chatStreaming, setChatStreaming] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatScrollRef.current) chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
  }, [chatMessages]);

  async function sendChat(text?: string) {
    const msg = text || chatInput.trim();
    if (!msg || chatStreaming) return;
    const userMsg: ChatMsg = { role: "user", content: msg };
    const updated = [...chatMessages, userMsg];
    setChatMessages(updated);
    setChatInput("");
    setChatStreaming(true);
    setChatMessages((prev) => [...prev, { role: "assistant", content: "" }]);
    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: updated }) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const reader = res.body?.getReader();
      if (!reader) throw new Error("No reader");
      const decoder = new TextDecoder();
      let accumulated = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        const t = accumulated;
        setChatMessages((prev) => { const copy = [...prev]; copy[copy.length - 1] = { role: "assistant", content: t }; return copy; });
      }
    } catch {
      setChatMessages((prev) => { const copy = [...prev]; copy[copy.length - 1] = { role: "assistant", content: "Sorry, I'm unable to respond right now." }; return copy; });
    }
    setChatStreaming(false);
  }

  return (
    <section ref={ref} style={{ marginTop: 160, marginBottom: 160 }}>
      <div className="container-site">
        {/* Header: title left, machine dropdown right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-medium leading-[1.1] text-near-black"
            style={{ fontSize: "clamp(28px, 3.2vw, 50px)" }}
          >
            Technical Specifications
          </motion.h2>

          {/* Machine dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex flex-col md:flex-row md:items-center gap-0.5 md:gap-2 w-full md:w-auto text-left px-5 py-3 bg-black/[0.04] border border-black/[0.12] rounded-xl text-sm text-near-black hover:bg-black/[0.08] hover:border-black/[0.2] transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="font-medium md:font-normal">{machines[activeMachine].label}</span>
                <span className="hidden md:inline text-near-black/25">·</span>
                <span className="hidden md:inline text-near-black/40">{machines[activeMachine].subtitle}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-auto md:ml-1"><path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
              </div>
              <span className="md:hidden text-xs text-near-black/40">{machines[activeMachine].subtitle}</span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 bg-[#f5f5f4] border border-black/[0.08] rounded-xl overflow-hidden z-20 min-w-[300px]">
                {machines.map((m, i) => (
                  <button
                    key={i}
                    onClick={() => { setActiveMachine(i); setDropdownOpen(false); }}
                    className={`w-full text-left px-5 py-3 transition-colors ${activeMachine === i ? "bg-black/[0.06] text-near-black" : "text-near-black/50 hover:bg-black/[0.03]"}`}
                  >
                    <span className="text-sm block">{m.label}</span>
                    <span className="text-xs text-near-black/40">{m.subtitle}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left sidebar — dropdown + action buttons */}
          <div className="lg:w-[240px] shrink-0 flex flex-col">
            {/* Machine dropdown — duplicated at top of sidebar */}
            <div className="hidden lg:block relative mb-4">
              <button
                onClick={() => setSidebarDropdownOpen(!sidebarDropdownOpen)}
                className="flex flex-col gap-0.5 w-full px-4 py-3 bg-black/[0.04] border border-black/[0.12] rounded-xl text-left hover:bg-black/[0.08] hover:border-black/[0.2] transition-colors"
              >
                <span className="text-sm font-medium text-near-black">{machines[activeMachine].label}</span>
                <span className="text-xs text-near-black/40">{machines[activeMachine].subtitle}</span>
              </button>
              {sidebarDropdownOpen && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-[#f5f5f4] border border-black/[0.08] rounded-xl overflow-hidden z-20">
                  {machines.map((m, i) => (
                    <button
                      key={i}
                      onClick={() => { setActiveMachine(i); setSidebarDropdownOpen(false); }}
                      className={`w-full text-left px-4 py-3 transition-colors ${activeMachine === i ? "bg-black/[0.06] text-near-black" : "text-near-black/50 hover:bg-black/[0.03]"}`}
                    >
                      <span className="text-sm block">{m.label}</span>
                      <span className="text-xs text-near-black/40">{m.subtitle}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Spacer pushes buttons to bottom */}
            <div className="flex-1" />

            {/* Action buttons — Chat tab sits right above Download Catalog */}
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setIsChatMode(!isChatMode)}
                className="relative btn text-sm h-[42px] w-full justify-center rounded-xl overflow-hidden text-white"
                style={{ background: "linear-gradient(135deg, #5c0a0a 0%, #8b1a1a 18%, #a11d1d 35%, #c62828 55%, #b06060 78%, #c4b0b0 95%)", border: "none" }}
              >
                <span className="relative z-10">{isChatMode ? "Back to Specs" : "Chat with Orient AI"}</span>
              </button>
              <a href="/contact" className="btn btn-cream text-sm h-[42px] w-full justify-center rounded-xl">Request Quote</a>
              <a href="/downloads" className="flex items-center gap-1.5 text-sm text-near-black/40 hover:text-near-black/70 transition-colors justify-center mt-1">
                Download Catalog
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>

          {/* Right — fixed height container for specs or chat */}
          <div className="flex-1 min-w-0 min-h-[400px] lg:h-[560px]">
            {!isChatMode ? (
              /* Specs: table + image */
              <div className="flex gap-6 h-full">
                <div className="flex-1 min-w-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {specs.map((row, i) => (
                    <div key={row.label} className={`flex min-w-[480px] ${i % 2 === 0 ? "bg-black/[0.02]" : ""}`}>
                      <div className="w-[120px] md:w-[200px] shrink-0 px-3 md:px-5 py-4 border-r border-black/[0.06]">
                        <span className="text-[13px] text-near-black/40">{row.label}</span>
                      </div>
                      <div className="flex-1 px-5 py-4">
                        <span className="text-[14px] text-near-black/75">{row.values[activeMachine]}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="hidden xl:block w-[45%] shrink-0 relative">
                  <img
                    key={machines[activeMachine].img}
                    src={machines[activeMachine].img}
                    alt={machines[activeMachine].label}
                    className="w-full h-auto rounded-xl"
                  />
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm border border-black/10 rounded-lg hover:bg-white shadow-sm transition-colors"
                    aria-label="View full size"
                    title="View full size"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C1B1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              /* Chat */
              <div className="flex flex-col h-full">
                {chatMessages.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center px-4">
                    <h3 className="text-3xl font-medium text-near-black mb-10 text-center">What can we help you with?</h3>
                    <div className="w-full max-w-2xl mb-8">
                      <form onSubmit={(e) => { e.preventDefault(); sendChat(); }} className="relative">
                        <textarea value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendChat(); } }} placeholder="Ask about Orient Jet presses..." rows={3} disabled={chatStreaming} className="w-full px-6 py-5 pr-16 bg-[#f5f5f4] border border-black/[0.15] rounded-2xl shadow-sm text-lg text-near-black placeholder:text-black/25 outline-none resize-none disabled:opacity-50 focus:border-black/[0.12] transition-colors" />
                        <button type="submit" disabled={chatStreaming || !chatInput.trim()} className="absolute bottom-4 right-4 w-10 h-10 bg-black/[0.1] hover:bg-black/[0.18] rounded-xl flex items-center justify-center disabled:opacity-20 transition-all">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 14V2M8 2L3 7M8 2L13 7" stroke="#1C1B1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                      </form>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {chatSuggestions.map((s) => (
                        <button key={s} onClick={() => sendChat(s)} className="text-sm text-near-black/40 hover:text-near-black/70 px-4 py-2.5 rounded-full border border-black/[0.08] hover:bg-black/[0.04] transition-colors">{s}</button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <div ref={chatScrollRef} className="flex-1 overflow-y-auto min-h-0">
                      <div className="space-y-8 py-4 w-full">
                        {chatMessages.map((msg, i) => (
                          <div key={i}>
                            {msg.role === "user" ? (
                              <div className="flex justify-end"><div className="text-lg leading-relaxed text-near-black/90 bg-[#dddddc] px-5 py-3.5 rounded-2xl max-w-lg">{msg.content}</div></div>
                            ) : (
                              <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-lg bg-black/[0.06] flex items-center justify-center shrink-0 mt-1"><span className="text-near-black/40 font-semibold text-xs">O</span></div>
                                <div className="text-base leading-relaxed text-near-black/75 flex-1 max-w-2xl prose prose-sm prose-neutral [&_table]:w-full [&_table]:text-sm [&_th]:text-left [&_th]:font-medium [&_th]:text-near-black/60 [&_th]:pb-2 [&_th]:border-b [&_th]:border-black/10 [&_td]:py-1.5 [&_td]:pr-4 [&_td]:border-b [&_td]:border-black/[0.04] [&_strong]:text-near-black/80 [&_ul]:space-y-1 [&_ol]:space-y-1 [&_li]:text-near-black/65 [&_p]:mb-3 [&_p:last-child]:mb-0">
                                  {msg.content ? (
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>
                                  ) : (
                                    <span className="inline-flex gap-1.5 py-2"><span className="w-2 h-2 bg-black/15 rounded-full animate-pulse" /><span className="w-2 h-2 bg-black/15 rounded-full animate-pulse" style={{ animationDelay: "150ms" }} /><span className="w-2 h-2 bg-black/15 rounded-full animate-pulse" style={{ animationDelay: "300ms" }} /></span>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="shrink-0 pt-4 w-full">
                      <form onSubmit={(e) => { e.preventDefault(); sendChat(); }} className="relative">
                        <textarea value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendChat(); } }} placeholder="Ask a follow-up..." rows={2} disabled={chatStreaming} className="w-full px-6 py-4 pr-16 bg-[#f5f5f4] border border-black/[0.15] rounded-2xl shadow-sm text-lg text-near-black placeholder:text-black/25 outline-none resize-none disabled:opacity-50 focus:border-black/[0.12] transition-colors" />
                        <button type="submit" disabled={chatStreaming || !chatInput.trim()} className="absolute bottom-4 right-4 w-10 h-10 bg-black/[0.1] hover:bg-black/[0.18] rounded-xl flex items-center justify-center disabled:opacity-20 transition-all">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 14V2M8 2L3 7M8 2L13 7" stroke="#1C1B1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                      </form>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-white transition-colors"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <img
            src={machines[activeMachine].img}
            alt={machines[activeMachine].label}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
