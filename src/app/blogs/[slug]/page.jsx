import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PostBody from "../components/post-body";
import BlogCard from "@/components/Card/BlogCard";
import { BLOG_POSTS } from "@/lib/data/blogs";
import Link from "next/link";
import { CalendarDays, Clock, Share2, Tag } from "lucide-react";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export default function BlogDetailPage({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug) || {
    slug: params.slug,
    title: "Article",
    category: "Blog",
    date: new Date().toLocaleDateString("en-AU", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
    author: "Vital Care Team",
    readTime: "5 min",
    banner: "/modern-nursing-team.png",
    tags: ["Care", "NDIS"],
    content: [
      {
        type: "p",
        text: "Thanks for visiting! Content for this article will be published soon. In the meantime, explore our latest posts below.",
      },
    ],
  };

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const shareUrl = typeof window === "undefined" ? "" : window.location.href;
  const enc = encodeURIComponent;
  const twitter = `https://twitter.com/intent/tweet?text=${enc(
    post.title
  )}&url=${enc(shareUrl)}`;
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${enc(
    shareUrl
  )}`;
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${enc(
    shareUrl
  )}`;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero header */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#0b3a74]/10 to-white">
        <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
          <div className="inline-flex items-center rounded-full bg-[#0b3a74]/10 px-3 py-1 text-xs font-semibold text-[#0b3a74]">
            {post.category}
          </div>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {post.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="size-4" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-4" />
              {post.readTime}
            </span>

            <div className="ml-auto flex items-center gap-2">
              <Share2 className="size-4 text-gray-500" aria-hidden="true" />
              {/* Simple share links */}
              <a
                className="hover:text-[#0b3a74]"
                href={twitter}
                target="_blank"
                rel="noreferrer"
              >
                X
              </a>
              <a
                className="hover:text-[#0b3a74]"
                href={facebook}
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                className="hover:text-[#0b3a74]"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Banner image */}
      <section className="mx-auto max-w-5xl px-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.banner || "/placeholder.svg"}
          alt=""
          className="h-80 w-full rounded-2xl object-cover shadow-md"
        />
      </section>

      {/* Article */}
      <article className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
        <PostBody content={post.content} />

        {/* Tags */}
        {post.tags?.length ? (
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <Tag className="size-4 text-gray-400" aria-hidden="true" />
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-10">
          <Link
            href="/blogs"
            className="text-sm font-semibold text-[#0b3a74] underline underline-offset-4"
          >
            ← Back to all posts
          </Link>
        </div>
      </article>

      {/* Related posts */}
      {related.length ? (
        <section
          aria-label="Related posts"
          className="mx-auto max-w-7xl px-4 pb-16 md:px-6"
        >
          <h2 className="text-2xl font-extrabold tracking-tight text-[#0b3a74]">
            Related reads
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <BlogCard
                key={p.slug}
                post={{
                  slug: p.slug,
                  title: p.title,
                  excerpt: p.content?.find((c) => c.type === "p")?.text || "",
                  category: p.category,
                  tags: p.tags || [],
                  image: p.banner,
                  author: p.author,
                  date: p.date,
                  readTime: p.readTime,
                }}
              />
            ))}
          </div>
        </section>
      ) : null}

      <Footer />
    </main>
  );
}
