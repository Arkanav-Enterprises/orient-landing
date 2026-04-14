"use client";

import { useState } from "react";
import PageShell from "@/components/PageShell";

const catalogs = [
  { label: "Orient Super", file: "orient-super.pdf" },
  { label: "Orient X-Cel", file: "xcel.pdf" },
  { label: "Orient X-Press", file: "xpress.pdf" },
  { label: "Orient XLC", file: "xlc.pdf" },
  { label: "X-Press Flex", file: "xpress-flex.pdf" },
  { label: "Orient Jet C Series", file: "orient-jet-c-series.pdf" },
  { label: "Orient Jet L&P Series", file: "orient-jet-lp-series.pdf" },
  { label: "Folders", file: "folders.pdf" },
  { label: "After Sales Services", file: "after-sales-services.pdf" },
  { label: "Group Company Profile", file: "orient-printpack-profile.pdf" },
];

function assetUrl(file: string) {
  return `/assets/pdf/${file}`;
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

        </div>

        {/* PDF preview */}
        <div className="flex-1 min-w-0">
          <div className="relative bg-[#f5f5f4] rounded-xl overflow-hidden border border-black/[0.06]" style={{ height: "calc(100vh - 260px)", minHeight: 500 }}>
            {/* Floating download button */}
            <a
              href={assetUrl(catalogs[active].file)}
              download={catalogs[active].file}
              className="absolute top-3 right-16 z-10 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm border border-black/10 rounded-lg hover:bg-white shadow-sm transition-colors"
              title="Download PDF"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v9M8 11L4.5 7.5M8 11l3.5-3.5M3 14h10" stroke="#1C1B1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <iframe
              key={catalogs[active].file}
              src={assetUrl(catalogs[active].file)}
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
