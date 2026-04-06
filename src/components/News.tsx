"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const newsItems = [
  {
    date: "2025",
    category: "Leadership",
    title: "Welcome CEO Mr. Pradeep A. Unny",
    href: "https://www.labelsandlabeling.com/news/conventional-printing/printers-house-appoints-new-ceo",
    img: "/images/news-ceo.png",
  },
  {
    date: "Feb 2025",
    category: "Trade Shows",
    title: "Make-in-India: TPH Orient at PrintPack 2025",
    href: "https://publuu.com/flip-book/723396/1723059/page/36",
    img: "/images/news-printpack.png",
  },
  {
    date: "Nov 2024",
    category: "Trade Shows",
    title: "Labelexpo 2024: Technology Prowess on Display",
    href: "https://www.printweek.in/news/labelexpo-2024-tph-orient-showcases-its-technology-prowess-59626",
    img: "/images/news-labelexpo.png",
  },
  {
    date: "2024",
    category: "Product Launch",
    title: "10-Colour Flexo Press at Labelexpo India",
    href: "https://pressideas.com/orient-group-presents-10-colour-flexo-press-asr-x-press-flex-at-labelexpo-india/",
    img: "/images/news-flexo.png",
  },
  {
    date: "2024",
    category: "Industry",
    title: "Teachers' Day: Industry Leaders' Tribute",
    href: "https://mediabrief.com/exclusive-teachers-day-2024-industry-leaders/",
    img: "/images/news-teachers.png",
  },
  {
    date: "2023",
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

export default function News() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const filtered = newsItems.filter(
    (n) =>
      n.title.toLowerCase().includes(query.toLowerCase()) ||
      n.category.toLowerCase().includes(query.toLowerCase())
  );

  const visible = filtered.slice(0, visibleCount);

  // Show hovered item's image, or the first visible item's image
  const featuredImg = hoveredIdx !== null ? newsItems[hoveredIdx]?.img : visible[0]?.img;

  return (
    <section ref={ref} style={{ marginTop: 160, marginBottom: 160 }}>
      <div className="container-site">
        {/* Header row — title + search */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-medium leading-[1.1] text-near-black"
            style={{ fontSize: "clamp(28px, 3.2vw, 50px)" }}
          >
            News
          </motion.h2>

          {/* Search input */}
          <div className="relative" style={{ width: 260 }}>
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-near-black/30"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M8.5 2C12.09 2 15 4.91 15 8.5C15 10.115 14.41 11.59 13.435 12.728L17.854 17.147L17.146 17.854L12.728 13.435C11.59 14.41 10.115 15 8.5 15C4.91 15 2 12.09 2 8.5C2 4.91 4.91 2 8.5 2ZM8.5 3C5.462 3 3 5.462 3 8.5C3 11.538 5.462 14 8.5 14C11.538 14 14 11.538 14 8.5C14 5.462 11.538 3 8.5 3Z"
                fill="currentColor"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisibleCount(6);
              }}
              className="w-full h-[44px] pl-11 pr-4 bg-transparent border border-black/10 rounded-[6px] text-[15px] font-medium text-near-black placeholder:text-black/25 outline-none focus:border-black/25 transition-colors"
            />
          </div>
        </div>

        {/* List layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main list */}
          <div className="flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {/* Column headers */}
            <div className="flex items-center gap-6 pb-4 border-b border-black/[0.06] mb-0 min-w-[540px]">
              <span className="text-[12px] font-medium text-near-black/30 uppercase tracking-wider" style={{ width: 120, flexShrink: 0 }}>
                Date
              </span>
              <span className="text-[12px] font-medium text-near-black/30 uppercase tracking-wider" style={{ width: 140, flexShrink: 0 }}>
                Category
              </span>
              <span className="text-[12px] font-medium text-near-black/30 uppercase tracking-wider flex-1">
                Title
              </span>
            </div>

            {/* News rows */}
            <ul className="min-w-[540px]">
              {visible.map((item, i) => {
                const globalIdx = newsItems.indexOf(item);
                return (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    onMouseEnter={() => setHoveredIdx(globalIdx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-6 py-5 border-b border-black/[0.04] group hover:bg-black/[0.02] -mx-4 px-4 transition-colors"
                    >
                      <time
                        className="text-[15px] font-medium text-near-black/40 shrink-0 pt-0.5"
                        style={{ width: 120 }}
                      >
                        {item.date}
                      </time>
                      <span
                        className="text-[15px] font-medium text-near-black/40 shrink-0 pt-0.5"
                        style={{ width: 140 }}
                      >
                        {item.category}
                      </span>
                      <span className="text-[16px] font-medium text-near-black/70 group-hover:text-near-black transition-colors flex-1 leading-[1.4]">
                        {item.title}
                      </span>
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            {/* See more button */}
            {visibleCount < filtered.length && (
              <button
                onClick={() => setVisibleCount((c) => c + 6)}
                className="flex items-center gap-2 mt-6 text-[16px] font-medium text-near-black/40 hover:text-near-black/70 transition-colors"
              >
                <span>See More</span>
                <svg width="16" height="16" viewBox="0 0 16 17" fill="none">
                  <path
                    d="M12.854 9.854L8.354 14.354C8.16 14.548 7.84 14.548 7.646 14.354L3.146 9.854C2.952 9.66 2.952 9.34 3.146 9.146C3.34 8.952 3.66 8.952 3.854 9.146L7.5 12.793V3C7.5 2.724 7.724 2.5 8 2.5C8.276 2.5 8.5 2.724 8.5 3V12.793L12.146 9.146C12.34 8.952 12.66 8.952 12.854 9.146C13.048 9.34 13.048 9.66 12.854 9.854Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            )}

            {filtered.length === 0 && (
              <p className="text-[16px] font-medium text-near-black/30 py-10">
                No results found for &ldquo;{query}&rdquo;
              </p>
            )}
          </div>

          {/* Aside — featured image that changes on hover */}
          <aside className="hidden lg:block shrink-0" style={{ width: 320 }}>
            <div
              className="bg-[#f5f5f4] rounded-[6px] overflow-hidden sticky top-[140px] relative"
              style={{ width: 320, height: 320 }}
            >
              {featuredImg && (
                <Image
                  key={featuredImg}
                  src={featuredImg}
                  alt="Featured news"
                  fill
                  className="object-cover transition-opacity duration-300"
                />
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
