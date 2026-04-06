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

export default function DownloadsPage() {
  return (
    <PageShell title="Downloads" subtitle="Product catalogs, brochures, and technical documentation.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {catalogs.map((c) => (
          <a key={c.label} href={`/api/download?file=${encodeURIComponent(c.file)}`} download={c.file} className="flex items-center justify-between p-5 bg-black/[0.03] rounded-[6px] group hover:bg-black/[0.06] transition-colors">
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 text-near-black/20">
                <path d="M4 17V3h8l4 4v10H4z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 3v4h4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="text-[15px] font-medium text-near-black/60">{c.label}</span>
            </div>
            <span className="text-[13px] font-medium text-near-black/20 group-hover:text-orient-red transition-colors">PDF ↓</span>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
