import PageShell from "./PageShell";
import Link from "next/link";

export type ProductSpec = { label: string; value: string };

export default function ProductPage({
  name,
  category,
  description,
  speed,
  features,
  specs,
  configurations,
}: {
  name: string;
  category: string;
  description: string;
  speed?: string;
  features: string[];
  specs: ProductSpec[];
  configurations?: string[];
}) {
  return (
    <PageShell title={name} subtitle={category}>
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left — image + CTA */}
        <div className="lg:w-[45%] shrink-0">
          <div className="bg-[#f5f5f4] rounded-[6px] flex items-center justify-center" style={{ height: 500 }}>
            <span className="text-near-black/10 text-[14px] font-medium">Product Image</span>
          </div>
          <div className="flex gap-3 mt-6">
            <Link href="/contact" className="btn btn-cream text-[16px] h-[48px] flex-1 justify-center">
              Request Quote
            </Link>
            <Link href="/downloads" className="btn btn-outline text-[16px] h-[48px] flex-1 justify-center">
              Download Catalog
            </Link>
          </div>
        </div>

        {/* Right — details */}
        <div className="flex-1">
          <p className="text-[18px] font-medium text-near-black/60 leading-[1.5] mb-10">{description}</p>

          {speed && (
            <div className="mb-10 p-6 bg-[#f5f5f4] rounded-[6px]">
              <span className="text-[14px] font-medium text-near-black/40 block mb-1">Maximum Speed</span>
              <span className="text-[36px] font-medium text-near-black">{speed}</span>
            </div>
          )}

          {configurations && configurations.length > 0 && (
            <div className="mb-10">
              <h3 className="text-[20px] font-medium text-near-black mb-4">Configurations</h3>
              <div className="flex flex-wrap gap-2">
                {configurations.map((c) => (
                  <span key={c} className="text-[14px] font-medium text-near-black/40 px-4 py-2 border border-black/10 rounded-[4px]">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          <h3 className="text-[20px] font-medium text-near-black mb-4">Key Features</h3>
          <ul className="space-y-3 mb-10">
            {features.map((f) => (
              <li key={f} className="text-[16px] font-medium text-near-black/50 flex gap-3">
                <span className="text-near-black shrink-0">→</span>
                {f}
              </li>
            ))}
          </ul>

          {specs.length > 0 && (
            <>
              <h3 className="text-[20px] font-medium text-near-black mb-4">Specifications</h3>
              <div className="border border-black/8 rounded-[6px] overflow-hidden">
                {specs.map((s, i) => (
                  <div key={s.label} className={`flex justify-between p-4 ${i % 2 === 0 ? "bg-black/[0.02]" : ""}`}>
                    <span className="text-[15px] font-medium text-near-black/40">{s.label}</span>
                    <span className="text-[15px] font-medium text-near-black/70">{s.value}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </PageShell>
  );
}
