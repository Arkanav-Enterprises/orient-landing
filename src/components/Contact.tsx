"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contacts" ref={ref} style={{ marginBottom: 10 }}>
      <div className="container-site">
        <div className="rounded-xl bg-[#111]" style={{ padding: "80px 76px 100px" }}>
          {/* Centered heading */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-[30px] font-medium leading-[1.3] text-white text-center mb-12 mx-auto"
            style={{ maxWidth: 500 }}
          >
            Get a Personalized Quote for Your Printing Needs.
          </motion.h3>

          {/* Two equal columns, centered */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left — form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm text-white/30 mb-2 block">Name</label>
                  <input type="text" placeholder="Your Name" className="input-field" />
                </div>
                <div>
                  <label className="text-sm text-white/30 mb-2 block">Company</label>
                  <input type="text" placeholder="Company Name" className="input-field" />
                </div>
                <div>
                  <label className="text-sm text-white/30 mb-2 block">Email</label>
                  <input type="email" placeholder="you@company.com" className="input-field" />
                </div>
                <div>
                  <label className="text-sm text-white/30 mb-2 block">Interest</label>
                  <select className="input-field appearance-none text-white/40">
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
              <div className="bg-white/[0.03] rounded-xl flex items-center justify-center flex-1" style={{ minHeight: 200 }}>
                <span className="text-white/5 text-sm">Orient Headquarters</span>
              </div>
              <div className="bg-white/[0.03] rounded-xl p-8">
                <h4 className="text-lg font-medium text-white mb-4">Headquarters</h4>
                <p className="text-base text-white/40 leading-relaxed mb-3">10, Scindia House, Connaught Place<br />New Delhi, India</p>
                <p className="text-base text-white/40 leading-relaxed mb-3">+91 11 2331 3071 / 72 / 73 / 75</p>
                <p className="text-base text-white/40">tphho@tphorient.com</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
