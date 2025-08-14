"use client";

import { useState, useRef, useEffect } from "react";
import { useActionState } from "react";
import { applyForJob } from "@/app/careers/action";
import { Briefcase, ChevronDown, CheckCircle2 } from "lucide-react";

const initialState = { ok: false, message: "", errors: {} };

export default function JobCard({ job }) {
  const [open, setOpen] = useState(false);
  const [showApply, setShowApply] = useState(false);
  const formRef = useRef(null);
  const [state, action, pending] = useActionState(applyForJob, initialState);

  useEffect(() => {
    if (state.ok) {
      formRef.current?.reset();
      setShowApply(false);
    }
  }, [state.ok]);

  return (
    <article className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-0.5 hover:shadow-md">
      <header className="pt-6">
        <h3 className="text-2xl font-extrabold leading-snug text-[#0b3a74]">
          {job.title}
        </h3>
        <p className="mt-1 text-sm text-gray-700">{job.summary}</p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Badge>{job.dept}</Badge>
          <Badge>{job.type}</Badge>
          <Badge>{job.location}</Badge>
          <Badge>{job.salary}</Badge>
        </div>
      </header>

      {/* Details toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-5 inline-flex w-full items-center justify-between rounded-full bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-900 ring-1 ring-gray-200 hover:bg-gray-100"
        aria-expanded={open}
      >
        Role details
        <ChevronDown
          className={`size-5 transition-transform ${open ? "-rotate-180" : ""}`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ul className="space-y-2 text-sm">
              <li className="font-semibold text-gray-900">Responsibilities</li>
              {job.responsibilities.map((r, i) => (
                <li key={i} className="text-gray-700">
                  • {r}
                </li>
              ))}
            </ul>
            <ul className="space-y-2 text-sm">
              <li className="font-semibold text-gray-900">Requirements</li>
              {job.requirements.map((r, i) => (
                <li key={i} className="text-gray-700">
                  • {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Apply toggle */}
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setShowApply((v) => !v)}
          className="inline-flex items-center rounded-full bg-[#0b3a74] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0a3366]"
        >
          {showApply ? "Close form" : "Apply now"}
        </button>
        <a
          href={`mailto:careers@vitalcaregroup.com.au?subject=Application:%20${encodeURIComponent(
            job.title
          )}`}
          className="inline-flex items-center rounded-full border border-[#0b3a74]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#0b3a74] hover:bg-[#0b3a74]/5"
        >
          Email your CV
        </a>
      </div>

      {/* Application form */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          showApply ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <form
            ref={formRef}
            action={action}
            className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2"
            noValidate
          >
            <input type="hidden" name="jobId" value={job.id} />
            <div className="sm:col-span-1">
              <label
                htmlFor={`${job.id}-name`}
                className="block text-sm font-medium text-gray-900"
              >
                Full name
              </label>
              <input
                id={`${job.id}-name`}
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-[#0b3a74]/20 placeholder:text-gray-400 focus:ring-2"
                placeholder="Jane Smith"
              />
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor={`${job.id}-email`}
                className="block text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                id={`${job.id}-email`}
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-[#0b3a74]/20 placeholder:text-gray-400 focus:ring-2"
                placeholder="you@email.com"
              />
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor={`${job.id}-phone`}
                className="block text-sm font-medium text-gray-900"
              >
                Phone
              </label>
              <input
                id={`${job.id}-phone`}
                name="phone"
                type="tel"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-[#0b3a74]/20 placeholder:text-gray-400 focus:ring-2"
                placeholder="0403 441 882"
              />
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor={`${job.id}-type`}
                className="block text-sm font-medium text-gray-900"
              >
                Employment preference
              </label>
              <select
                id={`${job.id}-type`}
                name="preference"
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-[#0b3a74]/20 focus:ring-2"
                defaultValue={job.type}
              >
                <option>Full‑time</option>
                <option>Part‑time</option>
                <option>Casual</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor={`${job.id}-message`}
                className="block text-sm font-medium text-gray-900"
              >
                Short message
              </label>
              <textarea
                id={`${job.id}-message`}
                name="message"
                rows={4}
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-[#0b3a74]/20 placeholder:text-gray-400 focus:ring-2"
                placeholder="Tell us briefly why you’re a great fit…"
              />
            </div>

            <div className="sm:col-span-2 flex items-center gap-3">
              <button
                type="submit"
                disabled={pending}
                className="inline-flex items-center rounded-full bg-[#0b3a74] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0a3366] disabled:opacity-60"
              >
                {pending ? "Submitting..." : "Submit application"}
              </button>

              {state.ok ? (
                <span className="inline-flex items-center gap-2 text-sm text-green-700">
                  <CheckCircle2 className="size-4" />
                  Application sent—thank you!
                </span>
              ) : state.message ? (
                <span className="text-sm text-[#e23d35]">{state.message}</span>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </article>
  );
}

function Badge({ children }) {
  return (
    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
      {children}
    </span>
  );
}
