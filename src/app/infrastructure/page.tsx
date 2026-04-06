import PageShell from "@/components/PageShell";

const plants = [
  { name: "Plant 1 — Machining Centre", desc: "Houses CNC machinery, pre-assembly operations, metallurgy labs, CMM equipment, and CAD/CAM design stations." },
  { name: "Plant 2 — Assembly Center", desc: "Dedicated to final assembly, mechanical and electrical automation, quality control, and patron viewing facilities." },
  { name: "Plant 3 — R&D Centre", desc: "Focuses on new product development, trial production, and rigorous testing protocols." },
];

export default function InfrastructurePage() {
  return (
    <PageShell title="Our Infrastructure" subtitle="A 20-acre manufacturing campus in Delhi NCR with three production units.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
        {plants.map((p) => (
          <div key={p.name} className="bg-[#111] rounded-[6px] p-8">
            <div className="bg-[#1a1a1a] rounded-[4px] flex items-center justify-center mb-6" style={{ height: 200 }}>
              <span className="text-white/5 text-[12px] font-medium">Facility Photo</span>
            </div>
            <h3 className="text-[20px] font-medium text-white mb-3">{p.name}</h3>
            <p className="text-[16px] font-medium text-white/40 leading-[1.5]">{p.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-[18px] font-medium text-white/50 leading-[1.5]">
        ISO 9001:2000 certified. 10 branch offices across India and 30+ active agents worldwide support our global operations.
      </p>
    </PageShell>
  );
}
