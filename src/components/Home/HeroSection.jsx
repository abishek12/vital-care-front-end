"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
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

  return (
    <motion.section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden min-h-screen flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <BackgroundImage />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-12 md:gap-8 md:px-6 md:py-16 lg:py-20">
        <LeftContent />
        <RightBadges />
      </div>

      <ScrollIndicator />
    </motion.section>
  );
}

function BackgroundImage() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/home_hero.jpeg"
        alt="Care professional assisting a client at home"
        className="h-full w-full object-cover object-center"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}

function LeftContent() {
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="md:col-span-8 lg:col-span-7 text-white space-y-6"
      variants={itemVariants}
    >
      <WelcomeBadge />
      <MainHeading />
      <DescriptionText />
      <ActionButtons />
    </motion.div>
  );
}

function WelcomeBadge() {
  const badgeVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="inline-flex rounded-full border border-[#3aa657] bg-white/10 px-4 py-2 text-sm font-semibold text-[#f0f8ff] ring-1 ring-inset ring-[#3aa657]/30 backdrop-blur-sm"
      variants={badgeVariants}
      whileHover="hover"
    >
      WELCOME TO VITAL CARE GROUP
    </motion.div>
  );
}

function MainHeading() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  return (
    <motion.h1
      id="hero-heading"
      className="mt-2 text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl"
      variants={textVariants}
    >
      <span className="block text-white">VITAL CARE GROUP OFFERS YOU</span>
      <motion.span
        className="block text-[#e23d35] mt-2 font-extrabold"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.7, type: "spring" }}
      >
        IN‑HOME SUPPORT
      </motion.span>
    </motion.h1>
  );
}

function DescriptionText() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 1.0,
      },
    },
  };

  return (
    <motion.p
      className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl"
      variants={textVariants}
    >
      Vital Care Group provides tailored in‑home support to meet your unique
      needs. Whether you're looking for help at home, community participation,
      or specialised care, we're here to empower and support you every step of
      the way.
    </motion.p>
  );
}

function ActionButtons() {
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 1.2,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="mt-8 flex flex-wrap items-center gap-4"
      variants={buttonVariants}
    >
      <motion.a
        href="/contact"
        className="inline-flex items-center rounded-full bg-[#0b3a74] hover:bg-[#0a3366] text-white px-8 py-4 text-base font-semibold shadow-lg transition-all duration-300"
        whileHover="hover"
      >
        Contact Us
      </motion.a>
      <motion.a
        href="/services"
        className="inline-flex items-center rounded-full bg-transparent hover:bg-white/10 text-white px-8 py-4 text-base font-semibold ring-2 ring-white/80 ring-inset transition-all duration-300"
        whileHover={{
          scale: 1.05,
          backgroundColor: "rgba(255, 255, 255, 0.15)",
        }}
      >
        Our Services
      </motion.a>
    </motion.div>
  );
}

function RightBadges() {
  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="md:col-span-4 lg:col-span-5"
      variants={containerVariants}
    >
      <div className="flex flex-col items-center gap-8 md:items-end">
        <div className="grid grid-cols-2 gap-6">
          <motion.div
            className="flex flex-col items-center justify-center rounded-2xl p-6"
            variants={itemVariants}
            whileHover="hover"
          >
            <Image
              src="/images/ndis.png"
              width={120}
              height={120}
              alt="NDIS Certified Provider"
              className="h-auto"
            />
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center rounded-2xl p-6"
            variants={itemVariants}
            whileHover="hover"
          >
            <Image
              src="/images/support-ndis.png"
              width={120}
              height={120}
              alt="Support and NDIS badge"
              className="h-auto"
            />
          </motion.div>
        </div>
        <motion.div
          className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm ring-1 ring-white/20 max-w-xs"
          variants={itemVariants}
          whileHover="hover"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3aa657]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-sm text-white">Registered NDIS provider</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ScrollIndicator() {
  const scrollVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 2.0,
      },
    },
    bounce: {
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      variants={scrollVariants}
      initial="hidden"
      animate={["visible", "bounce"]}
      onClick={handleScroll}
    >
      <div className="flex flex-col items-center">
        <span className="text-white text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <ChevronDown className="h-6 w-6 text-white" />
        </motion.div>
      </div>
    </motion.div>
  );
}
