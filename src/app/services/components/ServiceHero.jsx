"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import BookAssessmentDrawer from "@/components/Buton/AssessmentButton";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const ServiceHero = () => {
  return (
    <motion.section 
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#0b3a74]/5 to-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <div className="max-w-3xl">
          <motion.div 
            className="inline-flex items-center rounded-full border border-[#3aa657] bg-white px-3 py-1 text-xs font-semibold text-[#3aa657] ring-1 ring-inset ring-[#3aa657]/30"
            variants={itemVariants}
          >
            Our Services
          </motion.div>
          <motion.h1 
            className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl"
            variants={itemVariants}
          >
            <span className="text-[#e23d35]">Support Tailored</span>{" "}
            <span className="text-[#0b3a74]">To Your Goals</span>
          </motion.h1>
          <motion.p 
            className="mt-4 text-[15px] leading-relaxed text-gray-700"
            variants={itemVariants}
          >
            We provide person‑centred supports that promote independence,
            safety, and wellbeing—at home and in the community.
          </motion.p>

          <motion.div 
            className="mt-6 flex flex-wrap gap-3"
            variants={itemVariants}
          >
            <BookAssessmentDrawer
              trigger={
                <motion.button 
                  className="rounded-full bg-[#0b3a74] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0a3a66] cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book An Assessment
                </motion.button>
              }
            />{" "}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-[#0b3a74]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#0b3a74] hover:bg-[#0b3a74]/5"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceHero;