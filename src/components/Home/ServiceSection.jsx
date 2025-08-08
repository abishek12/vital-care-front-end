import { ClipboardList, Home } from "lucide-react";
import Link from "next/link";

export default function ServiceSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative bg-[#0b3a74] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12">
          {/* Left: Headline + CTA */}
          <div className="md:col-span-5">
            <div className="inline-flex items-center rounded-full border border-[#3aa657] bg-white/5 px-3 py-1 text-xs font-semibold text-[#3aa657] ring-1 ring-inset ring-[#3aa657]/30">
              EXPLORE MORE WITH US
            </div>

            <h2
              id="services-heading"
              className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl"
            >
              <span className="text-[#e23d35]">Dedicated To</span>
              <br />
              <span className="text-[#e23d35]">Helping People</span>
              <br />
              <span className="text-[#e23d35]">With Disabilities</span>
              <br />
              <span className="text-white">Lead Their Best</span>
              <br />
              <span className="text-white">Lives</span>
            </h2>
          </div>

          {/* Right: Service Cards */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <ServiceCard
                icon={ClipboardList}
                title="Daily Personal Activities"
                desc="We empower individuals with disabilities through personalised support. From personal hygiene and dressing to mobility, our compassionate staff is dedicated to helping you manage daily life with ease and confidence."
              />
              <ServiceCard
                icon={Home}
                title="Household Tasks"
                desc="We help keep your home clean and comfortable with support for everyday chores like cleaning, laundry, and grocery shopping—so your space remains safe and welcoming."
              />
              {/* Add more cards as needed */}
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
          <p className="text-[15px] leading-relaxed text-white/85">
            At Vital Care Group, we provide essential NDIS support for
            participants in NSW that acts as a lifeline for individuals with
            disabilities.
          </p>

          <div className="flex justify-start md:justify-end">
            <Link
              href="/services"
              className="inline-flex items-center rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
            >
              More Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <article className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset] ring-1 ring-white/10 backdrop-blur">
      {/* Floating red icon badge */}
      <div className="absolute -top-6 left-6 inline-flex items-center justify-center">
        <div className="inline-flex size-14 items-center justify-center rounded-full bg-[#e23d35] text-white shadow-lg ring-4 ring-[#e23d35]/25">
          <Icon className="size-7" aria-hidden="true" />
        </div>
      </div>

      <h3 className="mt-6 text-2xl font-extrabold leading-snug">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/85">{desc}</p>
    </article>
  );
}
