"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { motion } from "framer-motion";

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
            <div className="flex justify-between items-center mb-4">
              <Dialog.Title className="text-lg font-bold">
                Book an Assessment
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="cursor-pointer">
                  <X className="size-6" />
                </button>
              </Dialog.Close>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="email"
                placeholder="Your Email"
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
            </form>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
