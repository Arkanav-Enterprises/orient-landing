"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = { role: "user" | "assistant"; content: string };

const suggestions = [
  "What is the max print width?",
  "C-Series vs L&P Series?",
  "What print heads are available?",
  "Tell me about the ink system",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [streaming, setStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  async function send(text?: string) {
    const msg = text || input.trim();
    if (!msg || streaming) return;

    const userMsg: Message = { role: "user", content: msg };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setStreaming(true);

    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No reader");

      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        const t = accumulated;
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: "assistant", content: t };
          return copy;
        });
      }
    } catch {
      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = {
          role: "assistant",
          content: "I'm sorry, I'm unable to answer you at the moment. Please contact our sales team at tphho@tphorient.com.",
        };
        return copy;
      });
    }

    setStreaming(false);
  }

  return (
    <>
      {/* Floating trigger button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={() => setOpen(true)}
            className="fixed z-50 bg-orient-red text-white flex items-center gap-3 shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-transform"
            style={{ bottom: 32, right: 32, padding: "16px 24px", borderRadius: 12 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
            <span className="text-[15px] font-semibold">Ask About Our Machines</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel — much larger, more premium */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed z-50 flex flex-col overflow-hidden"
            style={{
              bottom: 32,
              right: 32,
              width: 460,
              maxWidth: "calc(100vw - 2rem)",
              height: "min(640px, calc(100vh - 4rem))",
              background: "#f5f5f4",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: 16,
              boxShadow: "0 24px 80px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.04)",
            }}
          >
            {/* Header */}
            <div
              className="shrink-0 flex items-center justify-between"
              style={{ padding: "20px 24px", background: "#de2127", borderRadius: "16px 16px 0 0" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="#fff" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
                <div>
                  <span className="text-[16px] font-semibold text-white block leading-tight">Orient Jet Specialist</span>
                  <span className="text-[12px] font-medium text-white/60">Powered by AI · Always available</span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M4 4L14 14M14 4L4 14" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto" style={{ padding: 24 }}>
              {messages.length === 0 && (
                <div className="py-4">
                  <div className="bg-[#dddddc] rounded-xl p-6 mb-6" style={{ border: "1px solid rgba(0,0,0,0.04)" }}>
                    <p className="text-[15px] font-medium text-near-black/50 leading-[1.5] mb-1">
                      Hi! I can answer questions about Orient Jet C-Series and L&P Series digital presses — specs, configurations, and more.
                    </p>
                  </div>

                  <p className="text-[12px] font-semibold text-near-black/30 uppercase tracking-wider mb-3">Try asking</p>
                  <div className="grid grid-cols-2 gap-2">
                    {suggestions.map((s) => (
                      <button
                        key={s}
                        onClick={() => { setInput(s); }}
                        className="text-left text-[13px] font-medium text-near-black/40 hover:text-near-black/70 p-3 bg-[#f5f5f4] hover:bg-[#dddddc] rounded-lg transition-colors"
                        style={{ border: "1px solid rgba(0,0,0,0.06)" }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className="text-[14px] font-medium leading-[1.6]"
                      style={{
                        maxWidth: "85%",
                        padding: "12px 16px",
                        borderRadius: msg.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                        background: msg.role === "user" ? "#de2127" : "#dddddc",
                        color: msg.role === "user" ? "#fff" : "rgba(28,27,29,0.8)",
                        border: msg.role === "user" ? "none" : "1px solid rgba(0,0,0,0.04)",
                      }}
                    >
                      {msg.content || (
                        <span className="inline-flex gap-1.5 py-1">
                          <span className="w-2 h-2 bg-black/20 rounded-full animate-pulse" />
                          <span className="w-2 h-2 bg-black/20 rounded-full animate-pulse" style={{ animationDelay: "0.15s" }} />
                          <span className="w-2 h-2 bg-black/20 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input area */}
            <div className="shrink-0" style={{ padding: "16px 24px 20px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
              <form onSubmit={(e) => { e.preventDefault(); send(); }} className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  disabled={streaming}
                  className="flex-1 h-[48px] px-4 bg-[#dddddc] border border-black/6 rounded-xl text-[15px] font-medium text-near-black placeholder:text-black/25 outline-none focus:border-black/15 transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={streaming || !input.trim()}
                  className="w-[48px] h-[48px] bg-orient-red rounded-xl flex items-center justify-center shrink-0 disabled:opacity-30 hover:bg-orient-red/85 transition-all"
                >
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
