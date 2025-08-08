export default function ReferralForm() {
  const input =
    "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-[#0b3a74]/20 placeholder:text-gray-400 focus:ring-2";
  const label = "block text-sm font-medium text-gray-900";

  return (
    <form action="#" method="post" className="space-y-10" noValidate>
      {/* Referrer details */}
      <section aria-labelledby="referrer-heading">
        <h2
          id="referrer-heading"
          className="text-xl font-extrabold text-[#0b3a74]"
        >
          Referrer Details
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="referrerName" className={label}>
              Full name
            </label>
            <input
              id="referrerName"
              name="referrerName"
              required
              placeholder="Jane Smith"
              className={input}
            />
          </div>
          <div>
            <label htmlFor="referrerOrg" className={label}>
              Organisation (optional)
            </label>
            <input
              id="referrerOrg"
              name="referrerOrg"
              placeholder="Hospital / Agency / Self‑referral"
              className={input}
            />
          </div>
          <div>
            <label htmlFor="referrerEmail" className={label}>
              Email
            </label>
            <input
              id="referrerEmail"
              name="referrerEmail"
              type="email"
              required
              placeholder="you@email.com"
              className={input}
            />
          </div>
          <div>
            <label htmlFor="referrerPhone" className={label}>
              Phone
            </label>
            <input
              id="referrerPhone"
              name="referrerPhone"
              type="tel"
              required
              placeholder="0403 441 882"
              className={input}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="relationship" className={label}>
              Relationship to participant
            </label>
            <input
              id="relationship"
              name="relationship"
              placeholder="Parent, Support Coordinator, Clinician, Self"
              className={input}
            />
          </div>
        </div>
      </section>

      {/* Participant details */}
      <section aria-labelledby="participant-heading">
        <h2
          id="participant-heading"
          className="text-xl font-extrabold text-[#0b3a74]"
        >
          Participant Details
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className={label}>
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              required
              placeholder="First name"
              className={input}
            />
          </div>
          <div>
            <label htmlFor="lastName" className={label}>
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              required
              placeholder="Last name"
              className={input}
            />
          </div>
          <div>
            <label htmlFor="dob" className={label}>
              Date of birth
            </label>
            <input id="dob" name="dob" type="date" required className={input} />
          </div>
          <div>
            <label htmlFor="ndis" className={label}>
              NDIS Number (optional)
            </label>
            <input
              id="ndis"
              name="ndis"
              inputMode="numeric"
              placeholder="123 456 789"
              className={input}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="address1" className={label}>
              Address
            </label>
            <input
              id="address1"
              name="address1"
              placeholder="Street address"
              className={input}
            />
          </div>
          <div>
            <label htmlFor="suburb" className={label}>
              Suburb
            </label>
            <input
              id="suburb"
              name="suburb"
              placeholder="Arncliffe"
              className={input}
            />
          </div>
          <div>
            <label htmlFor="state" className={label}>
              State
            </label>
            <select id="state" name="state" className={input}>
              <option>NSW</option>
              <option>VIC</option>
              <option>QLD</option>
              <option>SA</option>
              <option>WA</option>
              <option>TAS</option>
              <option>ACT</option>
              <option>NT</option>
            </select>
          </div>
          <div>
            <label htmlFor="postcode" className={label}>
              Postcode
            </label>
            <input
              id="postcode"
              name="postcode"
              inputMode="numeric"
              placeholder="2205"
              className={input}
            />
          </div>
          <div>
            <label htmlFor="language" className={label}>
              Preferred language
            </label>
            <input
              id="language"
              name="language"
              placeholder="English"
              className={input}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="diagnosis" className={label}>
              Primary diagnosis (optional)
            </label>
            <input
              id="diagnosis"
              name="diagnosis"
              placeholder="e.g., Autism, ABI, CP"
              className={input}
            />
          </div>
          <div className="sm:col-span-2">
            <label className="inline-flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="interpreter"
                className="size-4 rounded border-gray-300 text-[#0b3a74] focus:ring-[#0b3a74]"
              />
              Interpreter required
            </label>
          </div>
        </div>
      </section>

      {/* Supports requested */}
      <section aria-labelledby="supports-heading">
        <h2
          id="supports-heading"
          className="text-xl font-extrabold text-[#0b3a74]"
        >
          Supports Requested
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4">
          <fieldset className="rounded-lg border border-gray-200 p-4">
            <legend className="px-1 text-sm font-semibold text-gray-900">
              Select one or more
            </legend>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Daily Personal Activities",
                "Household Tasks",
                "Community Participation",
                "Community Nursing",
                "Supported Independent Living",
                "Transport Assistance",
                "Respite Care",
                "Capacity Building",
                "Life Skills Development",
              ].map((s) => (
                <label
                  key={s}
                  className="inline-flex items-center gap-2 text-sm"
                >
                  <input
                    type="checkbox"
                    name="services"
                    value={s}
                    className="size-4 rounded border-gray-300 text-[#0b3a74] focus:ring-[#0b3a74]"
                  />
                  {s}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="priority" className={label}>
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                className={input}
                defaultValue="Routine (within 14 days)"
              >
                <option>Routine (within 14 days)</option>
                <option>Soon (1–2 weeks)</option>
                <option>Urgent (within 72 hours)</option>
              </select>
            </div>
            <div>
              <label htmlFor="availability" className={label}>
                Preferred days/times
              </label>
              <input
                id="availability"
                name="availability"
                placeholder="e.g., Weekdays, 9am–1pm"
                className={input}
              />
            </div>
          </div>

          <div>
            <label htmlFor="goals" className={label}>
              Goals / notes
            </label>
            <textarea
              id="goals"
              name="goals"
              rows={4}
              placeholder="Anything else we should know?"
              className={input}
            />
          </div>
        </div>
      </section>

      {/* Funding & plan */}
      <section aria-labelledby="funding-heading">
        <h2
          id="funding-heading"
          className="text-xl font-extrabold text-[#0b3a74]"
        >
          Funding & Plan Details
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <span className={label}>Plan management</span>
            <div className="mt-2 flex flex-wrap gap-4 text-sm">
              {["Plan‑managed", "Self‑managed", "NDIA‑managed"].map((v) => (
                <label key={v} className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="planType"
                    value={v}
                    className="size-4 border-gray-300 text-[#0b3a74] focus:ring-[#0b3a74]"
                  />
                  {v}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="planManagerName" className={label}>
              Plan manager (if applicable)
            </label>
            <input
              id="planManagerName"
              name="planManagerName"
              placeholder="Company / Contact"
              className={input}
            />
          </div>
          <div>
            <label htmlFor="planManagerEmail" className={label}>
              Plan manager email
            </label>
            <input
              id="planManagerEmail"
              name="planManagerEmail"
              type="email"
              placeholder="pm@example.com"
              className={input}
            />
          </div>
          <div>
            <label htmlFor="planStart" className={label}>
              Plan start date
            </label>
            <input
              id="planStart"
              name="planStart"
              type="date"
              className={input}
            />
          </div>
          <div>
            <label htmlFor="planEnd" className={label}>
              Plan end date
            </label>
            <input id="planEnd" name="planEnd" type="date" className={input} />
          </div>
        </div>
      </section>

      {/* Consent & submit */}
      <section aria-labelledby="consent-heading">
        <h2 id="consent-heading" className="sr-only">
          Consent
        </h2>
        <div className="flex flex-col gap-4">
          <label className="inline-flex items-start gap-3 text-sm">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-1 size-4 rounded border-gray-300 text-[#0b3a74] focus:ring-[#0b3a74]"
            />
            <span>
              I confirm I have obtained consent from the participant (or
              guardian) to share these details in accordance with the{" "}
              <a
                href="/privacy"
                className="font-semibold text-[#0b3a74] underline underline-offset-4"
              >
                privacy policy
              </a>
              .
            </span>
          </label>

          {/* No logic for now; the button submits to "#" */}
          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-full bg-[#0b3a74] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0a3366] sm:w-auto"
          >
            Submit Referral
          </button>
        </div>
      </section>
    </form>
  );
}
