"use client";
import {
  HeartHandshake,
  ShieldCheck,
  Users2,
  Clock,
  Stethoscope,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

import { AboutValueCard } from "@/components/Card/AboutCard";

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

const headerVariants = {
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

const AboutValue = () => {
    return(
        <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <motion.h2 
            className="text-3xl font-extrabold tracking-tight text-[#0b3a74] sm:text-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={headerVariants}
          >
            Our Core Values
          </motion.h2>
          <motion.p 
            className="mt-3 max-w-2xl text-sm text-gray-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={headerVariants}
            transition={{ delay: 0.1 }}
          >
            We're guided by principles that ensure safe, meaningful and
            person‑centred care.
          </motion.p>

          <motion.div 
            className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <AboutValueCard
              icon={HeartHandshake}
              title="Compassion"
              desc="We listen first and support with empathy and respect."
            />
            <AboutValueCard
              icon={ShieldCheck}
              title="Safety & Quality"
              desc="We adhere to best practice and NDIS standards in everything we do."
            />
            <AboutValueCard
              icon={Users2}
              title="Person‑Centred"
              desc="You make the decisions. We build supports around your goals."
            />
            <AboutValueCard
              icon={Clock}
              title="Reliability"
              desc="Consistent, dependable support you can count on."
            />
            <AboutValueCard
              icon={Stethoscope}
              title="Clinical Excellence"
              desc="Led by experienced clinicians and trained support staff."
            />
            <AboutValueCard
              icon={Sparkles}
              title="Continuous Improvement"
              desc="We keep learning and refining to deliver better outcomes."
            />
          </motion.div>
        </div>
      </section>
    );
}

export default AboutValue;