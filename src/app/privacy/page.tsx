import PageShell from "@/components/PageShell";

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy Policy">
      <div className="prose prose-invert max-w-3xl">
        <p className="text-[18px] font-medium text-white/50 leading-[1.6] mb-6">This Privacy Policy outlines how Orient (The Printers House) collects, uses, and protects your personal information when you visit our website or engage with our services.</p>
        <h3 className="text-[20px] font-medium text-white mb-3 mt-10">Information We Collect</h3>
        <p className="text-[16px] font-medium text-white/40 leading-[1.6] mb-4">We collect information you provide directly, such as your name, email address, phone number, and company details when you submit enquiry forms or subscribe to our newsletter.</p>
        <h3 className="text-[20px] font-medium text-white mb-3 mt-10">How We Use Your Information</h3>
        <p className="text-[16px] font-medium text-white/40 leading-[1.6] mb-4">Your information is used to respond to your enquiries, provide product information, process orders, and send relevant updates about Orient products and services.</p>
        <h3 className="text-[20px] font-medium text-white mb-3 mt-10">Data Protection</h3>
        <p className="text-[16px] font-medium text-white/40 leading-[1.6] mb-4">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or disclosure.</p>
        <h3 className="text-[20px] font-medium text-white mb-3 mt-10">Contact</h3>
        <p className="text-[16px] font-medium text-white/40 leading-[1.6]">For questions about this policy, contact us at tphho@tphorient.com or +91 11 2331 3071.</p>
      </div>
    </PageShell>
  );
}
