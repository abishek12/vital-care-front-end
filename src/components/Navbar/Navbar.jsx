"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
// Import motion and AnimatePresence for the animation
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "FAQs", href: "/faqs" },
  { label: "Referrals", href: "/referrals" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    // The entire header is now a motion component
    <motion.header
      className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur"
      // Animation to slide down from the top and fade in
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:block focus:bg-black focus:text-white px-3 py-4"
      >
        Skip to content
      </a>

      {/* Increased padding here from `py-3` to `py-5` to make the navbar taller */}
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 md:px-6"
      >
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            {/* The placeholder text logo is replaced with an image */}
            <img
              src="/logo/Vital-Care-Group-Colour.svg"
              alt="Vital Care Group Logo"
              className="size-20 shrink-0"
            />
          </Link>
        </div>

        {/* Desktop: Links */}
        <ul className="hidden items-center gap-2 md:flex">
          {navLinks.map((item, idx) => {
            const isHome = item.label === "Home";
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[
                    "inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    isHome
                      ? "bg-[#e23d35] text-white"
                      : "text-gray-800 hover:bg-gray-100",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop: CTA */}
        <div className="hidden md:flex">
          <Link
            href="/book"
            className="inline-flex items-center rounded-full bg-[#0b3a74] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0a3a66] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b3a74]"
          >
            Book An Assessment
          </Link>
        </div>

        {/* Mobile: Menu button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile: Drawer with Framer Motion animation */}
      {/* AnimatePresence allows components to animate out when they are removed from the tree */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden overflow-hidden border-t border-gray-100 bg-white"
            // The initial state of the animation
            initial={{ height: 0, opacity: 0 }}
            // The animated state when the component is present
            animate={{ height: "auto", opacity: 1 }}
            // The exit state when the component is removed
            exit={{ height: 0, opacity: 0 }}
            // Optional: add a smooth transition
            transition={{ duration: 0.2 }}
          >
            <ul className="grid gap-1 p-3">
              {navLinks.map((item, idx) => {
                const isHome = item.label === "Home";
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={[
                        "block w-full rounded-md px-3 py-2 text-sm font-medium",
                        isHome
                          ? "bg-[#e23d35] text-white"
                          : "text-gray-900 hover:bg-gray-100",
                      ].join(" ")}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}

              <li className="pt-1">
                <Link
                  href="/book"
                  className="block w-full rounded-md bg-[#0b3a74] px-3 py-2 text-center text-sm font-semibold text-white hover:bg-[#0a3366]"
                  onClick={() => setOpen(false)}
                >
                  Book An Assessment
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
