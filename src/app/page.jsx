export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      {/* About Section */}
      <AboutSection />
      {/* Service Section */}
      <ServiceSection />
      {/* FAQ's Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import ServiceSection from "@/components/Home/ServiceSection";
import FAQSection from "@/components/Home/FaqSection";
import Footer from "@/components/Footer/Footer";
