import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Products",
  description: "Web offset, flexographic, digital inkjet printing presses and packaging & converting machinery by Orient — The Printers House.",
  alternates: { canonical: "/products" },
};

/* ── Product catalog ── */

const categories = [
  {
    title: "Web Offset Printing Presses",
    description: "Industry-leading web offset presses for newspaper, book, and commercial printing.",
    products: [
      { name: "Orient Standard", href: "/products/orient-standard", desc: "Single-width press for newspaper, tabloid & book printing", speed: "16,000 cph" },
      { name: "Orient Super", href: "/products/orient-super", desc: "Versatile press — up to 4 colours both sides of one web", speed: "30,000 cph" },
      { name: "Orient X-Cel", href: "/products/orient-x-cel", desc: "High-performance press with infra-red web detection", speed: "36,000 cph" },
      { name: "Orient X-Press", href: "/products/orient-x-press", desc: "Flagship press with stainless steel cylinders & touchscreen console", speed: "50,000 cph" },
      { name: "Orient XLC", href: "/products/orient-xlc", desc: "Compact tower alternative for space-efficient production", speed: "30,000 cph" },
    ],
    image: "/images/prod-standard.jpg",
  },
  {
    title: "Flexographic Printing",
    description: "Narrow, mid, and wide width flexo presses for paper and film packaging & converting.",
    products: [
      { name: "X-Press Flex Narrow Web", href: "/products/x-press-flex-narrow", desc: "Labels & flexible packaging, 330–650mm width" },
      { name: "X-Press Flex Mid Web", href: "/products/x-press-flex-mid", desc: "Film labels, shrink sleeves & pouches, 650–1000mm" },
      { name: "X-Press Flex Wide Web", href: "/products/x-press-flex-wide", desc: "Sleeve technology, up to 50% less waste, 1000–1500mm" },
    ],
    image: "/images/prod-flex.jpg",
  },
  {
    title: "Packaging & Converting",
    description: "Post-press finishing equipment for folding, gluing, and die-cutting.",
    products: [
      { name: "X-Press Fold", href: "/products/folders", desc: "Five folder models — jaw type to tucker folders" },
    ],
    image: "/images/prod-packaging.jpg",
  },
  {
    title: "Digital Inkjet Presses",
    description: "Inkjet printing machines for commercial printing and label printing.",
    products: [
      { name: "Orient Jet C Series", href: "/products/orient-jet-c", desc: "Commercial inkjet for book, newspaper, label & packaging" },
      { name: "Orient Jet L&P Series", href: "/products/orient-jet-lp", desc: "UV inkjet — prints on paper, plastics & metals" },
    ],
    image: "/images/prod-jet.jpg",
  },
  {
    title: "Services",
    description: "End-to-end support for your Orient presses.",
    products: [
      { name: "Spare Parts", href: "/services/spare-parts", desc: "Genuine Orient spare parts for all press models" },
      { name: "AMC Servicing", href: "/services/amc", desc: "Annual maintenance contracts & on-site support" },
      { name: "Financial Support", href: "/services/financial", desc: "Financing options for new press purchases" },
    ],
  },
];

export default function ProductsPage() {
  return (
    <PageShell title="Products" subtitle="From offset to inkjet, books to labels and everything packaging.">
      <div className="space-y-20">
        {categories.map((cat, ci) => (
          <section key={cat.title}>
            {/* Category hero image */}
            {cat.image && (
              <div className="relative w-full h-[240px] sm:h-[320px] lg:h-[400px] rounded-xl overflow-hidden mb-8 bg-[#f5f5f4]">
                <Image src={cat.image} alt={cat.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 1200px" priority={ci === 0} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <h2 className="text-[24px] sm:text-[30px] font-medium text-white mb-1">{cat.title}</h2>
                  <p className="text-[14px] sm:text-[15px] text-white/70 max-w-lg">{cat.description}</p>
                </div>
              </div>
            )}
            {!cat.image && (
              <div className="mb-8">
                <h2 className="text-[22px] font-medium text-near-black mb-2">{cat.title}</h2>
                <p className="text-[15px] text-near-black/40 max-w-lg">{cat.description}</p>
              </div>
            )}

            {/* Product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.products.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  className="group p-5 bg-black/[0.03] rounded-lg hover:bg-black/[0.06] transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-[15px] font-medium text-near-black/70 group-hover:text-near-black transition-colors mb-1">
                        {p.name}
                      </h3>
                      <p className="text-[13px] text-near-black/35 leading-relaxed">{p.desc}</p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-1 text-near-black/15 group-hover:text-near-black/40 transition-colors">
                      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {"speed" in p && p.speed && (
                    <span className="inline-block mt-3 text-[11px] font-medium text-near-black/25 bg-black/[0.04] px-2 py-0.5 rounded-full">
                      {p.speed}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
