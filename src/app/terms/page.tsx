import PageShell from "@/components/PageShell";

export default function TermsPage() {
  return (
    <PageShell title="Terms & Conditions">
      <div className="prose prose-invert max-w-3xl">
        <p className="text-[18px] font-medium text-near-black/50 leading-[1.6] mb-6">These terms and conditions govern your use of the Orient (The Printers House) website and services.</p>
        <h3 className="text-[20px] font-medium text-near-black mb-3 mt-10">Use of Website</h3>
        <p className="text-[16px] font-medium text-near-black/40 leading-[1.6] mb-4">This website is provided for informational purposes about Orient products and services. Content may not be reproduced without prior written consent.</p>
        <h3 className="text-[20px] font-medium text-near-black mb-3 mt-10">Product Information</h3>
        <p className="text-[16px] font-medium text-near-black/40 leading-[1.6] mb-4">While we strive for accuracy, product specifications and availability are subject to change. Please contact our sales team for the most current information.</p>
        <h3 className="text-[20px] font-medium text-near-black mb-3 mt-10">Intellectual Property</h3>
        <p className="text-[16px] font-medium text-near-black/40 leading-[1.6] mb-4">All trademarks, logos, and content on this website are the property of The Printers House (TPH Orient Group).</p>
        <h3 className="text-[20px] font-medium text-near-black mb-3 mt-10">Governing Law</h3>
        <p className="text-[16px] font-medium text-near-black/40 leading-[1.6]">These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi.</p>
      </div>
    </PageShell>
  );
}
