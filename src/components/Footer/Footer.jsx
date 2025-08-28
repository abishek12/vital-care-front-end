import Link from "next/link";
import { Facebook, Instagram, MapPin, Mail, Phone, Clock } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "FAQs", href: "/faqs" },
  { label: "Blogs", href: "/blogs" },
  {
    label: "Feedback Form",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScuXYn2Y0XpZ8oBJd538Vg0jAiejPLKD-8KNx6UqIcjxw4L1g/viewform?fbzx=-2727018033967158586",
  },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];

const serviceLinks = [
  {
    label: "Daily Personal Activities",
    href: "/services/#daily-personal-activities",
  },
  { label: "Household Tasks", href: "/services/#household-tasks" },
  {
    label: "Innovative Community Participation",
    href: "/services/#innovative-community-participation",
  },
  {
    label: "Development of Daily Living and Life Skills",
    href: "/services/#daily-living-and-life-skills",
  },
  { label: "More Services", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0b3a74] text-white">
      <div className="mx-auto max-w-7xl px-4 pt-14 md:px-6 md:pt-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Left: Brand + blurb */}
          <div className="md:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/Vital-Care-Group-White-1.svg"
              alt="Vital Care Group logo"
              className="h-20 w-20 rounded-full bg-white/5 p-2 ring-2 ring-white/20"
            />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/85">
              Discover what makes Vital Care Group a trusted NDIS provider in
              NSW. Contact us to learn more about our services, our commitment
              to personalised care, and how we can empower you or your loved one
              to thrive.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10"
              >
                <Facebook className="size-4" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10"
              >
                <Instagram className="size-4" aria-hidden="true" />
              </a>
            </div>

            <hr className="mt-8 border-white/20" />
          </div>

          {/* Right: Link columns */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Quick Links */}
              <nav aria-label="Quick Links">
                <h3 className="text-lg font-extrabold text-[#e23d35]">
                  Quick Links
                </h3>
                <ul className="mt-4 space-y-3">
                  {quickLinks.map((item) => (
                    <li
                      key={item.label}
                      className="pb-2 border-b border-white/10"
                    >
                      <Link
                        href={item.href}
                        className="text-sm text-white/90 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Our Services */}
              <nav aria-label="Our Services">
                <h3 className="text-lg font-extrabold text-[#e23d35]">
                  Our Services
                </h3>
                <ul className="mt-4 space-y-3">
                  {serviceLinks.map((item) => (
                    <li
                      key={item.label}
                      className="pb-2 border-b border-white/10"
                    >
                      <Link
                        href={item.href}
                        className="text-sm text-white/90 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Contact Details */}
              <address className="not-italic">
                <h3 className="text-lg font-extrabold text-[#e23d35]">
                  Contact Details
                </h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-start gap-3 pb-2 border-b border-white/10">
                    <MapPin
                      className="mt-0.5 size-4 shrink-0 opacity-90"
                      aria-hidden="true"
                    />
                    <span>Arncliffe, NSW, 2205</span>
                  </li>
                  <li className="flex items-center gap-3 pb-2 border-b border-white/10">
                    <Mail
                      className="size-4 shrink-0 opacity-90"
                      aria-hidden="true"
                    />
                    <a
                      href="mailto:info@vitalcaregroup.com.au"
                      className="hover:text-white"
                    >
                      info@vitalcaregroup.com.au
                    </a>
                  </li>
                  <li className="flex items-center gap-3 pb-2 border-b border-white/10">
                    <Phone
                      className="size-4 shrink-0 opacity-90"
                      aria-hidden="true"
                    />
                    <a href="tel:0403441882" className="hover:text-white">
                      0403 441 882
                    </a>
                  </li>
                  <li className="flex items-center gap-3 pb-2 border-b border-white/10">
                    <Clock
                      className="size-4 shrink-0 opacity-90"
                      aria-hidden="true"
                    />
                    <span>9.00 AM - 5.00 PM</span>
                  </li>
                </ul>
              </address>
            </div>
          </div>
        </div>

        {/* Acknowledgement */}
        <p className="mt-10 border-t border-white/20 pt-6 text-center text-xs leading-relaxed text-white/85">
          Acknowledgement: Vital Care Group acknowledges the Traditional Owners
          of Country throughout Australia and recognise their continuing
          connection to land, waters and culture. We pay our respects to their
          Elders past, present and emerging.
        </p>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-4 text-[12px] text-white/80 md:flex-row">
          <span>© {new Date().getFullYear()} Vital Care Group</span>
          <span>
            ABN 62674647020
            {/* Website Designed &amp; Developed With {"\u2764\uFE0F"} By Vital Care
            Group */}
          </span>
        </div>
      </div>
    </footer>
  );
}
