import Link from "next/link";
import { CalendarDays, Clock, Tag } from "lucide-react";

export default function BlogCard({
  post = {
    slug: "#",
    title: "How In‑Home Support Improves Outcomes",
    excerpt:
      "Discover how personalised, in‑home support can improve daily living, independence, and overall wellbeing for participants.",
    category: "NDIS",
    tags: ["In‑Home Support", "Wellbeing"],
    image: "/modern-nursing-team.png",
    author: "Vital Care Team",
    date: "Aug 8, 2025",
    readTime: "6 min",
  },
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <img
        src={post.image || "/placeholder.svg"}
        alt={post.title}
        className="h-52 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
      />

      <div className="space-y-3 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-[#0b3a74]/10 px-3 py-1 text-xs font-semibold text-[#0b3a74]">
            {post.category}
          </span>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="size-3.5" aria-hidden="true" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3.5" aria-hidden="true" />
              {post.readTime}
            </span>
          </div>
        </div>

        <h3 className="text-lg font-extrabold leading-snug text-gray-900">
          <Link href={`/blogs/${post.slug}`} className="hover:text-[#0b3a74]">
            {post.title}
          </Link>
        </h3>

        <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <Tag className="size-4 text-gray-400" aria-hidden="true" />
          {post.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-600"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
