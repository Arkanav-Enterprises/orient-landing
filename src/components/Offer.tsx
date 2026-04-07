"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const offers = [
  { title: "New Press Enquiry", desc: "Explore our full range of offset, flexo, and inkjet presses for your new production line.", img: "/images/offer-new-press.jpg" },
  { title: "Upgrade Existing Press", desc: "Add-ons, modules, and modernization packages for your current Orient equipment.", img: "/images/offer-upgrade.jpg" },
];

export default function Offer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ marginTop: 200, marginBottom: 160 }}>
      <div className="container-site">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-medium leading-[1.1] text-near-black text-center mb-16"
          style={{ fontSize: "clamp(28px, 3.2vw, 50px)", maxWidth: 700, margin: "0 auto 64px" }}
        >
          For Every Printing Need, Current or Future
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 24 }}>
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group"
            >
              <Link
                href="/contact"
                aria-label={offer.title}
                className="relative bg-[#dddddc] rounded-xl overflow-hidden flex items-end p-6 h-[280px] md:h-[403px] cursor-pointer"
              >
                <Image src={offer.img} alt={offer.title} fill className="object-cover" />
                <p
                  className="relative z-10 text-[30px] font-medium leading-[1.3] text-white"
                  style={{ textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
                >
                  {offer.title}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
