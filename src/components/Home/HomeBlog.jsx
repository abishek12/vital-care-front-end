import Link from "next/link";

const posts = [
  {
    slug: "independent-life-with-ndis",
    title: "Live An Independent Life With Our NDIS Services In NSW",
    excerpt:
      "Independence is more than freedom — it’s confidence, dignity, and the ability to shape your day. Here’s how tailored supports help.",
    image: "/images/hero-one-bg.jpg",
    category: "Disability Support",
  },
  {
    slug: "group-activities-ndis-participants-love",
    title: "7 Group Activities That Every NDIS Participant Love",
    excerpt:
      "Community activities shouldn’t be hard or boring. Explore ideas that build connection, skills, and joy.",
    image: "/images/community-group-1.jpg",
    category: "Disability Support",
  },
];

export default function HomeBlogs() {
  return (
    <section
      id="home-blogs"
      aria-labelledby="home-blogs-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        {/* Heading row */}
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="inline-flex items-center rounded-full border border-[#3aa657] bg-white px-3 py-1 text-xs font-semibold text-[#3aa657] ring-1 ring-inset ring-[#3aa657]/30">
              OUR LATEST BLOGS
            </div>
            <h2
              id="home-blogs-heading"
              className="mt-4 flex items-center text-4xl tracking-tight sm:text-5xl"
            >
              <span className="text-[#e23d35] font-light">Valuable Reads</span>
              <span className="text-[#0b3a74] ml-4 font-extrabold">
                For You
              </span>
            </h2>
          </div>

          {/* Divider and description */}
          <div className="md:col-span-6">
            <div className="flex h-full items-center">
              <div
                className="hidden h-16 w-px bg-gray-200 md:block"
                aria-hidden="true"
              />
              <p className="ml-6 text-sm leading-relaxed text-gray-600">
                Read value‑packed blogs about NDIS services and updates.
                Practical guides and insights to help you make confident
                decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Posts grid */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-10 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="h-64 w-full rounded-2xl object-cover shadow-md transition group-hover:shadow-lg"
              />
              {/* Category pill over image */}
              <div className="-mt-7 pl-4">
                <span className="inline-flex rounded-full bg-[#0b3a74] px-3 py-1 text-xs font-semibold text-white shadow-sm ring-1 ring-white/20">
                  {post.category}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-extrabold leading-snug text-[#e23d35]">
                <Link href={`/blogs/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-700">
                {post.excerpt}
              </p>

              <div className="mt-3">
                <Link
                  href={`/blogs/${post.slug}`}
                  className="text-sm font-semibold text-[#0b3a74] underline underline-offset-4 hover:text-[#0a3366]"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
