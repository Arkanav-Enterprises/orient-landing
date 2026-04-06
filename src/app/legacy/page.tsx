import PageShell from "@/components/PageShell";

const timeline = [
  { year: "1946", event: "Founded as agency for importing printing equipment by K.D. Kohli" },
  { year: "1960", event: "Started manufacturing Prima Platen Presses and Mercedes stop cylinder presses" },
  { year: "1970", event: "Began web offset press production; Goss USA became marketing agent" },
  { year: "1980", event: "Integrated CNC/CAD-CAM; expanded to USA, Europe, South Asia; launched Orient Super (30,000 cph)" },
  { year: "1990", event: "Entered Chinese market, installed 130+ presses in 8 years; launched Orient X-Cel (36,000 cph)" },
  { year: "2002", event: "Developed Orient X-Press (45,000 cph), launched at Drupa 2004" },
  { year: "2009", event: "KBA Germany marketing partnership established" },
  { year: "2010", event: "X-Press upgraded to 50,000 cph; auto reel changers, shaftless drives, auto registration" },
  { year: "2022", event: "Launched India's first multipurpose flexo machines (X-PRESS Flex); entered solar via ADM Orient" },
  { year: "2023", event: "Introduced indigenous inkjet press and ink delivery system" },
  { year: "2025", event: "Achieved highest historical revenue and profits" },
];

export default function LegacyPage() {
  return (
    <PageShell title="Our Legacy" subtitle="From a single workshop to the world's most prolific supplier of printing machinery.">
      <div className="space-y-0">
        {timeline.map((t, i) => (
          <div key={t.year} className="flex gap-8 md:gap-16 border-b border-black/[0.06]" style={{ padding: "40px 0" }}>
            <span className="text-[48px] font-medium text-near-black/20 shrink-0" style={{ width: 140 }}>{t.year}</span>
            <p className="text-[18px] font-medium text-near-black/60 leading-[1.5] pt-3">{t.event}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
