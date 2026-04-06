import PageShell from "@/components/PageShell";

const catalogs = [
  "Orient Standard", "Orient Super", "Orient X-Cel", "Orient X-Press", "Orient XLC",
  "Folders", "Orient Jet Digital Machine", "X-Press Flex", "X-Press Fold", "X-Press Cut",
  "Spare Parts Catalog", "AMC Service Catalogue", "Group Company Profile",
];

export default function DownloadsPage() {
  return (
    <PageShell title="Downloads" subtitle="Product catalogs, brochures, and technical documentation.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {catalogs.map((c) => (
          <div key={c} className="flex items-center justify-between p-5 bg-[#111] rounded-[6px] group cursor-pointer hover:bg-[#161616] transition-colors">
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 text-white/20">
                <path d="M4 17V3h8l4 4v10H4z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 3v4h4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="text-[15px] font-medium text-white/60">{c}</span>
            </div>
            <span className="text-[13px] font-medium text-white/20 group-hover:text-cream transition-colors">PDF ↓</span>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
