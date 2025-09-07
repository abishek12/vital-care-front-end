"use client";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/Form/ContactForm";
import { MapPin, Mail, Phone, Clock, MessageCircleMore } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// export const metadata = {
//   title: "Contact Us | Vital Care Group",
//   description:
//     "Reach out to Vital Care Group for enquiries about NDIS supports, nursing care, or general questions. We're here to help.",
// };

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
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

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="md:col-span-7"
          >
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-extrabold text-[#0b3a74]">
                Send a message
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Tell us a little about yourself and what you're looking for.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="md:col-span-5"
          >
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="space-y-4 p-6">
                <h3 className="text-lg font-extrabold text-[#0b3a74]">
                  Contact details
                </h3>
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="space-y-3 text-sm"
                >
                  <motion.li
                    variants={fadeIn}
                    className="flex items-start gap-3"
                  >
                    <MapPin className="mt-0.5 size-4 text-gray-400" />
                    <span>Arncliffe, NSW 2205</span>
                  </motion.li>
                  <motion.li
                    variants={fadeIn}
                    className="flex items-center gap-3"
                  >
                    <Mail className="size-4 text-gray-400" />
                    <a
                      className="hover:text-[#0b3a74]"
                      href="mailto:info@vitalcaregroup.com.au"
                    >
                      info@vitalcaregroup.com.au
                    </a>
                  </motion.li>
                  <motion.li
                    variants={fadeIn}
                    className="flex items-center gap-3"
                  >
                    <Phone className="size-4 text-gray-400" />
                    <a className="hover:text-[#0b3a74]" href="tel:0403441882">
                      0403 441 882
                    </a>
                  </motion.li>
                  <motion.li
                    variants={fadeIn}
                    className="flex items-center gap-3"
                  >
                    <Clock className="size-4 text-gray-400" />
                    <span>Mon–Fri, 9:00 AM – 5:00 PM</span>
                  </motion.li>
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="rounded-lg bg-[#0b3a74]/5 p-4"
                >
                  <div className="flex items-start gap-3">
                    <MessageCircleMore className="mt-0.5 size-5 text-[#0b3a74]" />
                    <p className="text-sm text-gray-700">
                      Prefer to speak with someone?{" "}
                      <a
                        className="font-semibold text-[#0b3a74] underline underline-offset-4"
                        href="tel:0403441882"
                      >
                        Call us now
                      </a>{" "}
                      or{" "}
                      <Link
                        className="font-semibold text-[#0b3a74] underline underline-offset-4"
                        href="/book"
                      >
                        Book an Assessment
                      </Link>
                      .
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="h-64 w-full"
              >
                <iframe
                  title="Vital Care Group location"
                  src="https://www.google.com/maps?q=Arncliffe&output=embed"
                  loading="lazy"
                  className="h-full w-full border-0"
                />
              </motion.div>
            </div>
          </motion.aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
