"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductGallery from "./ProductGallery";

export type ProductSpec = { label: string; value: string };
export type SpecComparison = {
  columns: string[];
  rows: { label: string; values: string[] }[];
};

type ChatMsg = { role: "user" | "assistant"; content: string };

export default function ProductPage({
  name,
  category,
  description,
  speed,
  features,
  specs,
  specComparison,
  configurations,
  images,
  galleryVideo,
  galleryVideoPoster,
  bannerImage,
  bannerVideo,
  videoId,
  videoFile,
  pairBannerWithVideo,
  pairedLeftVideo,
}: {
  name: string;
  category: string;
  description: string;
  speed?: string;
  features: string[];
  specs: ProductSpec[];
  specComparison?: SpecComparison;
  configurations?: string[];
  images?: string[];
  galleryVideo?: string;
  galleryVideoPoster?: string;
  bannerImage?: string;
  bannerVideo?: string;
  videoId?: string;
  videoFile?: string;
  pairBannerWithVideo?: boolean;
  pairedLeftVideo?: string;
}) {
  // Paired bottom layout: 2-column with bannerImage (or pairedLeftVideo) on the left
  // and videoFile/videoId on the right. When pairedLeftVideo is set, bannerImage
  // renders standalone full-width above instead of being consumed by the pair.
  const bottomVideo = videoFile || videoId;
  const pairedLeftIsVideo = !!pairedLeftVideo;
  const isPaired = !!(pairBannerWithVideo && (bannerImage || pairedLeftVideo) && bottomVideo);
  const bannerImageConsumedByPair = isPaired && !pairedLeftIsVideo;
  const [isChatMode, setIsChatMode] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMsg[]>([]);
  const [chatStreaming, setChatStreaming] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // Sticky bar only appears after inline CTAs scroll out of view
  const inlineCtaRef = useRef<HTMLDivElement>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    if (chatScrollRef.current) chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
  }, [chatMessages]);

  useEffect(() => {
    const el = inlineCtaRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyBar(!entry.isIntersecting),
      { rootMargin: "0px 0px -20px 0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isChatMode]);

  const chatSuggestions = [
    `What is ${name}'s max speed?`,
    `What configurations are available?`,
    `What are the key features?`,
    `Is ${name} right for my production?`,
  ];

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
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated, product: name }),
      });
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
        setChatMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: "assistant", content: t };
          return copy;
        });
      }
    } catch {
      setChatMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = { role: "assistant", content: "I'm sorry, I'm unable to answer you at the moment. Please contact our sales team at tphho@tphorient.com." };
        return copy;
      });
    }
    setChatStreaming(false);
  }

  function enterChat() {
    setIsChatMode(true);
    setChatMessages([]);
  }

  return (
    <main>
      <Navbar />

      {/* Compact page header */}
      <section style={{ paddingTop: 80 + 40, paddingBottom: 32 }}>
        <div className="container-site">
          <h1
            className="font-medium leading-[1.05] text-near-black mb-2"
            style={{ fontSize: "clamp(32px, 3.4vw, 52px)" }}
          >
            {name}
          </h1>
          <p className="text-[16px] font-medium text-near-black/50">{category}</p>
        </div>
      </section>

      {isChatMode ? (
        /* ── Chat mode — replaces all PDP content ── */
        <section style={{ paddingBottom: 120 }}>
          <div className="container-site">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left sidebar — back button + CTAs */}
              <div className="lg:w-[240px] shrink-0 flex flex-col">
                <div className="flex-1" />
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => setIsChatMode(false)}
                    className="relative btn text-sm h-[42px] w-full justify-center rounded-xl overflow-hidden text-white"
                    style={{
                      background: "linear-gradient(135deg, #5c0a0a 0%, #8b1a1a 18%, #a11d1d 35%, #c62828 55%, #b06060 78%, #c4b0b0 95%)",
                      border: "none",
                    }}
                  >
                    <span className="relative z-10">Back to Specs</span>
                  </button>
                  <Link href="/contact" className="btn btn-cream text-sm h-[42px] w-full justify-center rounded-xl">
                    Request Quote
                  </Link>
                  <Link
                    href="/downloads"
                    className="flex items-center gap-1.5 text-sm text-near-black/40 hover:text-near-black/70 transition-colors justify-center mt-1"
                  >
                    Download Catalog
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right — chat */}
              <div className="flex-1 min-w-0 min-h-[400px] lg:h-[620px]">
                <div className="flex flex-col h-full">
                  {chatMessages.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center px-4">
                      <h3 className="text-3xl font-medium text-near-black mb-2 text-center">
                        Ask Orient AI about {name}
                      </h3>
                      <p className="text-sm text-near-black/40 mb-10 text-center">
                        Scoped to this machine only
                      </p>
                      <div className="w-full max-w-2xl mb-8">
                        <form onSubmit={(e) => { e.preventDefault(); sendChat(); }} className="relative">
                          <textarea
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                sendChat();
                              }
                            }}
                            placeholder={`Ask about ${name}...`}
                            rows={3}
                            disabled={chatStreaming}
                            className="w-full px-6 py-5 pr-16 bg-[#f5f5f4] border border-black/[0.15] rounded-2xl shadow-sm text-lg text-near-black placeholder:text-black/25 outline-none resize-none disabled:opacity-50 focus:border-black/[0.12] transition-colors"
                          />
                          <button
                            type="submit"
                            disabled={chatStreaming || !chatInput.trim()}
                            className="absolute bottom-4 right-4 w-10 h-10 bg-black/[0.1] hover:bg-black/[0.18] rounded-xl flex items-center justify-center disabled:opacity-20 transition-all"
                          >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M8 14V2M8 2L3 7M8 2L13 7" stroke="#1C1B1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        </form>
                      </div>
                      <div className="flex flex-wrap justify-center gap-2">
                        {chatSuggestions.map((s) => (
                          <button
                            key={s}
                            onClick={() => sendChat(s)}
                            className="text-sm text-near-black/40 hover:text-near-black/70 px-4 py-2.5 rounded-full border border-black/[0.08] hover:bg-black/[0.04] transition-colors"
                          >
                            {s}
                          </button>
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
                                <div className="flex justify-end">
                                  <div className="text-lg leading-relaxed text-near-black/90 bg-[#dddddc] px-5 py-3.5 rounded-2xl max-w-lg">
                                    {msg.content}
                                  </div>
                                </div>
                              ) : (
                                <div className="flex gap-3">
                                  <div className="w-8 h-8 rounded-lg bg-black/[0.06] flex items-center justify-center shrink-0 mt-1">
                                    <span className="text-near-black/40 font-semibold text-xs">O</span>
                                  </div>
                                  <div className="text-base leading-relaxed text-near-black/75 flex-1 max-w-2xl prose prose-sm prose-neutral [&_table]:w-full [&_table]:text-sm [&_th]:text-left [&_th]:font-medium [&_th]:text-near-black/60 [&_th]:pb-2 [&_th]:border-b [&_th]:border-black/10 [&_td]:py-1.5 [&_td]:pr-4 [&_td]:border-b [&_td]:border-black/[0.04] [&_strong]:text-near-black/80 [&_ul]:space-y-1 [&_ol]:space-y-1 [&_li]:text-near-black/65 [&_p]:mb-3 [&_p:last-child]:mb-0">
                                    {msg.content ? (
                                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>
                                    ) : (
                                      <span className="inline-flex gap-1.5 py-2">
                                        <span className="w-2 h-2 bg-black/15 rounded-full animate-pulse" />
                                        <span className="w-2 h-2 bg-black/15 rounded-full animate-pulse" style={{ animationDelay: "150ms" }} />
                                        <span className="w-2 h-2 bg-black/15 rounded-full animate-pulse" style={{ animationDelay: "300ms" }} />
                                      </span>
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
                          <textarea
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                sendChat();
                              }
                            }}
                            placeholder="Ask a follow-up..."
                            rows={2}
                            disabled={chatStreaming}
                            className="w-full px-6 py-4 pr-16 bg-[#f5f5f4] border border-black/[0.15] rounded-2xl shadow-sm text-lg text-near-black placeholder:text-black/25 outline-none resize-none disabled:opacity-50 focus:border-black/[0.12] transition-colors"
                          />
                          <button
                            type="submit"
                            disabled={chatStreaming || !chatInput.trim()}
                            className="absolute bottom-4 right-4 w-10 h-10 bg-black/[0.1] hover:bg-black/[0.18] rounded-xl flex items-center justify-center disabled:opacity-20 transition-all"
                          >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M8 14V2M8 2L3 7M8 2L13 7" stroke="#1C1B1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        </form>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* ── Default mode — gallery + details + placeholders ── */}
          <section style={{ paddingBottom: 80 }}>
            <div className="container-site">
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Left — gallery + CTAs */}
                <div className="lg:w-[45%] shrink-0">
                  <ProductGallery
                    images={images}
                    video={galleryVideo}
                    videoPoster={galleryVideoPoster}
                    alt={name}
                  />

                  <div ref={inlineCtaRef} className="flex flex-col gap-3 mt-6">
                    <button
                      onClick={enterChat}
                      className="relative btn text-sm h-[42px] w-full justify-center rounded-xl overflow-hidden text-white"
                      style={{
                        background: "linear-gradient(135deg, #5c0a0a 0%, #8b1a1a 18%, #a11d1d 35%, #c62828 55%, #b06060 78%, #c4b0b0 95%)",
                        border: "none",
                      }}
                    >
                      <span className="relative z-10">Ask Orient AI</span>
                    </button>
                    <Link href="/contact" className="btn btn-cream text-sm h-[42px] w-full justify-center rounded-xl">
                      Request Quote
                    </Link>
                    <Link
                      href="/downloads"
                      className="flex items-center gap-1.5 text-sm text-near-black/40 hover:text-near-black/70 transition-colors justify-center mt-1"
                    >
                      Download Catalog
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Right — details */}
                <div className="flex-1">
                  <p className="text-[18px] font-medium text-near-black/60 leading-[1.5] mb-8">{description}</p>

                  {speed && (
                    <div className="mb-8 p-6 bg-[#f5f5f4] rounded-[6px]">
                      <span className="text-[14px] font-medium text-near-black/40 block mb-1">Maximum Speed</span>
                      <span className="text-[36px] font-medium text-near-black">{speed}</span>
                    </div>
                  )}

                  {configurations && configurations.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-[20px] font-medium text-near-black mb-4">Configurations</h3>
                      <div className="flex flex-wrap gap-2">
                        {configurations.map((c) => (
                          <span key={c} className="text-[14px] font-medium text-near-black/40 px-4 py-2 border border-black/10 rounded-[4px]">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <h3 className="text-[20px] font-medium text-near-black mb-4">Key Features</h3>
                  <ul className="space-y-3 mb-8">
                    {features.map((f) => (
                      <li key={f} className="text-[16px] font-medium text-near-black/50 flex gap-3">
                        <span className="text-near-black shrink-0">→</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {specComparison ? (
                    <>
                      <h3 className="text-[20px] font-medium text-near-black mb-4">Specifications</h3>
                      <div className="border border-black/8 rounded-[6px] overflow-hidden overflow-x-auto">
                        <div className="min-w-[480px]">
                          {/* Column headers */}
                          <div className="flex bg-black/[0.04]">
                            <div className="w-[140px] md:w-[180px] shrink-0 px-4 py-3">
                              <span className="text-[13px] font-medium text-near-black/40">&nbsp;</span>
                            </div>
                            {specComparison.columns.map((col) => (
                              <div key={col} className="flex-1 px-4 py-3">
                                <span className="text-[13px] font-semibold text-near-black uppercase tracking-wider">{col}</span>
                              </div>
                            ))}
                          </div>
                          {/* Rows */}
                          {specComparison.rows.map((row, i) => (
                            <div key={row.label} className={`flex ${i % 2 === 0 ? "bg-black/[0.02]" : ""}`}>
                              <div className="w-[140px] md:w-[180px] shrink-0 px-4 py-3">
                                <span className="text-[15px] font-medium text-near-black/40">{row.label}</span>
                              </div>
                              {row.values.map((val, j) => (
                                <div key={j} className="flex-1 px-4 py-3">
                                  <span className="text-[15px] font-medium text-near-black/70">{val}</span>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : specs.length > 0 ? (
                    <>
                      <h3 className="text-[20px] font-medium text-near-black mb-4">Specifications</h3>
                      <div className="border border-black/8 rounded-[6px] overflow-hidden">
                        {specs.map((s, i) => (
                          <div key={s.label} className={`flex justify-between p-4 ${i % 2 === 0 ? "bg-black/[0.02]" : ""}`}>
                            <span className="text-[15px] font-medium text-near-black/40">{s.label}</span>
                            <span className="text-[15px] font-medium text-near-black/70">{s.value}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </section>

          {/* Full-width banner — video takes precedence over image; image suppressed only when consumed by pair */}
          {(bannerVideo || (bannerImage && !bannerImageConsumedByPair)) && (
            <section style={{ paddingBottom: videoId || videoFile ? 24 : 120 }}>
              <div className="container-site">
                <div
                  className="relative bg-black rounded-[6px] overflow-hidden"
                  style={{ aspectRatio: "21 / 9" }}
                >
                  {bannerVideo ? (
                    <video
                      src={bannerVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={bannerImage!}
                      alt={`${name} banner`}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Paired bottom: bannerImage (or pairedLeftVideo) + video in a 2-column layout.
              When pairedLeftVideo is square, columns split 9fr/16fr so both halves match in height. */}
          {isPaired && (
            <section style={{ paddingBottom: 120 }}>
              <div className="container-site">
                <div className={`grid grid-cols-1 gap-4 ${pairedLeftIsVideo ? "lg:grid-cols-[9fr_16fr]" : "lg:grid-cols-2"}`}>
                  <div
                    className="relative bg-black rounded-[6px] overflow-hidden"
                    style={{ aspectRatio: pairedLeftIsVideo ? "1 / 1" : "16 / 9" }}
                  >
                    {pairedLeftIsVideo ? (
                      <video
                        src={pairedLeftVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={bannerImage!}
                        alt={`${name} banner`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div
                    className="relative bg-black rounded-[6px] overflow-hidden"
                    style={{ aspectRatio: "16 / 9" }}
                  >
                    {videoFile ? (
                      <video
                        src={videoFile}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                        title={`${name} video`}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Full-width video at the bottom — only when NOT paired */}
          {!isPaired && videoFile ? (
            <section style={{ paddingBottom: 120 }}>
              <div className="container-site">
                <div
                  className="relative bg-black rounded-[6px] overflow-hidden"
                  style={{ aspectRatio: "21 / 9" }}
                >
                  <video
                    src={videoFile}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>
          ) : !isPaired && videoId ? (
            <section style={{ paddingBottom: 120 }}>
              <div className="container-site">
                <div
                  className="relative bg-black rounded-[6px] overflow-hidden"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                    title={`${name} video`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </section>
          ) : null}

          {/* Mobile sticky bottom CTA bar — hidden on lg+, appears after inline CTAs scroll out */}
          <div
            className="lg:hidden fixed inset-x-0 bottom-0 z-40 bg-white/95 backdrop-blur-md border-t border-black/[0.08] transition-all duration-300"
            style={{
              paddingBottom: "env(safe-area-inset-bottom)",
              transform: showStickyBar ? "translateY(0)" : "translateY(100%)",
              opacity: showStickyBar ? 1 : 0,
              pointerEvents: showStickyBar ? "auto" : "none",
            }}
          >
            <div className="flex gap-2 px-4 py-3">
              <button
                onClick={enterChat}
                className="relative btn text-sm h-[44px] flex-1 justify-center rounded-xl overflow-hidden text-white"
                style={{
                  background: "linear-gradient(135deg, #5c0a0a 0%, #8b1a1a 18%, #a11d1d 35%, #c62828 55%, #b06060 78%, #c4b0b0 95%)",
                  border: "none",
                }}
              >
                <span className="relative z-10">Ask Orient AI</span>
              </button>
              <Link href="/contact" className="btn btn-cream text-sm h-[44px] flex-1 justify-center rounded-xl">
                Request Quote
              </Link>
            </div>
          </div>

          {/* Spacer so last content isn't covered by sticky bar on mobile */}
          <div className="lg:hidden" style={{ height: 76 }} aria-hidden />
        </>
      )}

      <Footer />
    </main>
  );
}
