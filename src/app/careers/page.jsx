"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const JobApplicationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9+\s()-]+$/, "Invalid phone number")
    .min(10, "Too Short!")
    .required("Phone number is required"),
  position: Yup.string().required("Position is required"),
  suburb: Yup.string().required("Suburb is required"),
  experience: Yup.string().required(
    "Please describe your experience, skills and education"
  ),
  isQualifiedDriver: Yup.string().required("Please select an option"),
  resume: Yup.mixed().required("Resume is required"),
  coverLetter: Yup.mixed(),
  otherDocuments: Yup.mixed(),
});

export default function CareerPage() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "",
      suburb: "",
      experience: "",
      isQualifiedDriver: "",
      resume: null,
      coverLetter: null,
      otherDocuments: null,
    },
    validationSchema: JobApplicationSchema,
    onSubmit: (values) => {
      console.log(values);
      alert("Form submitted successfully!");
    },
  });

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero Content */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#0b3a74]/10 to-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-[#3aa657] bg-white px-3 py-1 text-xs font-semibold text-[#3aa657] ring-1 ring-inset ring-[#3aa657]/30">
              Careers
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="text-[#e23d35]">Apply Now</span>{" "}
              <span className="text-[#0b3a74]">and Join Our Team!</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-gray-700">
              Send us a message and our team will get back to you within one
              business day. If your enquiry is urgent, please call us.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Form */}
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-24">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-extrabold text-[#0b3a74]">
            Job Application Form
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Tell us a little about yourself and what you’re looking for.
          </p>
          <div className="mt-6">
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                      formik.touched.firstName && formik.errors.firstName
                        ? "border-red-500"
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="mt-1 text-sm text-red-600">
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                      formik.touched.lastName && formik.errors.lastName
                        ? "border-red-500"
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="mt-1 text-sm text-red-600">
                      {formik.errors.lastName}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-500"
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="mt-1 text-sm text-red-600">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                      formik.touched.phone && formik.errors.phone
                        ? "border-red-500"
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="mt-1 text-sm text-red-600">
                      {formik.errors.phone}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Position */}
                <div>
                  <label
                    htmlFor="position"
                    className="block text-sm font-medium text-gray-700"
                  >
                    What Position Do You Want To Apply For? *
                  </label>
                  <input
                    id="position"
                    name="position"
                    type="text"
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                      formik.touched.position && formik.errors.position
                        ? "border-red-500"
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.position}
                  />
                  {formik.touched.position && formik.errors.position ? (
                    <div className="mt-1 text-sm text-red-600">
                      {formik.errors.position}
                    </div>
                  ) : null}
                </div>

                {/* Experience */}
                <div>
                  <label
                    htmlFor="experience"
                    className="block text-sm font-medium text-gray-700"
                  >
                    What Experience, Skills And Education Do You Have? *
                  </label>
                  <input
                    id="experience"
                    name="experience"
                    type="text"
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                      formik.touched.experience && formik.errors.experience
                        ? "border-red-500"
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.experience}
                  />
                  {formik.touched.experience && formik.errors.experience ? (
                    <div className="mt-1 text-sm text-red-600">
                      {formik.errors.experience}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Suburb */}
                <div>
                  <label
                    htmlFor="suburb"
                    className="block text-sm font-medium text-gray-700"
                  >
                    What Suburb Do You Live In? *
                  </label>
                  <input
                    id="suburb"
                    name="suburb"
                    type="text"
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                      formik.touched.suburb && formik.errors.suburb
                        ? "border-red-500"
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.suburb}
                  />
                  {formik.touched.suburb && formik.errors.suburb ? (
                    <div className="mt-1 text-sm text-red-600">
                      {formik.errors.suburb}
                    </div>
                  ) : null}
                </div>

                {/* Driver Qualification */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Are You A Qualified Driver? *
                  </label>
                  <div className="mt-2 space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="isQualifiedDriver"
                        value="yes"
                        checked={formik.values.isQualifiedDriver === "yes"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="isQualifiedDriver"
                        value="no"
                        checked={formik.values.isQualifiedDriver === "no"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                  {formik.touched.isQualifiedDriver &&
                  formik.errors.isQualifiedDriver ? (
                    <div className="mt-1 text-sm text-red-600">
                      {formik.errors.isQualifiedDriver}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Resume Upload */}
                <div>
                  <label
                    htmlFor="resume"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Upload Your Resume *
                  </label>
                  <div
                    className={`mt-1 flex items-center p-2 border rounded-md shadow-sm ${
                      formik.touched.resume && formik.errors.resume
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <label
                      htmlFor="resume"
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md cursor-pointer hover:bg-gray-300 transition-colors"
                    >
                      Choose File
                    </label>
                    <span className="ml-2 text-sm text-gray-500 truncate">
                      {formik.values.resume
                        ? formik.values.resume.name
                        : "No file chosen"}
                    </span>
                    <input
                      id="resume"
                      name="resume"
                      type="file"
                      className="sr-only"
                      onChange={(event) =>
                        formik.setFieldValue(
                          "resume",
                          event.currentTarget.files[0]
                        )
                      }
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.resume && formik.errors.resume ? (
                    <div className="mt-1 text-sm text-red-600">
                      {formik.errors.resume}
                    </div>
                  ) : null}
                </div>

                {/* Cover Letter Upload */}
                <div>
                  <label
                    htmlFor="coverLetter"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Upload Your Cover Letter
                  </label>
                  <div className="mt-1 flex items-center p-2 border border-gray-300 rounded-md shadow-sm">
                    <label
                      htmlFor="coverLetter"
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md cursor-pointer hover:bg-gray-300 transition-colors"
                    >
                      Choose File
                    </label>
                    <span className="ml-2 text-sm text-gray-500 truncate">
                      {formik.values.coverLetter
                        ? formik.values.coverLetter.name
                        : "No file chosen"}
                    </span>
                    <input
                      id="coverLetter"
                      name="coverLetter"
                      type="file"
                      className="sr-only"
                      onChange={(event) =>
                        formik.setFieldValue(
                          "coverLetter",
                          event.currentTarget.files[0]
                        )
                      }
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Other Documents Upload */}
                <div>
                  <label
                    htmlFor="otherDocuments"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Upload Your Other Documents
                  </label>
                  <div className="mt-1 flex items-center p-2 border border-gray-300 rounded-md shadow-sm">
                    <label
                      htmlFor="otherDocuments"
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md cursor-pointer hover:bg-gray-300 transition-colors"
                    >
                      Choose Files
                    </label>
                    <span className="ml-2 text-sm text-gray-500 truncate">
                      {formik.values.otherDocuments &&
                      formik.values.otherDocuments.length > 0
                        ? `${formik.values.otherDocuments.length} file(s) chosen`
                        : "No file chosen"}
                    </span>
                    <input
                      id="otherDocuments"
                      name="otherDocuments"
                      type="file"
                      multiple
                      className="sr-only"
                      onChange={(event) =>
                        formik.setFieldValue(
                          "otherDocuments",
                          event.currentTarget.files
                        )
                      }
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-24 rounded-full hover:cursor-pointer bg-[#0b3a74] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0a3366]"
              >
                Apply
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
