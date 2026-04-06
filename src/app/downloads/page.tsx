import PageShell from "@/components/PageShell";

const catalogs = [
  { label: "Orient Standard", href: "https://www.tphorient.com/pdf/Orient-Standard_.pdf" },
  { label: "Orient Super", href: "https://www.tphorient.com/pdf/Orient-Super_.pdf" },
  { label: "Orient X-Cel", href: "https://www.tphorient.com/pdf/X-CEL-28-1-25.pdf" },
  { label: "Orient X-Press", href: "https://www.tphorient.com/pdf/X-PRESS_.pdf" },
  { label: "Orient XLC", href: "https://www.tphorient.com/pdf/ORIENT-XLC.pdf" },
  { label: "Folders", href: "https://www.tphorient.com/pdf/Folders_.pdf" },
  { label: "Orient Jet Digital Machine", href: "https://www.tphorient.com/pdf/OrientJet.pdf" },
  { label: "X-Press Flex", href: "https://www.tphorient.com/pdf/xpress-flex-brochure28-1-25.pdf" },
  { label: "X-Press Fold", href: "https://www.tphorient.com/pdf/ORIENT-X-PRESS-FOLDp28-1-25.pdf" },
  { label: "X-Press Cut", href: "https://www.tphorient.com/pdf/ORIENT-X-PRESS-CUT-p28-1-25.pdf" },
  { label: "Spare Parts Catalog", href: "https://www.tphorient.com/pdf/SPARE-PARTS_new.pdf" },
  { label: "AMC Service Catalogue", href: "https://www.tphorient.com/pdf/AMC-Catalogue_new.pdf" },
  { label: "Group Company Profile", href: "https://www.tphorient.com/pdf/Orient-print-&-pack-profile28-1-25.pdf" },
];

export default function DownloadsPage() {
  return (
    <PageShell title="Downloads" subtitle="Product catalogs, brochures, and technical documentation.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {catalogs.map((c) => (
          <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" download className="flex items-center justify-between p-5 bg-black/[0.03] rounded-[6px] group hover:bg-black/[0.06] transition-colors">
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
