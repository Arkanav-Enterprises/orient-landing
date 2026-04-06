"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const allNews = [
  {
    date: "January 2025",
    category: "Leadership",
    title: "Welcome CEO Mr. Pradeep A. Unny",
    href: "https://www.labelsandlabeling.com/news/conventional-printing/printers-house-appoints-new-ceo",
    img: "/images/news-ceo.png",
  },
  {
    date: "February 2025",
    category: "Trade Shows",
    title: "Make-in-India: TPH Orient at PrintPack 2025",
    href: "https://publuu.com/flip-book/723396/1723059/page/36",
    img: "/images/news-printpack.png",
  },
  {
    date: "November 2024",
    category: "Trade Shows",
    title: "Labelexpo 2024: Technology Prowess on Display",
    href: "https://www.printweek.in/news/labelexpo-2024-tph-orient-showcases-its-technology-prowess-59626",
    img: "/images/news-labelexpo.png",
  },
  {
    date: "November 2024",
    category: "Product Launch",
    title: "10-Colour Flexo Press at Labelexpo India",
    href: "https://pressideas.com/orient-group-presents-10-colour-flexo-press-asr-x-press-flex-at-labelexpo-india/",
    img: "/images/news-flexo.png",
  },
  {
    date: "September 2024",
    category: "Industry",
    title: "Teachers' Day: Industry Leaders' Tribute",
    href: "https://mediabrief.com/exclusive-teachers-day-2024-industry-leaders/",
    img: "/images/news-teachers.png",
  },
  {
    date: "December 2023",
    category: "Trade Shows",
    title: "New Presses and Converting Machines at Pamex 2023",
    href: "https://packagingsouthasia.com/events/pamex-2023/tph-orient-machines/",
    img: "/images/news-pamex.jpg",
  },
  {
    date: "2025",
    category: "Company",
    title: "Orient Printing and Packaging — Latest Update",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7296512920941707265/",
    img: "/images/news-linkedin1.png",
  },
  {
    date: "2024",
    category: "Company",
    title: "Orient Printing and Packaging — Company Update",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7209110825024835585/",
    img: "/images/news-linkedin2.png",
  },
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

          {/* Card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 24 }}>
            {filtered.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden transition-all hover:translate-y-[-2px]"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 16,
                }}
              >
                {/* Image area */}
                <div style={{ padding: "16px 16px 0" }}>
                  <div
                    className="bg-[#dddddc] relative group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden"
                    style={{ height: 260, borderRadius: 12 }}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
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
              </a>
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
