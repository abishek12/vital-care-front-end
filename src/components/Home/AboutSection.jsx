"use client";
import {
  UserRound,
  ClipboardPlus,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

import { motion } from "framer-motion";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 30,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      x: -50,
      opacity: 0,
      rotate: -2,
    },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const featureContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  return (
    <motion.section
      id="about"
      aria-labelledby="about-heading"
      className="relative bg-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#0b3a74]/5"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#e23d35]/5"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 relative z-10">
        {/* Row 1: Copy left, image right */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          {/* Left copy */}
          <motion.div className="md:col-span-7" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center rounded-full border border-[#3aa657] bg-white px-3 py-1 text-xs font-semibold text-[#3aa657] ring-1 ring-inset ring-[#3aa657]/30"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              WHO WE ARE
            </motion.div>

            <motion.h2
              id="about-heading"
              className="mt-4 text-4xl tracking-tight sm:text-5xl"
              variants={itemVariants}
            >
              <span className="text-[#e23d35] font-light">
                Personalised Support For
              </span>
              <br />
              <span className="text-[#0b3a74] font-extrabold">
                A Brighter Future
              </span>
            </motion.h2>

            <motion.div
              className="mt-5 max-w-2xl space-y-4 text-[15px] leading-relaxed text-gray-700"
              variants={itemVariants}
            >
              <motion.p variants={itemVariants}>
                At Vital Care Group, the challenges faced by individuals with
                disabilities serve as our driving force, especially the struggle
                for access to essential services and personalised care. We
                believe everyone deserves more than just care—they deserve
                dignity, choice, and meaningful opportunities.
              </motion.p>
              <motion.p variants={itemVariants}>
                As a trusted NDIS service provider in NSW, we aim to offer
                personalised in‑home and community support that truly makes a
                difference. Our team brings extensive experience across a wide
                range of clinical and educational settings in the disability
                sector.
              </motion.p>
            </motion.div>

            <motion.div className="mt-7" variants={itemVariants}>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full bg-[#0b3a74] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0a3366] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b3a74] transition-all duration-300 hover:shadow-lg"
              >
                Our Story
              </Link>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="md:col-span-5"
            variants={imageVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Vital-Care-Group-9.jpg"
              alt="Participants smiling together outdoors"
              className="aspect-[16/10] w-full rounded-2xl object-cover shadow-lg"
            />
          </motion.div>
        </div>

        {/* Row 2: Image left, Features right */}
        <div className="mt-12 grid grid-cols-1 items-start gap-10 md:mt-16 md:grid-cols-12">
          {/* Left image */}
          <motion.div
            className="md:col-span-6"
            variants={imageVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Vital-Care-Group-10.jpg"
              alt="Support worker and participant celebrating together"
              className="aspect-[16/10] w-full rounded-2xl object-cover shadow-lg"
            />
          </motion.div>

          {/* Right features */}
          <motion.div
            className="md:col-span-6"
            variants={featureContainerVariants}
          >
            <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
              {features.map((f, index) => (
                <Feature key={f.title1} {...f} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

const features = [
  {
    icon: UserRound,
    title1: "Person‑Centered",
    title2: "Care",
    desc: "We customise support to fit your unique needs and goals, ensuring that care is meaningful and effective for you.",
  },
  {
    icon: ClipboardPlus,
    title1: "Adherence To NDIS",
    title2: "Regulations",
    desc: "We strictly follow NDIS rules, regularly update our policies, and conduct audits to maintain high standards.",
  },
  {
    icon: HeartHandshake,
    title1: "Commitment To",
    title2: "High‑Quality Care",
    desc: "We are dedicated to delivering top‑quality care and support, demonstrating our commitment to excellence.",
  },
  {
    icon: Sparkles,
    title1: "Flexible Support",
    title2: "Options",
    desc: "We offer a range of flexible options to match your preferences and schedule so you get care when needed.",
  },
];

function Feature({ icon: Icon, title1, title2, desc, index }) {
  const featureVariants = {
    hidden: {
      y: 30,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      },
    },
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: index * 0.1 + 0.2,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="flex flex-col"
      variants={featureVariants}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      <motion.div
        className="mb-4 inline-flex size-14 items-center justify-center rounded-full bg-[#e23d35] text-white shadow-md ring-4 ring-[#e23d35]/20"
        variants={iconVariants}
        whileHover="hover"
      >
        <Icon className="size-7" aria-hidden="true" />
      </motion.div>
      <h3 className="text-xl font-extrabold leading-tight text-[#0b3a74]">
        <span className="block">{title1}</span>
        <span className="block">{title2}</span>
      </h3>
      <motion.p
        className="mt-2 text-sm leading-relaxed text-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
      >
        {desc}
      </motion.p>
    </motion.div>
  );
}
