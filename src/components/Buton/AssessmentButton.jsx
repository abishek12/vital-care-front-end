"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BookAssessmentDrawer({ trigger }) {
  return (
    <Dialog.Root>
      {/* Trigger button */}
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 cursor-pointer" />

        {/* Drawer Content with animation */}
        <Dialog.Content asChild>
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 h-screen w-full max-w-md bg-white shadow-lg z-50 p-6 overflow-y-auto focus:outline-none"
          >
            {/* Close Icon */}
            <div className="flex justify-end mb-4">
              <Dialog.Close asChild>
                <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full cursor-pointer">
                  <X className="size-5 text-gray-700" />
                </button>
              </Dialog.Close>
            </div>

            {/* Logo and Intro Text */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-6"
            >
              <Image
                src="/logo/Vital-Care-Group-Colour.svg"
                alt="Company Logo"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h2 className="text-xl font-bold mt-4">We Are Here For You</h2>
              <p className="text-gray-600 text-sm mt-1">
                Fill in your details and we’ll contact you shortly.
              </p>
            </motion.div>

            {/* Form */}
            <motion.form
              className="space-y-4 mt-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 25,
                delay: 0.1,
              }}
            >
              <input
                type="text"
                placeholder="Fullname"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full border rounded px-3 py-2"
              />
              <textarea
                placeholder="Message"
                className="w-full border rounded px-3 py-2"
                rows={4}
              />
              <button
                type="submit"
                className="w-full bg-[#0b3a74] text-white px-4 py-2 rounded cursor-pointer"
              >
                Submit
              </button>
            </motion.form>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
