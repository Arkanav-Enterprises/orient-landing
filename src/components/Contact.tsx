"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm text-near-black/40 mb-2 block">Name</label>
                  <input type="text" placeholder="Your Name" className="input-field" />
                </div>
                <div>
                  <label className="text-sm text-near-black/40 mb-2 block">Company</label>
                  <input type="text" placeholder="Company Name" className="input-field" />
                </div>
                <div>
                  <label className="text-sm text-near-black/40 mb-2 block">Email</label>
                  <input type="email" placeholder="you@company.com" className="input-field" />
                </div>
                <div>
                  <label className="text-sm text-near-black/40 mb-2 block">Interest</label>
                  <select className="input-field appearance-none text-near-black/40">
                    <option value="">Select Your Interest</option>
                    <option value="new-press">New Press Enquiry</option>
                    <option value="existing-press">Add-on for Existing Press</option>
                    <option value="amc">AMC & Servicing</option>
                    <option value="spare-parts">Spare Parts</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-cream text-sm h-11 px-8 rounded-xl mt-2">
                  Send Enquiry
                </button>
              </form>
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
