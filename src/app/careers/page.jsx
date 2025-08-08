"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import JobCard from "@/components/Card/JobCard";
import { Search, Briefcase, MapPin, UserCog, Heart } from "lucide-react";

const JOBS = [
  {
    id: "rn-clinical-lead",
    title: "Registered Nurse (Clinical Lead)",
    dept: "Nursing",
    type: "Full‑time",
    location: "Sydney, NSW",
    salary: "Competitive + Super",
    summary:
      "Lead clinical practice, provide supervision, and support safe, high‑quality services across the community.",
    responsibilities: [
      "Provide clinical governance and ensure adherence to NDIS and clinical guidelines.",
      "Support care planning, risk assessments, and incident management.",
      "Coach and mentor support workers and ENs.",
    ],
    requirements: [
      "AHPRA registration as RN.",
      "2+ years of community or disability experience.",
      "Current police check and WWCC.",
    ],
  },
  {
    id: "support-worker",
    title: "Disability Support Worker",
    dept: "Support",
    type: "Part‑time",
    location: "St George / Inner West, NSW",
    salary: "Award + Penalties",
    summary:
      "Deliver person‑centred support for daily living, community access, and capacity building.",
    responsibilities: [
      "Assist with personal care, meal prep, and household tasks.",
      "Facilitate community participation and transport as needed.",
      "Complete shift notes and incident reports accurately.",
    ],
    requirements: [
      "Cert III Individual Support or similar (preferred).",
      "Valid driver licence and comprehensive insurance (preferred).",
      "Current police check and WWCC.",
    ],
  },
  {
    id: "care-coordinator",
    title: "Care Coordinator",
    dept: "Operations",
    type: "Full‑time",
    location: "Hybrid – Arncliffe, NSW",
    salary: "Negotiable",
    summary:
      "Coordinate rosters, liaise with participants and families, and support continuous improvement.",
    responsibilities: [
      "Build and maintain participant schedules and staff rosters.",
      "Respond to enquiries and stakeholder communications.",
      "Contribute to quality improvement initiatives.",
    ],
    requirements: [
      "Experience in scheduling/coordination in care settings.",
      "Excellent communication and problem‑solving skills.",
      "NDIS knowledge preferred.",
    ],
  },
];

const DEPTS = ["All", "Nursing", "Support", "Operations"];
const TYPES = ["All", "Full‑time", "Part‑time", "Casual"];

export default function CareersPage() {
  const [q, setQ] = useState("");
  const [dept, setDept] = useState("All");
  const [type, setType] = useState("All");

  const filtered = useMemo(() => {
    return JOBS.filter((j) => {
      const inDept = dept === "All" || j.dept === dept;
      const inType = type === "All" || j.type === type;
      const text = (
        j.title +
        " " +
        j.summary +
        " " +
        j.location +
        " " +
        j.dept +
        " " +
        j.type
      ).toLowerCase();
      const inSearch = q.trim() === "" || text.includes(q.trim().toLowerCase());
      return inDept && inType && inSearch;
    });
  }, [q, dept, type]);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Vital-Care-Group-9.jpg"
            alt="Care team collaborating in a bright clinic"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-[#3aa657] bg-white px-3 py-1 text-xs font-semibold text-[#3aa657] ring-1 ring-inset ring-[#3aa657]/30">
              We’re hiring
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="text-[#e23d35]">Build Your Career</span>{" "}
              <span className="text-[#0b3a74]">Creating Brighter Futures</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-gray-700">
              Join a values‑driven team delivering safe, person‑centred care
              across the community.
            </p>

            {/* Filters */}
            <div className="mt-6 grid grid-cols-1 items-center gap-3 sm:grid-cols-3">
              <div className="relative sm:col-span-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search roles, skills, locations..."
                  aria-label="Search jobs"
                  className="w-full rounded-full border border-gray-300 bg-white px-11 py-2.5 text-sm outline-none ring-[#0b3a74]/20 placeholder:text-gray-400 focus:ring-2"
                />
              </div>
              <select
                value={dept}
                onChange={(e) => setDept(e.target.value)}
                className="rounded-full border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none ring-[#0b3a74]/20 focus:ring-2"
                aria-label="Filter by department"
              >
                {DEPTS.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="rounded-full border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none ring-[#0b3a74]/20 focus:ring-2"
                aria-label="Filter by type"
              >
                {TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-24 mt-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#0b3a74] sm:text-3xl">
              Open Roles
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Can’t find a fit? Send your CV—We’ll keep you in mind.
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {filtered.length ? (
            filtered.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <p className="text-sm text-gray-600">
              No roles match your filters right now.
            </p>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#0b3a74] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <h3 className="text-2xl font-extrabold sm:text-3xl">
            Benefits & Culture
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-white/85">
            We support your growth with training, supervision, and flexible work
            options.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Benefit
              icon={<Briefcase className="size-5" />}
              title="Career growth"
              desc="Pathways, supervision, and CPD support."
            />
            <Benefit
              icon={<MapPin className="size-5" />}
              title="Local teams"
              desc="Work close to home across Sydney."
            />
            <Benefit
              icon={<UserCog className="size-5" />}
              title="Flexible rosters"
              desc="Balance life and work commitments."
            />
            <Benefit
              icon={<Heart className="size-5" />}
              title="Purpose‑led"
              desc="Make a real difference every day."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-r from-[#0b3a74] to-[#0a3366] p-8 text-white">
            <h3 className="text-2xl font-extrabold sm:text-3xl">
              Didn’t see your role?
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-white/90">
              Send us your resume—We’re always looking for great people.
            </p>
            <a
              href="mailto:careers@vitalcaregroup.com.au?subject=Expression%20of%20Interest"
              className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0b3a74] hover:bg-white/90"
            >
              Email your CV
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Benefit({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur">
      <div className="inline-flex size-10 items-center justify-center rounded-full bg-white/10">
        {icon}
      </div>
      <h4 className="mt-3 font-extrabold">{title}</h4>
      <p className="mt-1 text-sm text-white/85">{desc}</p>
    </div>
  );
}
