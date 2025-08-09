"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import BookAssessmentDrawer from "../Buton/AssessmentButton";

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
  const pathname = usePathname();

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur"
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

      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 md:px-6"
      >
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo/Vital-Care-Group-Colour.svg"
              alt="Vital Care Group Logo"
              className="size-20 shrink-0"
            />
          </Link>
        </div>

        <ul className="hidden items-center gap-2 md:flex">
          {navLinks.map((item) => {
            const isActive = item.href === pathname;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[
                    "inline-flex items-center rounded-full px-4 py-2 text-base font-semibold transition-colors",
                    isActive
                      ? "bg-[#e23d35] text-white"
                      : "text-gray-800 hover:bg-[#0b3a74] hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex">
          <BookAssessmentDrawer
            trigger={
              <button className="rounded-full bg-[#0b3a74] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0a3a66]">
                Book An Assessment
              </button>
            }
          />{" "}
        </div>

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

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden overflow-hidden border-t border-gray-100 bg-white"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="grid gap-1 p-3">
              {navLinks.map((item) => {
                const isActive = item.href === pathname;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={[
                        "block w-full rounded-md px-3 py-2 text-base font-medium",
                        isActive
                          ? "bg-[#e23d35] text-white"
                          : "text-gray-900 hover:bg-[#0b3a74] hover:text-white",
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
                  className="block w-full rounded-md bg-[#0b3a74] px-3 py-2 text-center text-sm font-semibold text-white hover:bg-[#0a3a66]"
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
