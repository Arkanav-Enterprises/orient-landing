import PageShell from "@/components/PageShell";

const leaders = [
  { name: "Mr. Pradeep A. Unny", title: "Chief Executive Officer" },
  { name: "Mr. Rishab Kohli", title: "Director" },
  { name: "Mr. Naveen Chahal", title: "Director" },
  { name: "Mr. Sachin Pahuja", title: "Chief Operating Officer" },
];

export default function TeamPage() {
  return (
    <PageShell title="Our Team" subtitle="Three generations of leadership driving innovation across printing and solar energy.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {leaders.map((l) => (
          <div key={l.name} className="bg-[#111] rounded-[6px] overflow-hidden">
            <div className="bg-[#1a1a1a] flex items-center justify-center" style={{ height: 280 }}>
              <span className="text-white/5 text-[12px] font-medium">Photo</span>
            </div>
            <div className="p-6">
              <h3 className="text-[18px] font-medium text-white mb-1">{l.name}</h3>
              <p className="text-[15px] font-medium text-white/40">{l.title}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[18px] font-medium text-white/40 mt-12 leading-[1.5]">
        With branch presence across 10 Indian cities and 35+ countries, our team ensures Orient machinery is delivered, installed, and serviced wherever you operate.
      </p>
    </PageShell>
  );
}
