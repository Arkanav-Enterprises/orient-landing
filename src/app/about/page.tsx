import PageShell from "@/components/PageShell";

export default function AboutPage() {
  return (
    <PageShell title="About Orient" subtitle="Established in 1946, a legacy of excellence in printing machinery.">
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
          <div className="bg-black/[0.03] rounded-[6px] flex items-center justify-center" style={{ height: 300 }}>
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
    </PageShell>
  );
}
