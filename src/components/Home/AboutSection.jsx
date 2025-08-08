import {
  UserRound,
  ClipboardPlus,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        {/* Row 1: Copy left, image right */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          {/* Left copy */}
          <div className="md:col-span-7">
            <div className="inline-flex items-center rounded-full border border-[#3aa657] bg-white px-3 py-1 text-xs font-semibold text-[#3aa657] ring-1 ring-inset ring-[#3aa657]/30">
              WHO WE ARE
            </div>

            <h2
              id="about-heading"
              className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl"
            >
              <span className="text-[#e23d35]">Personalised Support For</span>
              <br />
              <span className="text-[#0b3a74]">A Brighter Future</span>
            </h2>

            <div className="mt-5 max-w-2xl space-y-4 text-[15px] leading-relaxed text-gray-700">
              <p>
                At Vital Care Group, the challenges faced by individuals with
                disabilities serve as our driving force, especially the struggle
                for access to essential services and personalised care. We
                believe everyone deserves more than just care—they deserve
                dignity, choice, and meaningful opportunities.
              </p>
              <p>
                As a trusted NDIS service provider in NSW, we aim to offer
                personalised in‑home and community support that truly makes a
                difference. Our team brings extensive experience across a wide
                range of clinical and educational settings in the disability
                sector.
              </p>
            </div>

            <div className="mt-7">
              <Link
                href="/about"
                className="inline-flex items-center rounded-full bg-[#0b3a74] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0a3366] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b3a74]"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="md:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Vital-Care-Group-9.jpg"
              alt="Participants smiling together outdoors"
              className="aspect-[16/10] w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Row 2: Image left, Features right */}
        <div className="mt-12 grid grid-cols-1 items-start gap-10 md:mt-16 md:grid-cols-12">
          {/* Left image */}
          <div className="md:col-span-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Vital-Care-Group-10.jpg"
              alt="Support worker and participant celebrating together"
              className="aspect-[16/10] w-full rounded-2xl object-cover shadow-lg"
            />
          </div>

          {/* Right features */}
          <div className="md:col-span-6">
            <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
              {features.map((f) => (
                <Feature key={f.title1} {...f} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: UserRound,
    title1: "Person‑Centered",
    title2: "Care",
    desc: "We customise support to fit your unique needs and goals, ensuring that care is meaningful and effective for you.",
  },
  {
    icon: ClipboardPlus,
    title1: "Adherence To NDIS",
    title2: "Regulations",
    desc: "We strictly follow NDIS rules, regularly update our policies, and conduct audits to maintain high standards.",
  },
  {
    icon: HeartHandshake,
    title1: "Commitment To",
    title2: "High‑Quality Care",
    desc: "We are dedicated to delivering top‑quality care and support, demonstrating our commitment to excellence.",
  },
  {
    icon: Sparkles,
    title1: "Flexible Support",
    title2: "Options",
    desc: "We offer a range of flexible options to match your preferences and schedule so you get care when needed.",
  },
];

function Feature({ icon: Icon, title1, title2, desc }) {
  return (
    <div className="flex flex-col">
      <div className="mb-4 inline-flex size-14 items-center justify-center rounded-full bg-[#e23d35] text-white shadow-md ring-4 ring-[#e23d35]/20">
        <Icon className="size-7" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-extrabold leading-tight text-[#0b3a74]">
        <span className="block">{title1}</span>
        <span className="block">{title2}</span>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-700">{desc}</p>
    </div>
  );
}
