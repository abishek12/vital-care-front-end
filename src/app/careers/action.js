"use server";

function validate(payload) {
  const errors = {};
  if (!payload.name || payload.name.trim().length < 2)
    errors.name = "Enter your full name.";
  const email = String(payload.email || "").toLowerCase();
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(email)) errors.email = "Enter a valid email.";
  if (!payload.message || payload.message.trim().length < 10)
    errors.message = "Please add a short message.";
  return errors;
}

export async function applyForJob(prev, form) {
  const payload = {
    jobId: form.get("jobId"),
    name: form.get("name"),
    email: form.get("email"),
    phone: form.get("phone"),
    preference: form.get("preference"),
    message: form.get("message"),
  };

  const errors = validate(payload);
  if (Object.keys(errors).length) {
    return { ok: false, message: "Fix the errors and try again.", errors };
  }

  // Simulate network/ATS integration
  await new Promise((r) => setTimeout(r, 900));

  // Example: send to your ATS or email service
  // await fetch("https://ats.example.com/applications", { method: "POST", body: JSON.stringify(payload) })

  return { ok: true, message: "Application submitted." };
}
