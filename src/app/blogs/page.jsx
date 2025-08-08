"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BlogCard from "@/components/Card/BlogCard";
import { Search, Stethoscope, HeartPulse, Pill, Users2 } from "lucide-react";

const POSTS = [
  {
    slug: "in-home-support-improves-outcomes",
    title: "How In‑Home Support Improves Outcomes",
    excerpt:
      "Personalised care at home can boost independence and wellbeing. Learn the evidence behind in‑home support for participants.",
    category: "NDIS",
    tags: ["In‑Home Support", "Wellbeing"],
    image: "/images/community-group-1.jpg",
    author: "Vital Care Team",
    date: "Aug 01, 2025",
    readTime: "6 min",
    featured: true,
  },
  {
    slug: "medication-safety-best-practices",
    title: "Medication Safety: Best Practices in Community Settings",
    excerpt:
      "From storage to timing and monitoring, here are the most important steps to keep medication management safe and effective.",
    category: "Nursing",
    tags: ["Medication", "Clinical"],
    image: "/images/community-group-1.jpg",
    author: "RN Clinical Lead",
    date: "Jul 24, 2025",
    readTime: "8 min",
  },
  {
    slug: "household-tasks-that-boost-independence",
    title: "Household Tasks That Build Confidence and Independence",
    excerpt:
      "Cleaning, laundry, and meal prep aren’t just chores—done right, they’re a pathway to daily living skills and autonomy.",
    category: "Daily Living",
    tags: ["Life Skills", "Home"],
    image: "/images/community-group-1.jpg",
    author: "Support Coordinator",
    date: "Jul 18, 2025",
    readTime: "5 min",
  },
  {
    slug: "community-participation-for-wellbeing",
    title: "Community Participation: A Powerful Driver of Wellbeing",
    excerpt:
      "Social connections matter. Explore programs and tips for getting involved in the community in ways that feel right for you.",
    category: "Community",
    tags: ["Participation", "Social"],
    image: "/images/community-group-1.jpg",
    author: "Allied Health",
    date: "Jul 05, 2025",
    readTime: "7 min",
  },
  {
    slug: "ndis-plan-review-checklist",
    title: "Your NDIS Plan Review Checklist",
    excerpt:
      "Prepare with confidence: what to document, who to involve, and how to advocate for the supports you need.",
    category: "NDIS",
    tags: ["NDIS", "Planning"],
    image: "/images/community-group-1.jpg",
    author: "Plan Manager",
    date: "Jun 26, 2025",
    readTime: "6 min",
  },
];

const CATEGORIES = ["All", "NDIS", "Nursing", "Daily Living", "Community"];

export default function BlogsPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => {
    return POSTS.filter((p) => {
      const inCat = cat === "All" || p.category === cat;
      const inSearch =
        query.trim().length === 0 ||
        [p.title, p.excerpt, p.category, ...(p.tags || [])]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase());
      return inCat && inSearch;
    });
  }, [query, cat]);

  const featured = POSTS.find((p) => p.featured) || POSTS[0];
  const rest = filtered.filter((p) => p.slug !== featured.slug);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#0b3a74]/10 to-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#e23d35]/10 blur-3xl"
        />
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-18">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="inline-flex items-center rounded-full border border-[#3aa657] bg-white px-3 py-1 text-xs font-semibold text-[#3aa657] ring-1 ring-inset ring-[#3aa657]/30">
                Insights for Better Care
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                <span className="text-[#e23d35]">Health &amp; Care</span>{" "}
                <span className="text-[#0b3a74]">Knowledge Hub</span>
              </h1>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-gray-700">
                Research‑based articles, practical guides, and stories for
                participants, families, and care professionals.
              </p>

              {/* Search + Categories */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative w-full sm:max-w-md">
                  <Search className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search articles, topics, tags..."
                    className="w-full rounded-full border border-gray-300 bg-white px-10 py-2.5 text-sm outline-none ring-[#0b3a74]/20 placeholder:text-gray-400 focus:ring-2"
                    aria-label="Search blog posts"
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCat(c)}
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

              {/* Icon row */}
              <div className="mt-6 flex items-center gap-4 text-[#0b3a74]">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-[#0b3a74]/10">
                  <Stethoscope className="size-5" />
                </span>
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-[#0b3a74]/10">
                  <HeartPulse className="size-5" />
                </span>
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-[#0b3a74]/10">
                  <Pill className="size-5" />
                </span>
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-[#0b3a74]/10">
                  <Users2 className="size-5" />
                </span>
              </div>
            </div>

            {/* Featured */}
            <div className="md:col-span-5">
              <Link
                href={`/blogs/${featured.slug}`}
                className="block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.image || "/placeholder.svg"}
                  alt={featured.title}
                  className="h-64 w-full object-cover"
                />
                <div className="space-y-2 p-5">
                  <span className="inline-flex items-center rounded-full bg-[#e23d35]/10 px-3 py-1 text-xs font-semibold text-[#e23d35]">
                    Featured
                  </span>
                  <h2 className="text-xl font-extrabold leading-snug">
                    {featured.title}
                  </h2>
                  <p className="line-clamp-2 text-sm text-gray-600">
                    {featured.excerpt}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Posts */}
          <div className="lg:col-span-8">
            {rest.length === 0 ? (
              <p className="text-sm text-gray-600">
                No posts match your search.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {rest.map((p) => (
                  <BlogCard key={p.slug} post={p} />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            {/* Newsletter */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#0b3a74]">
                Subscribe to our newsletter
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Monthly insights from nurses, clinicians, and support
                coordinators.
              </p>
              <form
                className="mt-4 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks for subscribing!");
                }}
              >
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-[#0b3a74]/20 placeholder:text-gray-400 focus:ring-2"
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#0b3a74] px-3 py-2 text-sm font-semibold text-white hover:bg-[#0a3366]"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Popular posts */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#0b3a74]">Popular</h3>
              <ul className="mt-3 space-y-3">
                {POSTS.slice(0, 3).map((p) => (
                  <li key={p.slug} className="flex items-start gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image || "/placeholder.svg"}
                      alt=""
                      className="mt-0.5 size-14 rounded-md object-cover"
                    />
                    <div className="min-w-0">
                      <Link
                        href={`/blogs/${p.slug}`}
                        className="line-clamp-2 text-sm font-semibold text-gray-900 hover:text-[#0b3a74]"
                      >
                        {p.title}
                      </Link>
                      <p className="text-xs text-gray-500">
                        {p.date} • {p.readTime}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#0b3a74]">Tags</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {Array.from(new Set(POSTS.flatMap((p) => p.tags))).map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
