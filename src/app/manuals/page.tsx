import PageShell from "@/components/PageShell";

const BASE = "https://www.tphorient.com/assets/pdf";

const manuals = [
  { label: "Orient Jet C Series Manual", file: "Orient_Jet_C_Series_Manual- C IJT.pdf", desc: "Digital inkjet duplex press — installation, operation & maintenance" },
  { label: "Orient Jet L&P Series Manual", file: "Orient_Jet_LP_Series_Manual-L&P-IJT.pdf", desc: "Label & packaging inkjet press — installation, operation & maintenance" },
  { label: "Web Offset Printing Machine", file: "orient_manual-web.pdf", desc: "Web offset press range — installation, operation & maintenance" },
  { label: "Orient X-Press Flex Series", file: "Orient_XPress_Flex_Manual-Flexo.pdf", desc: "Flexographic press range — installation, operation & maintenance" },
];

export default function ManualsPage() {
  return (
    <PageShell title="Operations & Maintenance Manuals" subtitle="Download installation, operation, and maintenance guides for your Orient press.">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
        {manuals.map((m) => (
          <a
            key={m.file}
            href={`${BASE}/${encodeURIComponent(m.file)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 p-6 bg-black/[0.02] border border-black/[0.06] rounded-xl hover:bg-black/[0.04] hover:border-black/[0.12] transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-black/[0.04] flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-near-black/30 group-hover:text-near-black/50 transition-colors">
                <path d="M4 17V3h8l4 4v10H4z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 3v4h4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 13h6M7 10h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h3 className="text-[15px] font-medium text-near-black mb-1 group-hover:text-near-black/80 transition-colors">{m.label}</h3>
              <p className="text-[13px] font-medium text-near-black/35 leading-relaxed">{m.desc}</p>
            </div>
            <span className="flex items-center gap-1.5 text-[13px] font-medium text-near-black/30 group-hover:text-near-black/50 transition-colors mt-auto">
              Download PDF
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v9M8 11L4.5 7.5M8 11l3.5-3.5M3 14h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
