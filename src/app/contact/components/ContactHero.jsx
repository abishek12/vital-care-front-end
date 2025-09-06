"use client";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#0b3a74]/10 to-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeIn}
            className="inline-flex items-center rounded-full border border-[#3aa657] bg-white px-3 py-1 text-xs font-semibold text-[#3aa657] ring-1 ring-inset ring-[#3aa657]/30"
          >
            We're here to help
          </motion.div>
          <motion.h1
            variants={fadeIn}
            className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            <span className="text-[#e23d35]">Contact</span>{" "}
            <span className="text-[#0b3a74]">Vital Care Group</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="mt-4 max-w-2xl text-[15px] leading-relaxed text-gray-700"
          >
            Send us a message and our team will get back to you within one
            business day. If your enquiry is urgent, please call us.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
