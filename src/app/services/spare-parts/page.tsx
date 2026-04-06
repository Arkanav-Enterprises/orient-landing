import PageShell from "@/components/PageShell";

export default function SparePartsPage() {
  return (
    <PageShell title="Spare Parts" subtitle="Original & High-Quality Replacement Parts">
      <div className="max-w-[720px]">
        <p className="text-[18px] font-medium text-white/60 leading-[1.6] mb-8">
          Orient provides original and high-quality spare parts at affordable prices, ensuring
          your presses maintain peak performance throughout their lifespan. Our dedicated spares
          stock advisory service helps you keep the right parts on hand, minimizing downtime and
          keeping your production running smoothly.
        </p>

        <div className="space-y-6">
          <div className="p-6 bg-[#111] rounded-[6px]">
            <h3 className="text-[18px] font-medium text-white mb-2">Original Parts</h3>
            <p className="text-[16px] font-medium text-white/50 leading-[1.5]">
              Genuine Orient parts manufactured to exact specifications for guaranteed
              compatibility and longevity.
            </p>
          </div>

          <div className="p-6 bg-[#111] rounded-[6px]">
            <h3 className="text-[18px] font-medium text-white mb-2">Affordable Pricing</h3>
            <p className="text-[16px] font-medium text-white/50 leading-[1.5]">
              Competitively priced parts that deliver value without compromising on quality.
            </p>
          </div>

          <div className="p-6 bg-[#111] rounded-[6px]">
            <h3 className="text-[18px] font-medium text-white mb-2">Spares Stock Advisory</h3>
            <p className="text-[16px] font-medium text-white/50 leading-[1.5]">
              Expert guidance on which parts to keep in stock based on your equipment and usage
              patterns, so you are always prepared.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
