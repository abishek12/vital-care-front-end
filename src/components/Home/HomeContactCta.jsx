import Link from "next/link";

export default function HomeContactCta() {
  return (
    <section aria-labelledby="home-contact-cta-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-24">
        <div className="rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_2px_20px_rgba(2,6,23,0.06)] md:p-10">
          <div className="inline-flex items-center rounded-full border border-[#3aa657] bg-white px-3 py-1 text-xs font-semibold text-[#3aa657] ring-1 ring-inset ring-[#3aa657]/30">
            CONTACT US
          </div>

          <h2
            id="home-contact-cta-heading"
            className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            <span className="text-[#e23d35]">Start Your Path</span>{" "}
            <span className="text-[#0b3a74]">To Better Care</span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
            Take the first step towards personalised NDIS support by reaching
            out to our expert team today.
          </p>

          <div className="mt-6">
            <Link
              href="/book"
              className="inline-flex items-center rounded-full bg-[#0b3a74] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0a3366]"
            >
              Book An Assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
