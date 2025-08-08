"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do you charge travel fees?",
    a: "Yes, travel fees may apply depending on the distance and specific requirements of the service. We strive to be transparent about these costs and ensure they are communicated clearly.",
  },
  {
    q: "Does your nursing service allow medication?",
    a: "Yes. Our qualified staff can assist with medication management according to your care plan and relevant clinical guidelines.",
  },
  {
    q: "Can you provide staff who speak languages other than English?",
    a: "Where possible, we match participants with support workers who meet language and cultural preferences to improve communication and comfort.",
  },
  {
    q: "How do you communicate with participants during emergencies?",
    a: "We follow established escalation procedures and keep participants and their nominated contacts informed with timely updates through agreed communication channels.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-heading"
      className="relative bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        {/* Header section in 2-column grid */}
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          {/* Left column for heading content */}
          <div className="md:col-span-7">
            <div className="inline-flex items-center rounded-full border border-[#3aa657] bg-white px-3 py-1 text-xs font-semibold text-[#3aa657] ring-1 ring-inset ring-[#3aa657]/30">
              WHO WE ARE
            </div>
            <h2
              id="about-heading"
              className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl"
            >
              <span className="text-[#e23d35]">Get Your</span>
              <span className="text-[#0b3a74] ml-4">Doubts Resolved</span>
            </h2>
            <p className="mt-4 text-gray-700">
              Have questions or concerns? We're here to help! Our FAQ section is
              designed to answer all your queries and provide you with the
              information you need.
            </p>
          </div>

          {/* Right empty column to align with image */}
          <div className="hidden md:col-span-5 md:block"></div>
        </div>

        {/* FAQ content section */}
        <div className="mt-12 grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          {/* Left: Accordion */}
          <div className="md:col-span-7">
            <h2 id="faqs-heading" className="sr-only">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((item, idx) => {
                const open = openIndex === idx;
                const controlId = `faq-panel-${idx}`;
                const btnId = `faq-button-${idx}`;

                return (
                  <div key={item.q} className="rounded-2xl">
                    <button
                      id={btnId}
                      type="button"
                      aria-controls={controlId}
                      aria-expanded={open}
                      onClick={() => setOpenIndex(open ? -1 : idx)}
                      className={[
                        "group relative flex w-full items-center justify-between rounded-full px-6 py-4 text-left text-sm font-semibold transition-colors",
                        open
                          ? "bg-[#e23d35] text-white shadow-sm"
                          : "bg-white text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50",
                      ].join(" ")}
                    >
                      <span className="pr-8">{item.q}</span>
                      <ChevronDown
                        className={[
                          "absolute right-4 size-5 transition-transform",
                          open
                            ? "-rotate-180 text-white"
                            : "rotate-0 text-gray-500",
                        ].join(" ")}
                        aria-hidden="true"
                      />
                    </button>

                    <div
                      id={controlId}
                      role="region"
                      aria-labelledby={btnId}
                      className={[
                        "overflow-hidden px-6",
                        open ? "max-h-96 pt-3" : "max-h-0",
                        "transition-[max-height,padding] duration-300 ease-in-out",
                      ].join(" ")}
                    >
                      <p className="pb-4 text-[15px] leading-relaxed text-gray-700">
                        {item.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Image */}
          <div className="md:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/support.jpg"
              alt="Support worker speaking with a senior in a bright room"
              className="w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
