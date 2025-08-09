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
      {/* Contact CTA Section */}
      <HomeContactCta />
      {/* Blogs Section */}
      <HomeBlogs />
      {/* FAQ's Section */}
      <FAQSection />
      {/* FAQ's Section */}
      <HomeTestimonial />
      {/* Footer */}
      <Footer />
    </main>
  );
}

import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import ServiceSection from "@/components/Home/ServiceSection";
import HomeContactCta from "@/components/Home/HomeContactCta";
import HomeBlogs from "@/components/Home/HomeBlog";
import FAQSection from "@/components/Home/FaqSection";
import HomeTestimonial from "@/components/Home/HomeTestimonial";
import Footer from "@/components/Footer/Footer";
