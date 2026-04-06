import PageShell from "@/components/PageShell";

const countries = ["Afghanistan","Algeria","Argentina","Australia","Bangladesh","Belgium","Brazil","Canada","Chile","China","Colombia","Egypt","Ethiopia","Ghana","Greece","Hungary","Indonesia","Iran","Iraq","Italy","Jordan","Kenya","Kuwait","Mexico","Morocco","Myanmar","Nepal","Netherlands","New Zealand","Nigeria","Oman","Qatar","Russia","Saudi Arabia","South Africa","Spain","Sri Lanka","UAE","UK","USA","Venezuela","Vietnam","Yemen","Zimbabwe"];

export default function PatronsPage() {
  return (
    <PageShell title="Our Patrons" subtitle="Imprinting new standards in printing and packaging machinery across the world.">
      <p className="text-[18px] font-medium text-near-black/50 leading-[1.5] mb-12" style={{ maxWidth: 700 }}>
        With installations in 44 countries and growing, Orient proudly serves publishers, packaging houses, and commercial printers worldwide.
      </p>
      <div className="flex flex-wrap gap-3">
        {countries.map((c) => (
          <span key={c} className="text-[15px] font-medium text-near-black/40 px-4 py-2.5 border border-black/10 rounded-[4px]">{c}</span>
        ))}
      </div>
    </PageShell>
  );
}
