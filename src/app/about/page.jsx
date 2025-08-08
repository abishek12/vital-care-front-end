import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import {
  HeartHandshake,
  ShieldCheck,
  Users2,
  Clock,
  Stethoscope,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about-hero.jpg"
            alt="Care team supporting a participant in a bright, welcoming space"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="inline-flex items-center rounded-full border border-[#3aa657] bg-white px-3 py-1 text-xs font-semibold text-[#3aa657] ring-1 ring-inset ring-[#3aa657]/30">
                WHO WE ARE
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                <span className="text-[#e23d35]">Personalised Support</span>{" "}
                <span className="text-[#0b3a74]">Led by Compassion</span>
              </h1>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-gray-700">
                We help people live with dignity, choice, and independence. Our
                experienced team provides tailored in‑home and community support
                designed around your goals.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center rounded-full bg-[#0b3a74] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0a3366]"
                >
                  Explore Services <ArrowRight className="ml-2 size-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-[#0b3a74]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#0b3a74] hover:bg-[#0b3a74]/5"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="md:col-span-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-hero.jpg"
                alt="Smiling participants together outdoors"
                className="w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-label="Key statistics" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:grid-cols-4">
            <Stat value="10+" label="Years Combined Experience" />
            <Stat value="50+" label="Qualified Support Staff" />
            <Stat value="120+" label="Participants Served" />
            <Stat value="96%" label="Positive Feedback" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gradient-to-b from-white to-[#0b3a74]/5">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<HeartHandshake className="size-6" />}
              title="Our Mission"
              desc="Provide personalised, high‑quality support that empowers people to thrive at home and in their community."
            />
            <Card
              icon={<Sparkles className="size-6" />}
              title="Our Vision"
              desc="A future where everyone has equitable access to the supports they need to live with dignity, choice, and independence."
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0b3a74] sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-gray-600">
            We’re guided by principles that ensure safe, meaningful and
            person‑centred care.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              icon={HeartHandshake}
              title="Compassion"
              desc="We listen first and support with empathy and respect."
            />
            <ValueCard
              icon={ShieldCheck}
              title="Safety & Quality"
              desc="We adhere to best practice and NDIS standards in everything we do."
            />
            <ValueCard
              icon={Users2}
              title="Person‑Centred"
              desc="You make the decisions. We build supports around your goals."
            />
            <ValueCard
              icon={Clock}
              title="Reliability"
              desc="Consistent, dependable support you can count on."
            />
            <ValueCard
              icon={Stethoscope}
              title="Clinical Excellence"
              desc="Led by experienced clinicians and trained support staff."
            />
            <ValueCard
              icon={Sparkles}
              title="Continuous Improvement"
              desc="We keep learning and refining to deliver better outcomes."
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#0b3a74] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-white/80">
                A multidisciplinary team committed to safe, compassionate and
                culturally responsive care.
              </p>
            </div>
            <Link
              href="/careers"
              className="hidden rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/20 md:inline-flex"
            >
              We’re hiring
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TeamCard
              name="Ava Nguyen"
              role="Clinical Lead (RN)"
              img="/teams/team-one.jpg"
            />
            <TeamCard
              name="Noah Singh"
              role="Support Coordinator"
              img="/teams/team-one.jpg"
            />
            <TeamCard
              name="Mia Roberts"
              role="Care Manager"
              img="/teams/team-one.jpg"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-r from-[#0b3a74] to-[#0a3366] p-8 text-white">
            <div
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl"
              aria-hidden="true"
            />
            <h3 className="text-2xl font-extrabold sm:text-3xl">
              Ready to start your care journey?
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-white/90">
              Talk to our team to discuss supports, funding, and next steps
              tailored to your goals.
            </p>
            <div className="mt-6">
              <Link
                href="/book"
                className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0b3a74] hover:bg-white/90"
              >
                Book an Assessment <ArrowRight className="ml-2 size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Stat({ value = "96%", label = "Positive Feedback" }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-white py-4 text-center">
      <div className="text-3xl font-extrabold text-[#0b3a74]">{value}</div>
      <div className="mt-1 text-xs text-gray-600">{label}</div>
    </div>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="inline-flex size-11 items-center justify-center rounded-full bg-[#e23d35]/10 text-[#e23d35]">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-extrabold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
    </div>
  );
}

function ValueCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="inline-flex size-11 items-center justify-center rounded-full bg-[#e23d35] text-white ring-4 ring-[#e23d35]/20">
        <Icon className="size-6" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-lg font-extrabold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
    </div>
  );
}

function TeamCard({ name, role, img }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 text-white ring-1 ring-white/15 backdrop-blur md:bg-white/10 md:ring-white/20">
      <div className="rounded-2xl bg-white p-4 text-gray-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img || "/placeholder.svg"}
          alt={`${name} – ${role}`}
          className="h-56 w-full rounded-xl object-cover"
        />
        <div className="mt-4">
          <div className="text-base font-extrabold">{name}</div>
          <div className="text-sm text-gray-600">{role}</div>
        </div>
      </div>
    </div>
  );
}
