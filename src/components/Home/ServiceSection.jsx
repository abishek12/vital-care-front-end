"use client";
import { ClipboardList, Home } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.section
      id="services"
      aria-labelledby="services-heading"
      className="relative bg-[#0b3a74] text-white py-16 md:py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#e23d35]/10"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
      />
      <motion.div
        className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-[#3aa657]/10"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 1 }}
      />

      <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left: Headline + CTA */}
          <motion.div className="lg:col-span-5" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center rounded-full border border-[#3aa657] bg-white/5 px-3 py-1 text-xs font-semibold text-[#3aa657] ring-1 ring-inset ring-[#3aa657]/30"
              variants={badgeVariants}
              whileHover="hover"
            >
              EXPLORE MORE WITH US
            </motion.div>

            <motion.h2
              id="services-heading"
              className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl"
              variants={itemVariants}
            >
              <motion.span
                className="text-[#e23d35] font-light"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                Dedicated To Helping People With Disabilities
              </motion.span>
              <br />
              <motion.span
                className="text-white"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                Lead Their Best Lives
              </motion.span>
            </motion.h2>

            <motion.p
              className="mt-6 text-[15px] leading-relaxed text-white/85"
              variants={itemVariants}
            >
              At Vital Care Group, we provide essential NDIS support for
              participants in NSW that acts as a lifeline for individuals with
              disabilities.
            </motion.p>

            <motion.div className="mt-8" variants={itemVariants}>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-base font-semibold text-white ring-1 ring-white/25 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                More Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Service Cards */}
          <motion.div className="lg:col-span-7" variants={containerVariants}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <ServiceCard
                icon={ClipboardList}
                title="Daily Personal Activities"
                desc="We empower individuals with disabilities through personalised support. From personal hygiene and dressing to mobility, our compassionate staff is dedicated to helping you manage daily life with ease and confidence."
                delay={0.4}
              />
              <ServiceCard
                icon={Home}
                title="Household Tasks"
                desc="We help keep your home clean and comfortable with support for everyday chores like cleaning, laundry, and grocery shopping—so your space remains safe and welcoming."
                delay={0.6}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function ServiceCard({ icon: Icon, title, desc, delay = 0 }) {
  const cardVariants = {
    hidden: {
      y: 60,
      opacity: 0,
      rotateX: 10,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: delay,
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
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
        delay: delay + 0.2,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay + 0.4,
      },
    },
  };

  return (
    <motion.article
      className="relative rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset] ring-1 ring-white/10 backdrop-blur h-full flex flex-col"
      variants={cardVariants}
      whileHover="hover"
    >
      {/* Floating red icon badge */}
      <motion.div
        className="absolute -top-6 left-6 inline-flex items-center justify-center"
        variants={iconVariants}
        whileHover="hover"
      >
        <div className="inline-flex size-14 items-center justify-center rounded-full bg-[#e23d35] text-white shadow-lg ring-4 ring-[#e23d35]/25">
          <Icon className="size-7" aria-hidden="true" />
        </div>
      </motion.div>

      <motion.h3
        className="mt-6 text-xl font-extrabold leading-snug"
        variants={contentVariants}
      >
        {title}
      </motion.h3>
      <motion.p
        className="mt-3 text-sm leading-relaxed text-white/85 flex-grow"
        variants={contentVariants}
      >
        {desc}
      </motion.p>
    </motion.article>
  );
}
