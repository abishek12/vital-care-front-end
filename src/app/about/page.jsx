import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

import BookAssessmentDrawer from "../../components/Buton/AssessmentButton";
import AboutHero from "./components/AboutHero";
import AboutStats from "./components/AboutStats";
import AboutMission from "./components/AboutMission";
import AboutValue from "./components/AboutValue";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <AboutHero/>

      {/* Stats */}
      <AboutStats />

      {/* Mission & Vision */}
      <AboutMission/>

      {/* Values */}
      <AboutValue />

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
              <BookAssessmentDrawer
                trigger={
                  <button className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/20 hover:cursor-pointer">
                    Book An Assessment
                  </button>
                }
              />{" "}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
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
