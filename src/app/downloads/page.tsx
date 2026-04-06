"use client";

import { useState } from "react";
import PageShell from "@/components/PageShell";

const catalogs = [
  { label: "Orient Standard", file: "Orient-Standard_.pdf" },
  { label: "Orient Super", file: "Orient-Super_.pdf" },
  { label: "Orient X-Cel", file: "X-CEL-28-1-25.pdf" },
  { label: "Orient X-Press", file: "X-PRESS_.pdf" },
  { label: "Orient XLC", file: "ORIENT-XLC.pdf" },
  { label: "Folders", file: "Folders_.pdf" },
  { label: "Orient Jet Digital Machine", file: "OrientJet.pdf" },
  { label: "X-Press Flex", file: "xpress-flex-brochure28-1-25.pdf" },
  { label: "X-Press Fold", file: "ORIENT-X-PRESS-FOLDp28-1-25.pdf" },
  { label: "X-Press Cut", file: "ORIENT-X-PRESS-CUT-p28-1-25.pdf" },
  { label: "Spare Parts Catalog", file: "SPARE-PARTS_new.pdf" },
  { label: "AMC Service Catalogue", file: "AMC-Catalogue_new.pdf" },
  { label: "Group Company Profile", file: "Orient-print-&-pack-profile28-1-25.pdf" },
];

const BASE = "https://www.tphorient.com/assets/pdf";

function previewUrl(file: string) {
  const raw = `${BASE}/${encodeURIComponent(file)}`;
  return `https://docs.google.com/gview?url=${encodeURIComponent(raw)}&embedded=true`;
}

export default function DownloadsPage() {
  const [active, setActive] = useState(0);

  return (
    <PageShell title="Downloads" subtitle="Product catalogs, brochures, and technical documentation.">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar list */}
        <div className="lg:w-[280px] shrink-0 space-y-1">
          {catalogs.map((c, i) => (
            <button
              key={c.label}
              onClick={() => setActive(i)}
              className={`flex items-center justify-between w-full text-left p-3.5 rounded-lg transition-colors ${active === i ? "bg-black/[0.06] text-near-black" : "text-near-black/50 hover:bg-black/[0.03]"}`}
            >
              <div className="flex items-center gap-2.5">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="shrink-0 text-near-black/20">
                  <path d="M4 17V3h8l4 4v10H4z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 3v4h4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span className="text-[14px] font-medium">{c.label}</span>
              </div>
            </button>
          ))}

          {/* Download button */}
          <a
            href={`/api/download?file=${encodeURIComponent(catalogs[active].file)}`}
            download={catalogs[active].file}
            className="flex items-center justify-center gap-2 w-full mt-3 p-3 rounded-lg bg-near-black text-white text-[14px] font-medium hover:bg-near-black/80 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v9M8 11L4.5 7.5M8 11l3.5-3.5M3 14h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download PDF
          </a>
        </div>

        {/* PDF preview */}
        <div className="flex-1 min-w-0">
          <div className="relative bg-[#f5f5f4] rounded-xl overflow-hidden border border-black/[0.06]" style={{ height: "calc(100vh - 260px)", minHeight: 500 }}>
            {/* Floating download button */}
            <a
              href={`/api/download?file=${encodeURIComponent(catalogs[active].file)}`}
              download={catalogs[active].file}
              className="absolute top-3 right-14 z-10 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm border border-black/10 rounded-lg hover:bg-white shadow-sm transition-colors"
              title="Download PDF"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v9M8 11L4.5 7.5M8 11l3.5-3.5M3 14h10" stroke="#1C1B1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <iframe
              key={catalogs[active].file}
              src={previewUrl(catalogs[active].file)}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              title={`Preview: ${catalogs[active].label}`}
            />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
