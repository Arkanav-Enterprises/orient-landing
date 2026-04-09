"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
        company: fd.get("company"),
        email: fd.get("email"),
        interest: fd.get("interest"),
      }),
    });

    setStatus(res.ok ? "sent" : "error");
  }

  return (
    <section id="contacts" ref={ref} style={{ marginBottom: 10 }}>
      <div className="container-site">
        <div className="rounded-xl bg-[#f5f5f4] px-4 py-8 md:px-[76px] md:py-[80px] md:pb-[100px]">
          {/* Centered heading */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-[30px] font-medium leading-[1.3] text-near-black text-center mb-12 mx-auto"
            style={{ maxWidth: 500 }}
          >
            Get a Personalized Quote for Your Printing Needs.
          </motion.h3>

          {/* Two equal columns, centered */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left — form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
              {status === "sent" ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <p className="text-[18px] font-medium text-green-800 mb-2">Thank you!</p>
                  <p className="text-[15px] text-green-700">We&apos;ve received your enquiry and will get back to you shortly.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="text-sm text-near-black/40 mb-2 block">Name</label>
                    <input name="name" type="text" placeholder="Your Name" className="input-field" required />
                  </div>
                  <div>
                    <label className="text-sm text-near-black/40 mb-2 block">Company</label>
                    <input name="company" type="text" placeholder="Company Name" className="input-field" />
                  </div>
                  <div>
                    <label className="text-sm text-near-black/40 mb-2 block">Email</label>
                    <input name="email" type="email" placeholder="you@company.com" className="input-field" required />
                  </div>
                  <div>
                    <label className="text-sm text-near-black/40 mb-2 block">Interest</label>
                    <select name="interest" className="input-field appearance-none text-near-black/40" required>
                      <option value="">Select Your Interest</option>
                      <option value="New Press Enquiry">New Press Enquiry</option>
                      <option value="Add-on for Existing Press">Add-on for Existing Press</option>
                      <option value="AMC & Servicing">AMC &amp; Servicing</option>
                      <option value="Spare Parts">Spare Parts</option>
                    </select>
                  </div>
                  <button type="submit" disabled={status === "sending"} className="btn btn-cream text-sm h-11 px-8 rounded-xl mt-2">
                    {status === "sending" ? "Sending…" : "Send Enquiry"}
                  </button>
                  {status === "error" && (
                    <p className="text-[14px] text-red-600">Something went wrong. Please try again or email us directly.</p>
                  )}
                </form>
              )}
            </motion.div>

            {/* Right — info cards */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }} className="flex flex-col gap-5">
              <div className="rounded-xl overflow-hidden flex-1" style={{ minHeight: 200 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9!2d77.2195!3d28.6325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sScindia%20House%2C%20Connaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 200 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="bg-black/[0.03] rounded-xl p-8">
                <h4 className="text-lg font-medium text-near-black mb-4">Headquarters</h4>
                <p className="text-base text-near-black/40 leading-relaxed mb-3">10, Scindia House, Connaught Place<br />New Delhi, India</p>
                <p className="text-base text-near-black/40 leading-relaxed mb-3">+91 11 2331 3071 / 72 / 73 / 75</p>
                <p className="text-base text-near-black/40">tphho@tphorient.com</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
