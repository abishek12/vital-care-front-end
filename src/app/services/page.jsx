"use client";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ServiceCard from "@/components/Services/services-card";
import { SERVICES } from "@/lib/data/services";
import Link from "next/link";
import { motion } from "framer-motion";
import ServiceHero from "./components/ServiceHero";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5
    }
  }
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Intro hero */}
      <ServiceHero />

      {/* Services grid */}
      <section
        aria-labelledby="services-grid-title"
        className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-24"
      >
        <h2 id="services-grid-title" className="sr-only">
          Available services
        </h2>

        <motion.div 
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SERVICES.map((s, index) => (
            <motion.div key={s.slug} variants={itemVariants}>
              <ServiceCard
                title={s.title}
                description={s.description}
                icon={s.icon}
                id={s.slug}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-10 text-center"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#e23d35] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#cc2f28] transition-colors duration-300"
          >
            Can't find what you need? Talk to us
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}