"use client"
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const AboutHero = () => {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/about-hero.jpeg"
          alt="Care team supporting a participant in a bright, welcoming space"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <motion.div 
          className="grid grid-cols-1 items-center gap-10 md:grid-cols-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="md:col-span-7">
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center rounded-full border border-[#3aa657] bg-white px-3 py-1 text-xs font-semibold text-[#3aa657] ring-1 ring-inset ring-[#3aa657]/30"
            >
              WHO WE ARE
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl"
            >
              <span className="text-[#e23d35] font-light">Personalised Support</span>{" "}
              <span className="text-[#0b3a74]">Led by Compassion</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-4 max-w-2xl text-[15px] leading-relaxed text-gray-800"
            >
              We help people live with dignity, choice, and independence. Our
              experienced team provides tailored in‑home and community support
              designed around your goals.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="mt-6 flex flex-wrap gap-3"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/services"
                  className="inline-flex items-center rounded-full bg-[#0b3a74] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0a3366] transition-colors"
                >
                  Explore Services <ArrowRight className="ml-2 size-4" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-[#0b3a74]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#0b3a74] hover:bg-[#0b3a74]/5 transition-colors"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            variants={imageVariants}
            className="md:col-span-5"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.4 }
            }}
          >
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/about-hero.jpeg"
                alt="Smiling participants together outdoors"
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;