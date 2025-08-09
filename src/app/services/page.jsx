import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ServiceCard from "@/components/Services/services-card";
import { SERVICES } from "@/lib/data/services";
import Link from "next/link";

import BookAssessmentDrawer from "@/components/Buton/AssessmentButton";

export const metadata = {
  title: "Services | Vital Care Group",
  description:
    "Explore our tailored NDIS services including daily personal activities, SIL, community participation, nursing care, transport, and more.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Intro hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#0b3a74]/5 to-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-[#3aa657] bg-white px-3 py-1 text-xs font-semibold text-[#3aa657] ring-1 ring-inset ring-[#3aa657]/30">
              Our Services
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="text-[#e23d35]">Support Tailored</span>{" "}
              <span className="text-[#0b3a74]">To Your Goals</span>
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-700">
              We provide person‑centred supports that promote independence,
              safety, and wellbeing—at home and in the community.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {/* <Link
                href="/book"
                className="inline-flex items-center rounded-full bg-[#0b3a74] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0a3366]"
              >
                Book an Assessment
              </Link> */}
              <BookAssessmentDrawer
                trigger={
                  <button className="rounded-full bg-[#0b3a74] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0a3a66] cursor-pointer">
                    Book An Assessment
                  </button>
                }
              />{" "}
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-[#0b3a74]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#0b3a74] hover:bg-[#0b3a74]/5"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section
        aria-labelledby="services-grid-title"
        className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-24"
      >
        <h2 id="services-grid-title" className="sr-only">
          Available services
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.title}
              description={s.description}
              icon={s.icon}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#e23d35] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#cc2f28]"
          >
            Can’t find what you need? Talk to us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
