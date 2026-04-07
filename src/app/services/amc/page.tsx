import Image from "next/image";
import PageShell from "@/components/PageShell";

export default function AMCPage() {
  return (
    <PageShell title="AMC Servicing" subtitle="Orient Smart AMC">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-1 max-w-[640px]">
        <p className="text-[18px] font-medium text-near-black/60 leading-[1.6] mb-8">
          Orient Smart AMC provides comprehensive annual maintenance contracts designed to keep
          your presses running at peak efficiency. With 24/7 telephonic support, our team is
          always available when you need them.
        </p>

        <div className="space-y-6">
          <div className="p-6 bg-black/[0.03] rounded-[6px]">
            <h3 className="text-[18px] font-medium text-near-black mb-2">Increase Performance</h3>
            <p className="text-[16px] font-medium text-near-black/50 leading-[1.5]">
              Regular preventive maintenance and expert servicing ensure your equipment operates
              at maximum output and quality.
            </p>
          </div>

          <div className="p-6 bg-black/[0.03] rounded-[6px]">
            <h3 className="text-[18px] font-medium text-near-black mb-2">Reduce Costs</h3>
            <p className="text-[16px] font-medium text-near-black/50 leading-[1.5]">
              Proactive maintenance minimizes unexpected breakdowns and costly emergency repairs,
              lowering your total cost of ownership.
            </p>
          </div>

          <div className="p-6 bg-black/[0.03] rounded-[6px]">
            <h3 className="text-[18px] font-medium text-near-black mb-2">Worry-Free Printing</h3>
            <p className="text-[16px] font-medium text-near-black/50 leading-[1.5]">
              With Orient Smart AMC, focus on your business while we take care of your
              equipment. Enjoy peace of mind with reliable, scheduled servicing.
            </p>
          </div>

          <div className="p-6 bg-black/[0.03] rounded-[6px] border border-black/10">
            <h3 className="text-[18px] font-medium text-orient-red mb-2">24/7 Telephonic Support</h3>
            <p className="text-[16px] font-medium text-near-black/50 leading-[1.5]">
              Round-the-clock phone support from Orient engineers who know your equipment inside
              and out.
            </p>
          </div>
        </div>
        </div>

        <div className="lg:w-[42%] shrink-0 w-full">
          <div className="relative bg-black/[0.03] rounded-[6px] overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
            <Image
              src="/images/amc-servicing.jpg"
              alt="Orient press close-up"
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
