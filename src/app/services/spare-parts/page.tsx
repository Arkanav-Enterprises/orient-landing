import Image from "next/image";
import PageShell from "@/components/PageShell";

export default function SparePartsPage() {
  return (
    <PageShell title="Spare Parts & Consumables" subtitle="Original parts, proprietary inks, and high-end offset chemicals.">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-1 max-w-[640px]">
          <p className="text-[18px] font-medium text-near-black/60 leading-[1.6] mb-12">
            Orient provides original and high-quality spare parts at affordable prices, ensuring
            your presses maintain peak performance throughout their lifespan. Our dedicated spares
            stock advisory service helps you keep the right parts on hand, minimizing downtime and
            keeping your production running smoothly.
          </p>

          <div className="space-y-6">
            <div className="p-6 bg-black/[0.03] rounded-[6px]">
              <h3 className="text-[18px] font-medium text-near-black mb-2">Digital Inkjet Inks</h3>
              <p className="text-[16px] font-medium text-near-black/50 leading-[1.5]">
                Orient&apos;s proprietary-coded inks for digital printing machines — globally
                acclaimed and bankable print quality.
              </p>
            </div>

            <div className="p-6 bg-black/[0.03] rounded-[6px]">
              <h3 className="text-[18px] font-medium text-near-black mb-2">Chemicals</h3>
              <p className="text-[16px] font-medium text-near-black/50 leading-[1.5]">
                Orient produces high-end offset chemicals for any printing need.
              </p>
            </div>

            <div className="p-6 bg-black/[0.03] rounded-[6px]">
              <h3 className="text-[18px] font-medium text-near-black mb-2">Original Spare Parts</h3>
              <p className="text-[16px] font-medium text-near-black/50 leading-[1.5]">
                Genuine Orient parts manufactured to exact specifications, with stock advisory to
                keep the right inventory on hand.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-[42%] shrink-0 w-full">
          <div className="relative bg-black/[0.03] rounded-[6px] overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
            <Image
              src="/images/consumables-inks.jpg"
              alt="Orient NexGen inks and chemicals"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
