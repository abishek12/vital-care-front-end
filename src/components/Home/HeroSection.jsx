import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden"
    >
      <BackgroundImage />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-12 md:gap-8 md:px-6 md:py-16 lg:py-18">
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
        alt="Care professional assisting a client at home"
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}

function LeftContent() {
  return (
    <div className="md:col-span-8 lg:col-span-7 text-white space-y-6">
      <WelcomeBadge />
      <MainHeading />
      <DescriptionText />
      <ActionButtons />
      <TrustIndicators />
    </div>
  );
}

function WelcomeBadge() {
  return (
    <div className="inline-flex rounded-full border border-[#3aa657] bg-white/10 px-4 py-2 text-sm font-semibold text-[#f0f8ff] ring-1 ring-inset ring-[#3aa657]/30 backdrop-blur-sm">
      WELCOME TO VITAL CARE GROUP
    </div>
  );
}

function MainHeading() {
  return (
    <h1
      id="hero-heading"
      className="mt-2 text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl"
    >
      <span className="block text-white">VITAL CARE GROUP OFFERS YOU</span>
      <span className="block text-[#e23d35] mt-2 font-extrabold">
        IN‑HOME SUPPORT
      </span>
    </h1>
  );
}

function DescriptionText() {
  return (
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
      Vital Care Group provides tailored in‑home support to meet your unique
      needs. Whether you're looking for help at home, community participation,
      or specialised care, we're here to empower and support you every step of
      the way.
    </p>
  );
}

function ActionButtons() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <a
        href="/contact"
        className="inline-flex items-center rounded-full bg-[#0b3a74] hover:bg-[#0a3366] text-white px-8 py-4 text-base font-semibold shadow-lg transition-colors duration-200"
      >
        Contact Us
      </a>
      <a
        href="/services"
        className="inline-flex items-center rounded-full bg-transparent hover:bg-white/10 text-white px-8 py-4 text-base font-semibold ring-2 ring-white/80 ring-inset transition-colors duration-200"
      >
        Our Services
      </a>
    </div>
  );
}

function TrustIndicators() {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3aa657]/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#3aa657]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-white">Quality Certified</p>
          <p className="text-xs text-white/80">Premium care standards</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e23d35]/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#e23d35]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-white">50+ Reviews</p>
          <p className="text-xs text-white/80">Highly rated service</p>
        </div>
      </div>
    </div>
  );
}

function RightBadges() {
  return (
    <div className="md:col-span-4 lg:col-span-5">
      <div className="flex flex-col items-center gap-8 md:items-end">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col items-center justify-center rounded-2xl bg-white/10 p-6 backdrop-blur-sm ring-1 ring-white/20">
            <Image
              src="/images/ndis.png"
              width={120}
              height={120}
              alt="NDIS Certified Provider"
              className="h-auto"
            />
            <p className="mt-3 text-center text-sm font-medium text-white">
              NDIS Certified
            </p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl bg-white/10 p-6 backdrop-blur-sm ring-1 ring-white/20">
            <Image
              src="/images/support-ndis.png"
              width={120}
              height={120}
              alt="Support and NDIS badge"
              className="h-auto"
            />
            <p className="mt-3 text-center text-sm font-medium text-white">
              Quality Support
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm ring-1 ring-white/20 max-w-xs">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3aa657]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-sm text-white">
              Registered NDIS provider since 2018
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
