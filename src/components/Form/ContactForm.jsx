"use client";

import { useState } from "react";
import { useCreateContactMutation } from "@/lib/api/contact.api";

export default function ContactForm() {
  const [createContact, { isLoading, isError, isSuccess }] =
    useCreateContactMutation();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createContact(formData).unwrap();
      // Reset form on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      {/* Status Messages */}
      {isError && (
        <div className="rounded-md bg-red-50 p-3">
          <p className="text-sm text-red-800">
            There was an error submitting your message. Please try again.
          </p>
        </div>
      )}

      {isSuccess && (
        <div className="rounded-md bg-green-50 p-3">
          <p className="text-sm text-green-800">
            Thank you! Your message has been sent successfully.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-full bg-[#0b3a74] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0a3366] hover:cursor-pointer"
      >
         {isLoading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
