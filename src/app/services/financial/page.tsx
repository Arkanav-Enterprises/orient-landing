import PageShell from "@/components/PageShell";

export default function FinancialSupportPage() {
  return (
    <PageShell title="Financial Support" subtitle="Tailored Financing Solutions">
      <div className="max-w-[720px]">
        <p className="text-[18px] font-medium text-near-black/60 leading-[1.6] mb-8">
          Orient offers tailored financing options to help you acquire the equipment you need
          without straining your capital. Through partnerships with leading leasing companies and
          banks, we provide flexible solutions that fit your business requirements.
        </p>

        <div className="space-y-6">
          <div className="p-6 bg-black/[0.03] rounded-[6px]">
            <h3 className="text-[18px] font-medium text-near-black mb-2">Tailored Financing</h3>
            <p className="text-[16px] font-medium text-near-black/50 leading-[1.5]">
              Customized payment plans structured around your cash flow and business cycle,
              making capital equipment investment accessible.
            </p>
          </div>

          <div className="p-6 bg-black/[0.03] rounded-[6px]">
            <h3 className="text-[18px] font-medium text-near-black mb-2">Leasing Partnerships</h3>
            <p className="text-[16px] font-medium text-near-black/50 leading-[1.5]">
              Established relationships with reputable leasing companies offering competitive
              rates and terms for Orient equipment.
            </p>
          </div>

          <div className="p-6 bg-black/[0.03] rounded-[6px]">
            <h3 className="text-[18px] font-medium text-near-black mb-2">Banking Partnerships</h3>
            <p className="text-[16px] font-medium text-near-black/50 leading-[1.5]">
              Direct partnerships with banks to streamline the financing process, with
              preferential terms available for Orient customers.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
