"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import {
  ChevronDown,
  HelpCircle,
  Mail,
  Phone,
  MessageSquare,
  Search,
  MapPin,
} from "lucide-react";

// export const metadata = {
//   title: "FAQs | Vital Care Group",
//   description:
//     "Find answers to common questions about our NDIS services, nursing care, travel fees, availability, and how we support your goals.",
// };

const DATA = [
  {
    category: "General",
    items: [
      {
        q: "Do you charge travel fees?",
        a: "Yes, travel fees may apply depending on the distance and specific requirements of the service. We’re transparent about any costs and will confirm them before the service starts.",
      },
      {
        q: "Which areas do you service?",
        a: "We primarily support participants across Sydney and surrounding regions. Contact us to confirm availability for your suburb.",
      },
      {
        q: "What are your operating hours?",
        a: "Our office hours are 9:00 AM – 5:00 PM, Monday to Friday. Service delivery can be arranged outside these hours based on your plan and support needs.",
      },
    ],
  },
  {
    category: "Services",
    items: [
      {
        q: "Does your nursing service allow medication?",
        a: "Yes. Our qualified nurses and trained support staff can assist with medication administration, reminders, and documentation in line with your care plan.",
      },
      {
        q: "Can you provide staff who speak languages other than English?",
        a: "Where possible, we match participants with support workers who meet language and cultural preferences to improve communication and comfort.",
      },
      {
        q: "Do you offer household tasks and community participation?",
        a: "Yes. We can assist with cleaning, laundry, shopping, and engaging in community activities that build skills and social connection.",
      },
    ],
  },
  {
    category: "NDIS & Funding",
    items: [
      {
        q: "Do you accept NDIS‑funded participants?",
        a: "Yes. We support plan‑managed, self‑managed, and NDIA‑managed participants depending on the service. We’ll guide you through your options.",
      },
      {
        q: "What if my plan is under review?",
        a: "We can help you prepare for reviews and provide quotes or reports where appropriate so supports continue with minimal disruption.",
      },
      {
        q: "Are your rates aligned with NDIS pricing?",
        a: "We follow current NDIS Pricing Arrangements and Price Limits for applicable supports.",
      },
    ],
  },
  {
    category: "Safety & Emergencies",
    items: [
      {
        q: "How do you communicate with participants during emergencies?",
        a: "We follow established escalation procedures and keep you and your nominated contacts informed with timely updates through agreed communication channels.",
      },
      {
        q: "What checks do your staff undergo?",
        a: "All team members complete background checks and required training. Nurses hold current registration and competency as applicable.",
      },
    ],
  },
];

const CATEGORIES = ["All", ...DATA.map((d) => d.category)];

export default function FAQsPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const [openId, setOpenId] = useState(null);

  // Flattened list with ids for searching
  const flat = useMemo(() => {
    const out = [];
    DATA.forEach((group, gi) => {
      group.items.forEach((item, ii) => {
        out.push({
          id: `${gi}-${ii}`,
          category: group.category,
          q: item.q,
          a: item.a,
        });
      });
    });
    return out;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return flat.filter((item) => {
      const inCat = cat === "All" || item.category === cat;
      const inSearch =
        q.length === 0 ||
        `${item.q} ${item.a} ${item.category}`.toLowerCase().includes(q);
      return inCat && inSearch;
    });
  }, [flat, query, cat]);

  // Build JSON‑LD for SEO from first 8 items of filtered/all
  const jsonLdFaq = useMemo(() => {
    const list = (filtered.length ? filtered : flat).slice(0, 8);
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: list.map((i) => ({
        "@type": "Question",
        name: i.q,
        acceptedAnswer: { "@type": "Answer", text: i.a },
      })),
    };
  }, [filtered, flat]);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* JSON‑LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#0b3a74]/10 to-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="inline-flex items-center rounded-full border border-[#3aa657] bg-white px-3 py-1 text-xs font-semibold text-[#3aa657] ring-1 ring-inset ring-[#3aa657]/30">
                Frequently Asked Questions
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                <span className="text-[#e23d35]">Answers You Need</span>{" "}
                <span className="text-[#0b3a74]">For Care With Confidence</span>
              </h1>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-gray-700">
                Browse common questions about our services, NDIS funding, and
                how we work with you.
              </p>

              {/* Search */}
              <div className="mt-6 max-w-xl">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search FAQs..."
                    aria-label="Search FAQs"
                    className="w-full rounded-full border border-gray-300 bg-white px-11 py-2.5 text-sm outline-none ring-[#0b3a74]/20 placeholder:text-gray-400 focus:ring-2"
                  />
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setCat(c);
                        setOpenId(null);
                      }}
                      className={[
                        "rounded-full px-3 py-1.5 text-xs font-semibold transition",
                        cat === c
                          ? "bg-[#0b3a74] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                      ].join(" ")}
                      aria-pressed={cat === c}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div className="md:col-span-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/discussion.jpg"
                alt="Support worker speaking with a participant"
                className="w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Left: Accordions */}
          <div className="md:col-span-8">
            {cat === "All" && query.trim().length === 0 ? (
              // Grouped by category
              <div className="space-y-10">
                {DATA.map((group, gi) => (
                  <div key={group.category}>
                    <h2 className="text-xl font-extrabold text-[#0b3a74]">
                      {group.category}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {group.items.map((item, ii) => {
                        const id = `${gi}-${ii}`;
                        const open = openId === id;
                        return (
                          <AccordionItem
                            key={id}
                            id={id}
                            open={open}
                            setOpen={setOpenId}
                            question={item.q}
                            answer={item.a}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Filtered flat list
              <div className="space-y-4">
                {filtered.length === 0 ? (
                  <p className="text-sm text-gray-600">
                    No FAQs match your search.
                  </p>
                ) : (
                  filtered.map((item) => {
                    const open = openId === item.id;
                    return (
                      <AccordionItem
                        key={item.id}
                        id={item.id}
                        open={open}
                        setOpen={setOpenId}
                        question={item.q}
                        answer={item.a}
                        badge={item.category}
                      />
                    );
                  })
                )}
              </div>
            )}
          </div>

          {/* Right: Help card */}
          <aside className="md:col-span-4">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="inline-flex size-10 items-center justify-center rounded-full bg-[#e23d35]/10 text-[#e23d35]">
                <HelpCircle className="size-5" />
              </div>
              <h3 className="mt-3 text-lg font-extrabold text-[#0b3a74]">
                Still have questions?
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Our team is here to help you understand supports, eligibility,
                and next steps.
              </p>

              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 text-gray-400" />
                  <span>Arncliffe, NSW 2205</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-4 text-gray-400" />
                  <a
                    className="hover:text-[#0b3a74]"
                    href="mailto:info@vitalcaregroup.com.au"
                  >
                    info@vitalcaregroup.com.au
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-4 text-gray-400" />
                  <a className="hover:text-[#0b3a74]" href="tel:0403441882">
                    0403 441 882
                  </a>
                </li>
              </ul>

              <div className="mt-5">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0b3a74] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0a3366]"
                >
                  <MessageSquare className="size-4" />
                  Send us a message
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function AccordionItem({ id, open, setOpen, question, answer, badge }) {
  const btnId = `btn-${id}`;
  const panelId = `panel-${id}`;
  return (
    <div className="rounded-2xl">
      <div className="flex items-center gap-2">
        {badge ? (
          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-semibold text-gray-600">
            {badge}
          </span>
        ) : null}
      </div>
      <button
        id={btnId}
        type="button"
        aria-controls={panelId}
        aria-expanded={open}
        onClick={() => setOpen(open ? null : id)}
        className={[
          "group relative mt-2 flex w-full items-center justify-between rounded-full px-6 py-4 text-left text-sm font-semibold transition-colors",
          open
            ? "bg-[#e23d35] text-white shadow-sm"
            : "bg-white text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50",
        ].join(" ")}
      >
        <span className="pr-8">{question}</span>
        <ChevronDown
          className={[
            "absolute right-4 size-5 transition-transform",
            open ? "-rotate-180 text-white" : "rotate-0 text-gray-500",
          ].join(" ")}
          aria-hidden="true"
        />
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={[
          "overflow-hidden px-6",
          open ? "max-h-96 pt-3" : "max-h-0",
          "transition-[max-height,padding] duration-300 ease-in-out",
        ].join(" ")}
      >
        <p className="pb-4 text-[15px] leading-relaxed text-gray-700">
          {answer}
        </p>
      </div>
    </div>
  );
}
