import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ReferralForm from "@/components/Form/ReferralForm";

export const metadata = {
  title: "Referrals | Vital Care Group",
  description:
    "Submit a referral for NDIS support. Provide referrer and participant details, requested services, and plan information.",
};

export default function ReferralsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#0b3a74]/10 to-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-[#3aa657] bg-white px-3 py-1 text-xs font-semibold text-[#3aa657] ring-1 ring-inset ring-[#3aa657]/30">
              Make a Referral
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="text-[#e23d35]">Support Starts</span>{" "}
              <span className="text-[#0b3a74]">With a Conversation</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-gray-700">
              Send us the details below and our team will be in touch to discuss
              next steps. This form is for providers, coordinators, family
              members, and self‑referrals.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-24">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <ReferralForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
