"use client"; // Required for interactivity

import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function AssessmentDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Button to trigger the drawer - can be placed anywhere */}
      <button
        onClick={toggleDrawer}
        className="inline-flex items-center rounded-full bg-[#0b3a74] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#0a3366] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        Book Assessment
      </button>

      {/* Drawer overlay and content */}
      <div
        className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" onClick={toggleDrawer} />

        {/* Drawer panel */}
        <div
          className={`fixed inset-y-0 right-0 flex w-full max-w-md transform flex-col bg-white shadow-xl transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header with close button */}
          <div className="flex items-center justify-between border-b p-6">
            <h2 className="text-xl font-bold text-gray-900">
              Book Your Assessment
            </h2>
            <button
              type="button"
              className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={toggleDrawer}
            >
              <span className="sr-only">Close panel</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Form content */}
          <div className="flex-1 overflow-y-auto p-6">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                >
                  <option>NDIS Support</option>
                  <option>In-Home Care</option>
                  <option>Community Participation</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#0b3a74] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#0a3366] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
