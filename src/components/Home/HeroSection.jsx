export default function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-one-bg.jpg"
          alt="Care professional greeting a client in a bright office"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-12 md:gap-8 md:px-6 md:py-24 lg:py-28">
        {/* Left content */}
        <div className="md:col-span-8 lg:col-span-7 text-white">
          <div className="inline-flex rounded-full border border-[#3aa657] bg-white/5 px-3 py-1 text-xs font-semibold text-[#3aa657] ring-1 ring-inset ring-[#3aa657]/30">
            WELCOME TO VITAL CARE GROUP
          </div>

          <h1
            id="hero-heading"
            className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            VITAL CARE GROUP OFFERS YOU{" "}
            <span className="block text-white">
              <span className="text-[#e23d35]">IN‑HOME SUPPORT</span>
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
            Vital Care Group provides tailored in‑home support to meet your
            unique needs. Whether you&apos;re looking for help at home,
            community participation, or specialised care, we&apos;re here to
            empower and support you every step of the way.
          </p>

          <div className="mt-7 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <a
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#0b3a74] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#0a3366] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
            >
              Contact Us
            </a>

            {/* Reviews */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/bd-one.jpg"
                  alt="Reviewer 1"
                  className="size-10 rounded-full ring-2 ring-white/80"
                />
                <img
                  src="/images/bd-one.jpg"
                  alt="Reviewer 2"
                  className="size-10 rounded-full ring-2 ring-white/80"
                />
                <img
                  src="/images/bd-one.jpg"
                  alt="Reviewer 3"
                  className="size-10 rounded-full ring-2 ring-white/80"
                />
              </div>
              <p className="text-sm font-semibold text-white/90">
                50+ Positive Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Right badges */}
        <div className="md:col-span-4 lg:col-span-5">
          <div className="hidden gap-6 md:flex md:justify-end">
            <BadgeCircle title="We " subtitle="ndis" variant="green" />
            <BadgeCircle
              title="We Support The"
              subtitle="ndis"
              variant="purple"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BadgeCircle({ title = "We", subtitle = "ndis", variant = "green" }) {
  const color =
    variant === "green"
      ? { bg: "bg-green-700", text: "text-white" }
      : { bg: "bg-purple-700", text: "text-white" };

  return (
    <div
      className={[
        "flex size-28 flex-col items-center justify-center rounded-full text-center shadow-xl ring-4 ring-white/30",
        color.bg,
        color.text,
      ].join(" ")}
      aria-label={`${title} ${subtitle}`}
    >
      <span className="text-xl font-bold leading-none">
        {title}
        <span className="sr-only"> </span>
      </span>
      <span className="text-2xl font-extrabold uppercase tracking-wide">
        {subtitle}
      </span>
    </div>
  );
}
