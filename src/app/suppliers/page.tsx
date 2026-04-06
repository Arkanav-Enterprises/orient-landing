import PageShell from "@/components/PageShell";

export default function SuppliersPage() {
  return (
    <PageShell title="Suppliers Hub" subtitle="Partnering with the world's leading component suppliers for zero-defect manufacturing.">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <p className="text-[18px] font-medium text-white/50 leading-[1.6] mb-8">
            Orient procures advanced technology from high-quality suppliers worldwide. Our standardized supplier selection and evaluation system ensures innovation, reliability, and competitive pricing across every component.
          </p>
          <h3 className="text-[20px] font-medium text-white mb-4">Partnership Principles</h3>
          <ul className="space-y-3">
            {["Innovation-driven component sourcing", "Reliability and consistency in supply chain", "Zero-defect manufacturing strategy", "Competitive pricing without compromising quality"].map((p) => (
              <li key={p} className="text-[16px] font-medium text-white/40 flex gap-3"><span className="text-cream">→</span>{p}</li>
            ))}
          </ul>
        </div>
        <div className="lg:w-[40%] grid grid-cols-2 gap-4">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="bg-[#111] rounded-[4px] flex items-center justify-center" style={{ height: 100 }}>
              <span className="text-white/5 text-[11px] font-medium">Supplier Logo</span>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
