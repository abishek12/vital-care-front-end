"use server";

function validate(form) {
  const errors = {};
  if (!form.name || form.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }
  const email = String(form.email || "").toLowerCase();
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(email)) {
    errors.email = "Please provide a valid email address.";
  }
  if (!form.message || form.message.trim().length < 10) {
    errors.message = "Please include a short message (10+ characters).";
  }
  return errors;
}

export async function submitContact(prevState, formData) {
  // Honeypot
  if (formData.get("company")) {
    return { ok: false, message: "Spam detected.", errors: {} };
  }

  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    topic: formData.get("topic"),
    message: formData.get("message"),
    consent: formData.get("consent") === "on",
  };

  const errors = validate(payload);
  if (Object.keys(errors).length > 0) {
    return {
      ok: false,
      message: "Please fix the errors and try again.",
      errors,
    };
  }

  // Simulate sending (e.g., email/CRM) — replace with your integration later.
  await new Promise((r) => setTimeout(r, 900));

  // You could POST to your CRM here with fetch(...)
  // await fetch("https://your-crm.example.com/leads", { method: "POST", body: JSON.stringify(payload) })

  return {
    ok: true,
    message: `Thanks ${
      payload.name?.split(" ")[0] || ""
    }, we’ll be in touch shortly.`,
    errors: {},
  };
}
