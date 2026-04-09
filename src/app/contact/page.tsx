"use client";

import { useState } from "react";
import PageShell from "@/components/PageShell";

/* ── Contact data from tphorient.com/contact.php ── */

const hq = {
  address: "10, Scindia House, Connaught Place\nNew Delhi, India",
  tel: "+91 11 2331 3071 / 72 / 73 / 75",
  mobile: "+91 9555122981",
  fax: "+91 11 2331 0490",
  email: "tphho@tphorient.com",
};

const branches: { state: string; offices: { city: string; address: string; email: string; mobile: string }[] }[] = [
  { state: "Andhra Pradesh", offices: [{ city: "Hyderabad", address: "3-4-424/22, 2nd Floor,\nRahul Tower, Narayanguda", email: "shekhar@tphorient.co", mobile: "+91 11 2331 3071/72/73/75" }] },
  { state: "Assam", offices: [{ city: "Guwahati", address: "H.No. 23, Milanpath,\nAmbarifatashil", email: "biswajit@tphorient.com", mobile: "+91 11 2331 3071/72/73/75" }] },
  { state: "Gujarat", offices: [{ city: "Ahmedabad", address: "Flat No.B-706, Fairdeal House,\nNavarangpura", email: "tphho@tphorient.com", mobile: "+91 11 2331 3071/72/73/75" }] },
  { state: "Karnataka", offices: [{ city: "Bangalore", address: "City Point,\nInfantry Road", email: "anil@tphorient.com", mobile: "+91 11 2331 3071/72/73/75" }] },
  { state: "Kerala", offices: [{ city: "Thiruvananthapuram", address: "2 Vasantha Apartments,\nManjalikulam Road", email: "anil@tphorient.com", mobile: "+91 11 2331 3071/72/73/75" }] },
  { state: "Maharashtra", offices: [{ city: "Mumbai", address: "P Box -15-91,\nMalhotra House", email: "arnabp@tphorient.com", mobile: "+91 11 2331 3071/72/73/75" }] },
  { state: "Odisha", offices: [{ city: "Bhubaneswar", address: "Plot No.1360, Bhimatangi,\nKapila Prasad", email: "arnabp@tphorient.com", mobile: "+91 11 2331 3071/72/73/75" }] },
  { state: "Tamil Nadu", offices: [{ city: "Chennai", address: "11, First Floor, Wellington Estate,\nNo.53, Ethiraj Salai, Egmore", email: "saravanakumar@tphorient.com", mobile: "+91 11 2331 3071/72/73/75" }] },
  { state: "West Bengal", offices: [{ city: "Kolkata", address: "Unit No-239-B, 2nd Floor,\nKamalaya Centre, 156 A, Lenin Street", email: "ajaypal@tphorient.com", mobile: "+91 11 2331 3071/72/73/75" }] },
];

const spareParts = {
  domestic: { email: "netrapal@tphorient.com", mobile: "+91 98107 33931" },
  export: { email: "netrapal@tphorient.com", mobile: "+91 98107 33931" },
};

const promo = { email: "amarjeet@tphorient.com" };
const amc = { mobile: "+91 98107 33931", email: "netrapal@tphorient.com" };

/* ── Chevron icon ── */
function Chevron({ open }: { open: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`shrink-0 transition-transform duration-200 ${open ? "rotate-90" : ""}`}>
      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Contact detail line ── */
function Detail({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <p className="text-[14px] text-near-black/50 leading-relaxed">
      <span className="text-near-black/30">{label}: </span>
      {href ? <a href={href} className="hover:text-near-black transition-colors">{value}</a> : value}
    </p>
  );
}

/* ── Tree node (accordion) ── */
function TreeNode({ label, badge, defaultOpen, children }: { label: string; badge?: string; defaultOpen?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  return (
    <div className="border-l border-black/[0.08] ml-3">
      <button onClick={() => setOpen(!open)} className="flex items-center gap-2 w-full text-left py-3 pl-4 pr-2 hover:bg-black/[0.02] transition-colors rounded-r-lg">
        <Chevron open={open} />
        <span className="text-[15px] font-medium text-near-black/70">{label}</span>
        {badge && <span className="text-[11px] font-medium text-near-black/25 bg-black/[0.04] px-2 py-0.5 rounded-full ml-auto">{badge}</span>}
      </button>
      {open && <div className="pl-6 pb-3">{children}</div>}
    </div>
  );
}

/* ── Leaf card ── */
function ContactCard({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="bg-black/[0.02] rounded-lg p-4 mb-2">
      {title && <p className="text-[14px] font-medium text-near-black/60 mb-2">{title}</p>}
      <div className="space-y-1">{children}</div>
    </div>
  );
}

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const fd = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fd.get("name"),
        email: fd.get("email"),
        phone: fd.get("phone"),
        interest: fd.get("interest"),
        message: fd.get("message"),
      }),
    });

    setStatus(res.ok ? "sent" : "error");
  }

  return (
    <PageShell title="Contact Us" subtitle="We'd love to hear from you. Reach out to our team.">
      {/* Top: form + HQ */}
      <div className="flex flex-col lg:flex-row gap-16 mb-20">
        <div className="w-full max-w-lg">
          {status === "sent" ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <p className="text-[18px] font-medium text-green-800 mb-2">Thank you!</p>
              <p className="text-[15px] text-green-700">We&apos;ve received your message and will get back to you shortly.</p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="name" type="text" placeholder="Your Name" className="input-field" required />
                <input name="email" type="email" placeholder="Email Address" className="input-field" required />
              </div>
              <input name="phone" type="tel" placeholder="Phone Number" className="input-field" />
              <select name="interest" className="input-field appearance-none text-near-black/40" required>
                <option value="">Select Interest</option>
                <option value="New Press Enquiry">New Press Enquiry</option>
                <option value="Add-on for Existing Press">Add-on for Existing Press</option>
                <option value="AMC & Servicing">AMC &amp; Servicing</option>
                <option value="Spare Parts">Spare Parts</option>
                <option value="Other">Other</option>
              </select>
              <textarea name="message" placeholder="Your Message" className="input-field" style={{ height: 140, paddingTop: 16, resize: "none" }} />
              <button type="submit" disabled={status === "sending"} className="btn btn-cream text-[16px] w-full justify-center">
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
              {status === "error" && (
                <p className="text-[14px] text-red-600">Something went wrong. Please try again or email us directly.</p>
              )}
            </form>
          )}
        </div>

        <div className="lg:w-[40%] space-y-5">
          <div className="rounded-xl overflow-hidden" style={{ height: 220 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9!2d77.2195!3d28.6325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sScindia%20House%2C%20Connaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="bg-black/[0.03] rounded-[6px] p-8">
            <h3 className="text-[20px] font-medium text-near-black mb-4">Corporate Headquarters</h3>
            <p className="text-[16px] font-medium text-near-black/40 leading-[1.5] mb-3 whitespace-pre-line">{hq.address}</p>
            <Detail label="Tel" value={hq.tel} href={`tel:${hq.tel.replace(/\s/g, "")}`} />
            <Detail label="Mobile" value={hq.mobile} href={`tel:${hq.mobile.replace(/\s/g, "")}`} />
            <Detail label="Fax" value={hq.fax} />
            <Detail label="Email" value={hq.email} href={`mailto:${hq.email}`} />
          </div>
        </div>
      </div>

      {/* Contact Directory Tree */}
      <h3 className="text-[24px] font-medium text-near-black mb-6">Contact Directory</h3>
      <div className="max-w-2xl space-y-1">
        {/* Corporate HQ */}
        <TreeNode label="Corporate Office & Headquarters" defaultOpen>
          <ContactCard>
            <p className="text-[14px] text-near-black/50 whitespace-pre-line leading-relaxed mb-2">{hq.address}</p>
            <Detail label="Tel" value={hq.tel} href={`tel:${hq.tel.replace(/\s/g, "")}`} />
            <Detail label="Mobile" value={hq.mobile} href={`tel:${hq.mobile.replace(/\s/g, "")}`} />
            <Detail label="Fax" value={hq.fax} />
            <Detail label="Email" value={hq.email} href={`mailto:${hq.email}`} />
          </ContactCard>
        </TreeNode>

        {/* Domestic Branches */}
        <TreeNode label="Domestic Branch Offices" badge={`${branches.length} states`}>
          {branches.map((b) => (
            <TreeNode key={b.state} label={b.state}>
              {b.offices.map((o) => (
                <ContactCard key={o.city} title={o.city}>
                  <p className="text-[14px] text-near-black/50 whitespace-pre-line leading-relaxed mb-1">{o.address}</p>
                  <Detail label="Email" value={o.email} href={`mailto:${o.email}`} />
                  <Detail label="Mobile" value={o.mobile} href={`tel:${o.mobile.replace(/\s/g, "")}`} />
                </ContactCard>
              ))}
            </TreeNode>
          ))}
        </TreeNode>

        {/* Spare Parts */}
        <TreeNode label="Spare Parts Sales">
          <ContactCard title="Domestic">
            <Detail label="Email" value={spareParts.domestic.email} href={`mailto:${spareParts.domestic.email}`} />
            <Detail label="Mobile" value={spareParts.domestic.mobile} href={`tel:${spareParts.domestic.mobile.replace(/\s/g, "")}`} />
          </ContactCard>
          <ContactCard title="Export">
            <Detail label="Email" value={spareParts.export.email} href={`mailto:${spareParts.export.email}`} />
            <Detail label="Mobile" value={spareParts.export.mobile} href={`tel:${spareParts.export.mobile.replace(/\s/g, "")}`} />
          </ContactCard>
        </TreeNode>

        {/* Promotional & PR */}
        <TreeNode label="Promotional & PR">
          <ContactCard>
            <Detail label="Email" value={promo.email} href={`mailto:${promo.email}`} />
          </ContactCard>
        </TreeNode>

        {/* AMC */}
        <TreeNode label="AMC and Servicing">
          <ContactCard>
            <Detail label="Mobile" value={amc.mobile} href={`tel:${amc.mobile.replace(/\s/g, "")}`} />
            <Detail label="Email" value={amc.email} href={`mailto:${amc.email}`} />
          </ContactCard>
        </TreeNode>
      </div>
    </PageShell>
  );
}
