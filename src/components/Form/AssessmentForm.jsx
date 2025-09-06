"use client";

import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCreateAssessmentMutation } from "@/lib/api/assessment.api";

export function AssessmentDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [createAssessment, { isLoading, isError, isSuccess }] =
    useCreateAssessmentMutation();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone_number: "",
    address: "",
    date_of_visit: "",
    type_of_service: "",
  });

  const toggleDrawer = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Format the date to ISO string if it exists
    const submissionData = {
      ...formData,
      date_of_visit: formData.date_of_visit
        ? new Date(formData.date_of_visit).toISOString()
        : "",
    };

    try {
      await createAssessment(submissionData).unwrap();
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  };

  // Reset form and close drawer on success after a delay
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setFormData({
          fullname: "",
          email: "",
          phone_number: "",
          address: "",
          date_of_visit: "",
          type_of_service: "",
        });
        setIsOpen(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return (
    <>
      {/* Button to trigger the drawer */}
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Status Messages */}
              {isError && (
                <div className="rounded-md bg-red-50 p-3">
                  <p className="text-sm text-red-800">
                    There was an error submitting your request. Please try
                    again.
                  </p>
                </div>
              )}

              {isSuccess && (
                <div className="rounded-md bg-green-50 p-3">
                  <p className="text-sm text-green-800">
                    Thank you! Your assessment request has been submitted
                    successfully.
                  </p>
                </div>
              )}

              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  required
                  value={formData.fullname}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone_number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  required
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="+61 400 000 000"
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Your full address"
                />
              </div>

              <div>
                <label
                  htmlFor="date_of_visit"
                  className="block text-sm font-medium text-gray-700"
                >
                  Preferred Date of Visit *
                </label>
                <input
                  type="date"
                  id="date_of_visit"
                  name="date_of_visit"
                  required
                  value={formData.date_of_visit}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="type_of_service"
                  className="block text-sm font-medium text-gray-700"
                >
                  Service Needed *
                </label>
                <select
                  id="type_of_service"
                  name="type_of_service"
                  required
                  value={formData.type_of_service}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">Select a service</option>
                  <option value="NDIS Support">NDIS Support</option>
                  <option value="In-Home Care">In-Home Care</option>
                  <option value="Community Participation">
                    Community Participation
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex w-full justify-center rounded-md bg-[#0b3a74] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#0a3366] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                >
                  {isLoading ? "Submitting..." : "Submit Request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
