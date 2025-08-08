export default function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate">
      <BackgroundImage />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-12 md:gap-8 md:px-6 md:py-24 lg:py-28">
        <LeftContent />
        <RightBadges />
      </div>
    </section>
  );
}

function BackgroundImage() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-one-bg.jpg"
        alt="Care professional greeting a client in a bright office"
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}

function LeftContent() {
  return (
    <div className="md:col-span-8 lg:col-span-7 text-white space-y-6">
      {" "}
      {/* Consistent vertical spacing */}
      <WelcomeBadge />
      <MainHeading />
      <DescriptionText />
      <ActionButtons />
    </div>
  );
}

function WelcomeBadge() {
  return (
    <div className="inline-flex rounded-full border border-[#3aa657] bg-white/5 px-3 py-1 text-xs font-semibold text-[#3aa657] ring-1 ring-inset ring-[#3aa657]/30">
      WELCOME TO VITAL CARE GROUP
    </div>
  );
}

function MainHeading() {
  return (
    <h1
      id="hero-heading"
      className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
    >
      <span className="block text-white">VITAL CARE GROUP OFFERS YOU</span>
      <span className="block text-[#e23d35] mt-2">IN‑HOME SUPPORT</span>
    </h1>
  );
}

function DescriptionText() {
  return (
    <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
      Vital Care Group provides tailored in‑home support to meet your unique
      needs. Whether you&apos;re looking for help at home, community
      participation, or specialised care, we&apos;re here to empower and support
      you every step of the way.
    </p>
  );
}

function ActionButtons() {
  return (
    <div className="mt-7 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
      <ContactButton />
      <Reviews />
    </div>
  );
}

function ContactButton() {
  return (
    <a
      href="/contact"
      className="inline-flex items-center rounded-full bg-[var(--primary-blue)] hover:bg-[#0a3366] text-white shadow-md px-6 py-3 text-sm font-semibold"
    >
      Contact Us
    </a>
  );
}

function Reviews() {
  return (
    <div className="flex items-center gap-4">
      <ReviewerAvatars />
      <p className="text-sm font-semibold text-white/90">
        50+ Positive Reviews
      </p>
    </div>
  );
}

function ReviewerAvatars() {
  return (
    <div className="flex -space-x-3">
      {[1, 2, 3].map((i) => (
        <img
          key={i}
          src="/images/bd-one.jpg"
          alt={`Reviewer ${i}`}
          className="size-10 rounded-full ring-2 ring-white/80"
        />
      ))}
    </div>
  );
}

function RightBadges() {
  return (
    <div className="md:col-span-4 lg:col-span-5">
      <div className="hidden gap-6 md:flex md:justify-end">
        <BadgeCircle title="We " subtitle="ndis" variant="green" />
        <BadgeCircle title="We Support The" subtitle="ndis" variant="purple" />
      </div>
    </div>
  );
}

function BadgeCircle({ title = "We", subtitle = "ndis", variant = "green" }) {
  const colorClasses = {
    green: { bg: "bg-green-700", text: "text-white" },
    purple: { bg: "bg-purple-700", text: "text-white" },
  };

  const { bg, text } = colorClasses[variant] || colorClasses.green;

  return (
    <div
      className={`flex size-28 flex-col items-center justify-center rounded-full text-center shadow-xl ring-4 ring-white/30 ${bg} ${text}`}
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
