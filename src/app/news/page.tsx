"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const allNews = [
  { slug: "welcome-ceo-pradeep-unny", date: "January 2025", category: "Leadership", title: "Welcome CEO Mr. Pradeep A. Unny" },
  { slug: "printpack-2025", date: "February 2025", category: "Trade Shows", title: "Make-in-India: TPH Orient at PrintPack 2025" },
  { slug: "labelexpo-2024", date: "November 2024", category: "Trade Shows", title: "Labelexpo 2024: Technology Prowess on Display" },
  { slug: "10-colour-flexo-labelexpo", date: "November 2024", category: "Product Launch", title: "10-Colour Flexo Press at Labelexpo India" },
  { slug: "pamex-2023", date: "December 2023", category: "Trade Shows", title: "New Presses and Converting Machines at Pamex 2023" },
  { slug: "indigenous-inkjet-press", date: "September 2023", category: "Product Launch", title: "Indigenous Inkjet Press and Ink Delivery System Launched" },
  { slug: "multipurpose-flexo-machines", date: "March 2022", category: "Product Launch", title: "India's First Multipurpose Flexo Machines — X-PRESS Flex" },
  { slug: "solar-energy-adm", date: "January 2022", category: "Expansion", title: "Orient Enters Solar Energy via ADM Orient" },
  { slug: "highest-revenue-2025", date: "March 2025", category: "Milestone", title: "Orient Achieves Highest Historical Revenue and Profits" },
];

const categories = ["All", ...Array.from(new Set(allNews.map((n) => n.category)))];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = allNews.filter((n) => {
    const matchesCat = activeCategory === "All" || n.category === activeCategory;
    const matchesSearch = searchQuery === "" || n.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main>
      <Navbar />
      <section style={{ paddingTop: 80 + 60, paddingBottom: 120 }}>
        <div className="container-site">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-[14px] font-medium text-near-black/20">
            <Link href="/" className="hover:text-near-black/40 transition-colors">Main</Link>
            <span>&gt;</span>
            <span className="text-near-black/35">News & Events</span>
          </div>

          {/* Header */}
          <div className="flex items-end justify-between mb-12">
            <h1 className="font-medium text-near-black" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>
              News & Events
            </h1>
            <div className="relative hidden sm:block" style={{ width: 280 }}>
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-near-black/30" width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M8.5 2C12.09 2 15 4.91 15 8.5C15 10.115 14.41 11.59 13.435 12.728L17.854 17.147L17.146 17.854L12.728 13.435C11.59 14.41 10.115 15 8.5 15C4.91 15 2 12.09 2 8.5C2 4.91 4.91 2 8.5 2ZM8.5 3C5.462 3 3 5.462 3 8.5C3 11.538 5.462 14 8.5 14C11.538 14 14 11.538 14 8.5C14 5.462 11.538 3 8.5 3Z" fill="currentColor" />
              </svg>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[48px] pl-12 pr-4 bg-white border border-black/10 rounded-xl text-[15px] font-medium text-near-black placeholder:text-near-black/20 outline-none focus:border-black/20 transition-colors"
              />
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="text-[14px] font-medium px-5 py-2.5 rounded-xl transition-all"
                style={{
                  background: activeCategory === cat ? "rgba(0,0,0,0.06)" : "rgba(0,0,0,0.02)",
                  color: activeCategory === cat ? "#1C1B1D" : "rgba(28,27,29,0.4)",
                  border: `1px solid ${activeCategory === cat ? "rgba(0,0,0,0.12)" : "rgba(0,0,0,0.04)"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Card grid — Hajster blog style with more personality */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 24 }}>
            {filtered.map((item) => (
              <Link
                key={item.slug}
                href="/news"
                className="group overflow-hidden transition-all hover:translate-y-[-2px]"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 16,
                }}
              >
                {/* Image area — padded inside card like Hajster */}
                <div style={{ padding: "16px 16px 0" }}>
                  <div
                    className="bg-[#dddddc] flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden"
                    style={{ height: 260, borderRadius: 12 }}
                  >
                    <span className="text-near-black/10 text-[12px] font-medium">News Image</span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "20px 20px 24px" }}>
                  <h3
                    className="text-[18px] font-medium text-near-black leading-[1.35] group-hover:text-near-black transition-colors mb-5"
                    style={{ minHeight: 48 }}
                  >
                    {item.title}
                  </h3>

                  {/* Category badge + date */}
                  <div className="flex items-center gap-3">
                    <span
                      className="text-[12px] font-semibold px-3 py-1.5"
                      style={{
                        background: "rgba(0,0,0,0.05)",
                        color: "rgba(28,27,29,0.6)",
                        borderRadius: 8,
                      }}
                    >
                      {item.category}
                    </span>
                    <span className="text-[13px] font-medium text-near-black/20">{item.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-[16px] font-medium text-near-black/30 py-20 text-center">No results found.</p>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
