"use client";

import PageShell from "@/components/PageShell";

const branches = [
  { city: "Hyderabad", email: "tphhyd@tphorient.com" },
  { city: "Ahmedabad", email: "tphahd@tphorient.com" },
  { city: "Guwahati", email: "tphguw@tphorient.com" },
  { city: "Bhubaneswar", email: "tphbbsr@tphorient.com" },
  { city: "Bangalore", email: "tphblr@tphorient.com" },
  { city: "Trivandrum", email: "tphtvm@tphorient.com" },
  { city: "Mumbai", email: "tphmum@tphorient.com" },
  { city: "Chennai", email: "tphche@tphorient.com" },
  { city: "Kolkata", email: "tphkol@tphorient.com" },
];

export default function ContactPage() {
  return (
    <PageShell title="Contact Us" subtitle="We'd love to hear from you. Reach out to our team.">
      <div className="flex flex-col lg:flex-row gap-16 mb-20">
        <div className="w-full max-w-lg">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="input-field" />
              <input type="email" placeholder="Email Address" className="input-field" />
            </div>
            <input type="tel" placeholder="Phone Number" className="input-field" />
            <select className="input-field appearance-none text-near-black/40">
              <option value="">Select Interest</option>
              <option>New Press Enquiry</option>
              <option>Add-on for Existing Press</option>
              <option>AMC & Servicing</option>
              <option>Spare Parts</option>
              <option>Other</option>
            </select>
            <textarea placeholder="Your Message" className="input-field" style={{ height: 140, paddingTop: 16, resize: "none" }} />
            <button type="submit" className="btn btn-cream text-[16px] w-full justify-center">Send Message</button>
          </form>
        </div>

        <div className="lg:w-[40%] space-y-6">
          <div className="bg-black/[0.03] rounded-[6px] p-8">
            <h3 className="text-[20px] font-medium text-near-black mb-4">Corporate Headquarters</h3>
            <p className="text-[16px] font-medium text-near-black/40 leading-[1.5] mb-3">10, Scindia House, Connaught Place<br />New Delhi, India</p>
            <p className="text-[16px] font-medium text-near-black/40 mb-2">+91 11 2331 3071 / 72 / 73 / 75</p>
            <p className="text-[16px] font-medium text-near-black/40 mb-2">Mobile: +91 9555122981</p>
            <p className="text-[16px] font-medium text-near-black/40">tphho@tphorient.com</p>
          </div>
          <div className="bg-black/[0.03] rounded-[6px] p-8">
            <h3 className="text-[20px] font-medium text-near-black mb-2">International Sales</h3>
            <p className="text-[16px] font-medium text-near-black/40">+91 9810 783837</p>
          </div>
        </div>
      </div>

      <h3 className="text-[24px] font-medium text-near-black mb-8">Branch Offices Across India</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {branches.map((b) => (
          <div key={b.city} className="flex items-center justify-between p-5 bg-black/[0.03] rounded-[6px]">
            <span className="text-[16px] font-medium text-near-black/60">{b.city}</span>
            <span className="text-[14px] font-medium text-near-black/25">{b.email}</span>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
