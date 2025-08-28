import BookAssessmentDrawer from "@/components/Buton/AssessmentButton";
import {
  ArrowRight,
  Calendar,
  Phone,
  MessageCircle,
  Star,
  Clock,
  Users,
} from "lucide-react";

export default function HomeContactCta() {
  return (
    <section
      aria-labelledby="home-contact-cta-heading"
      className="bg-gradient-to-b from-gray-50 to-white py-16"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left: Contact CTA */}
          <div className="rounded-[24px] border border-gray-200 bg-white p-8 shadow-[0_2px_20px_rgba(2,6,23,0.06)] md:p-10">
            <div className="inline-flex items-center rounded-full border border-[#3aa657] bg-white px-3 py-1 text-xs font-semibold text-[#3aa657] ring-1 ring-inset ring-[#3aa657]/30">
              CONTACT US
            </div>

            <h2
              id="home-contact-cta-heading"
              className="mt-4 text-3xl tracking-tight sm:text-4xl"
            >
              <span className="text-[#e23d35] font-light">Start Your Path</span>{" "}
              <span className="text-[#0b3a74] font-extrabold">
                To Better Care
              </span>
            </h2>

            <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600">
              Take the first step towards personalised NDIS support by reaching
              out to our expert team today.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Clock className="h-5 w-5 text-[#0b3a74]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Quick Response
                  </p>
                  <p className="text-sm text-gray-600">
                    We'll get back to you within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Users className="h-5 w-5 text-[#0b3a74]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Expert Team
                  </p>
                  <p className="text-sm text-gray-600">
                    Experienced NDIS professionals
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Star className="h-5 w-5 text-[#0b3a74]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Personalized Approach
                  </p>
                  <p className="text-sm text-gray-600">
                    Care plans tailored to your needs
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookAssessmentDrawer
                trigger={
                  <button className="flex items-center justify-center gap-2 rounded-full bg-[#0b3a74] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#0a3a66] transition-colors duration-200">
                    <Calendar className="h-5 w-5" />
                    Book An Assessment
                    <ArrowRight className="h-5 w-5" />
                  </button>
                }
              />

              <a
                href="tel:1300000000"
                className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-[#0b3a74] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors duration-200"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>

          {/* Right: Blog Highlights */}
          <div className="rounded-[24px] border border-gray-200 bg-white p-8 shadow-[0_2px_20px_rgba(2,6,23,0.06)] md:p-10">
            <div className="inline-flex items-center rounded-full border border-[#e23d35] bg-white px-3 py-1 text-xs font-semibold text-[#e23d35] ring-1 ring-inset ring-[#e23d35]/30">
              BLOG HIGHLIGHTS
            </div>

            <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#0b3a74] sm:text-3xl">
              Our Latest Blogs
            </h3>

            <p className="mt-2 text-sm font-medium text-gray-500">
              Valuable Reads For You
            </p>

            <p className="mt-3 text-base leading-relaxed text-gray-600">
              Read value-packed blogs about NDIS services and updates. Practical
              guides and insights to help you make confident decisions.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#0b3a74]">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Understanding NDIS Plan Management
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Learn how to make the most of your NDIS funding
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#0b3a74]">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Preparing for Your NDIS Review
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Tips to ensure you get the support you need
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#0b3a74]">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Community Participation Ideas
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Engaging activities to build social connections
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="/blog"
                className="inline-flex items-center text-sm font-semibold text-[#0b3a74] hover:text-[#0a3a66] transition-colors duration-200"
              >
                Read all blog articles
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
