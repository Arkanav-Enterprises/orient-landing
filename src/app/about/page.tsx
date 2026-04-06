"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  { id: "about", label: "About" },
  { id: "legacy", label: "Legacy" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "team", label: "Team" },
  { id: "suppliers", label: "Suppliers" },
  { id: "patrons", label: "Patrons" },
];

const timeline = [
  { year: "1946", event: "Founded as agency for importing printing equipment by K.D. Kohli" },
  { year: "1960", event: "Started manufacturing Prima Platen Presses and Mercedes stop cylinder presses" },
  { year: "1970", event: "Began web offset press production; Goss USA became marketing agent" },
  { year: "1980", event: "Integrated CNC/CAD-CAM; expanded to USA, Europe, South Asia; launched Orient Super (30,000 cph)" },
  { year: "1990", event: "Entered Chinese market, installed 130+ presses in 8 years; launched Orient X-Cel (36,000 cph)" },
  { year: "2002", event: "Developed Orient X-Press (45,000 cph), launched at Drupa 2004" },
  { year: "2009", event: "KBA Germany marketing partnership established" },
  { year: "2010", event: "X-Press upgraded to 50,000 cph; auto reel changers, shaftless drives, auto registration" },
  { year: "2022", event: "Launched India's first multipurpose flexo machines (X-PRESS Flex); entered solar via ADM Orient" },
  { year: "2023", event: "Introduced indigenous inkjet press and ink delivery system" },
  { year: "2025", event: "Achieved highest historical revenue and profits" },
];

const plants = [
  { name: "Plant 1 — Machining Centre", desc: "CNC machinery, pre-assembly, metallurgy labs, CMM quality control, and CAD/CAM design center." },
  { name: "Plant 2 — Assembly Center", desc: "Final assembly, mechanical and electrical automation, quality inspection, and patron demonstration area." },
  { name: "Plant 3 — R&D Centre", desc: "New product development, trial production, and performance testing for next-generation press technology." },
];

const leaders = [
  { name: "Mr. Pradeep A. Unny", title: "CEO" },
  { name: "Mr. Rishab Kohli", title: "Director" },
  { name: "Mr. Naveen Chahal", title: "Director" },
  { name: "Mr. Sachin Pahuja", title: "COO" },
];

const principles = [
  "Innovation-driven component sourcing",
  "Reliability and consistency in supply chain",
  "Zero-defect manufacturing strategy",
  "Competitive pricing without compromising quality",
];

const countries = [
  "Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium",
  "Brazil", "Canada", "Chile", "China", "Colombia", "Egypt", "Ethiopia",
  "Ghana", "Greece", "Hungary", "Indonesia", "Iran", "Iraq", "Italy",
  "Jordan", "Kenya", "Kuwait", "Mexico", "Morocco", "Myanmar", "Nepal",
  "Netherlands", "New Zealand", "Nigeria", "Oman", "Qatar", "Russia",
  "Saudi Arabia", "South Africa", "Spain", "Sri Lanka", "UAE", "UK",
  "USA", "Venezuela", "Vietnam", "Yemen", "Zimbabwe",
];

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("about");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main>
      <Navbar />
      <div className="container-site flex gap-16" style={{ paddingTop: 80 + 60 }}>

        {/* Sticky sidebar */}
        <aside className="hidden lg:block shrink-0" style={{ width: 140 }}>
          <nav className="sticky" style={{ top: 120 }}>
            <ul className="space-y-1">
              {sections.map(({ id, label }) => {
                const isActive = activeSection === id;
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="block text-[13px] font-medium pl-4 py-1.5 transition-colors"
                      style={{
                        color: isActive ? "#1C1B1D" : "rgba(28,27,29,0.3)",
                        borderLeft: isActive ? "2px solid #de2127" : "2px solid transparent",
                      }}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Main scrollable content */}
        <div className="flex-1 min-w-0">

          {/* About Orient */}
          <section id="about" style={{ padding: "60px 0 120px" }}>
            <h1 className="font-medium leading-[1.05] text-near-black mb-4" style={{ fontSize: "clamp(36px, 4vw, 60px)" }}>
              About Orient
            </h1>
            <p className="text-[18px] font-medium text-near-black/50 leading-[1.4] mb-12" style={{ maxWidth: 600 }}>
              Established in 1946, a legacy of excellence in printing machinery.
            </p>
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="flex-1">
                <p className="text-[18px] font-medium text-near-black/60 leading-[1.6] mb-8">
                  Established in 1946, TPH ORIENT has carved a formidable reputation as a leading quality-conscious manufacturer and supplier of printing machines, converting machines, consumables, and allied services worldwide.
                </p>
                <p className="text-[18px] font-medium text-near-black/60 leading-[1.6] mb-8">
                  Under the guidance of Rishabh Kohli, the third generation of the family, Orient has expanded its operations into various sectors, including printing machinery manufacturing and solar energy.
                </p>
                <p className="text-[18px] font-medium text-near-black/60 leading-[1.6] mb-8">
                  Orient operates a 20-acre manufacturing campus in Delhi NCR with state-of-the-art CNC machines, AutoCAD/3D modeling design centers, a dedicated final assembly unit, and in-house painting facilities.
                </p>
                <p className="text-[18px] font-medium text-near-black/60 leading-[1.6]">
                  With 10 offices across India and exports to 60+ countries, Orient continues to set new standards in the global printing machinery industry.
                </p>
              </div>
              <div className="lg:w-[40%] shrink-0 space-y-5">
                <div className="bg-black/[0.03] rounded-[6px] flex items-center justify-center" style={{ height: 260 }}>
                  <span className="text-near-black/10 text-[14px] font-medium">Company Image</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[{ n: "79", l: "Years" }, { n: "20,000+", l: "Units" }, { n: "60+", l: "Countries" }, { n: "10", l: "Offices" }].map((s) => (
                    <div key={s.l} className="bg-black/[0.03] rounded-[6px] p-6">
                      <span className="text-[28px] font-medium text-orient-red block">{s.n}</span>
                      <span className="text-[14px] font-medium text-near-black/30">{s.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Our Legacy */}
          <section id="legacy" className="border-t border-black/[0.06]" style={{ padding: "120px 0" }}>
            <h2 className="font-medium leading-[1.05] text-near-black mb-4" style={{ fontSize: "clamp(28px, 2.5vw, 42px)" }}>
              Our Legacy
            </h2>
            <p className="text-[18px] font-medium text-near-black/50 leading-[1.4] mb-16" style={{ maxWidth: 600 }}>
              From a single workshop to the world's most prolific supplier of printing machinery.
            </p>
            <div>
              {timeline.map((t) => (
                <div key={t.year} className="flex gap-8 md:gap-16 border-b border-black/[0.06]" style={{ padding: "36px 0" }}>
                  <span className="text-[40px] font-medium text-near-black/20 shrink-0" style={{ width: 110 }}>{t.year}</span>
                  <p className="text-[17px] font-medium text-near-black/60 leading-[1.5] pt-2">{t.event}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Infrastructure */}
          <section id="infrastructure" className="border-t border-black/[0.06]" style={{ padding: "120px 0" }}>
            <h2 className="font-medium leading-[1.05] text-near-black mb-4" style={{ fontSize: "clamp(28px, 2.5vw, 42px)" }}>
              Our Infrastructure
            </h2>
            <p className="text-[18px] font-medium text-near-black/50 leading-[1.4] mb-16" style={{ maxWidth: 600 }}>
              A 20-acre manufacturing campus in Delhi NCR with three production units.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {plants.map((p) => (
                <div key={p.name} className="bg-black/[0.03] rounded-[6px] overflow-hidden">
                  <div className="flex items-center justify-center bg-black/[0.03]" style={{ height: 180 }}>
                    <span className="text-near-black/10 text-[12px] font-medium">Facility Photo</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[17px] font-medium text-near-black mb-3">{p.name}</h3>
                    <p className="text-[15px] font-medium text-near-black/40 leading-[1.5]">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[16px] font-medium text-near-black/40 leading-[1.5]">
              ISO 9001:2000 certified · 10 branch offices across India · 30+ authorised global agents
            </p>
          </section>

          {/* Our Team */}
          <section id="team" className="border-t border-black/[0.06]" style={{ padding: "120px 0" }}>
            <h2 className="font-medium leading-[1.05] text-near-black mb-4" style={{ fontSize: "clamp(28px, 2.5vw, 42px)" }}>
              Our Team
            </h2>
            <p className="text-[18px] font-medium text-near-black/50 leading-[1.4] mb-16" style={{ maxWidth: 600 }}>
              Three generations of leadership driving innovation across printing and solar energy.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {leaders.map((l) => (
                <div key={l.name}>
                  <div className="bg-black/[0.03] rounded-[6px] flex items-center justify-center mb-4" style={{ height: 240 }}>
                    <span className="text-near-black/10 text-[11px] font-medium">Photo</span>
                  </div>
                  <h3 className="text-[16px] font-medium text-near-black mb-1">{l.name}</h3>
                  <p className="text-[14px] font-medium text-near-black/40">{l.title}</p>
                </div>
              ))}
            </div>
            <p className="text-[16px] font-medium text-near-black/40 leading-[1.5]">
              With branch presence across 10 Indian cities and 35+ countries, Orient's leadership team oversees a global network of agents, service engineers, and marketing partners.
            </p>
          </section>

          {/* Suppliers Hub */}
          <section id="suppliers" className="border-t border-black/[0.06]" style={{ padding: "120px 0" }}>
            <h2 className="font-medium leading-[1.05] text-near-black mb-4" style={{ fontSize: "clamp(28px, 2.5vw, 42px)" }}>
              Suppliers Hub
            </h2>
            <p className="text-[18px] font-medium text-near-black/50 leading-[1.4] mb-16" style={{ maxWidth: 600 }}>
              Partnering with the world's leading component suppliers for zero-defect manufacturing.
            </p>
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="flex-1">
                <p className="text-[18px] font-medium text-near-black/60 leading-[1.6] mb-10">
                  Orient procures advanced technology from high-quality suppliers worldwide. Our standardized supplier selection and evaluation system ensures innovation, reliability, and competitive pricing across every component.
                </p>
                <h3 className="text-[17px] font-medium text-near-black mb-5">Partnership Principles</h3>
                <ul className="space-y-3">
                  {principles.map((p) => (
                    <li key={p} className="text-[16px] font-medium text-near-black/60 flex gap-3">
                      <span className="text-orient-red shrink-0">→</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-[38%] shrink-0">
                <div className="grid grid-cols-2 gap-3">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-black/[0.03] rounded-[6px] flex items-center justify-center" style={{ height: 80 }}>
                      <span className="text-near-black/10 text-[11px] font-medium">Supplier Logo</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Our Patrons */}
          <section id="patrons" className="border-t border-black/[0.06]" style={{ padding: "120px 0 160px" }}>
            <h2 className="font-medium leading-[1.05] text-near-black mb-4" style={{ fontSize: "clamp(28px, 2.5vw, 42px)" }}>
              Our Patrons
            </h2>
            <p className="text-[18px] font-medium text-near-black/50 leading-[1.4] mb-16" style={{ maxWidth: 600 }}>
              With installations in 44 countries and growing, Orient's machines are trusted by leading printers across six continents.
            </p>
            <div className="flex flex-wrap gap-2">
              {countries.map((country) => (
                <span key={country} className="text-[13px] font-medium text-near-black/40 px-3 py-1.5 border border-black/[0.08] rounded-[4px]">
                  {country}
                </span>
              ))}
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}
