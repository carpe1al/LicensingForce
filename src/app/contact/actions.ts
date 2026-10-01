"use server";

import { site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
  values?: Record<string, string>;
};

const clean = (v: FormDataEntryValue | null, max = 2000) => String(v ?? "").trim().slice(0, max);

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never fill this hidden field.
  if (clean(formData.get("website"))) return { status: "success" };

  const data = {
    name: clean(formData.get("name"), 200),
    email: clean(formData.get("email"), 200),
    phone: clean(formData.get("phone"), 50),
    company: clean(formData.get("company"), 200),
    interest: clean(formData.get("interest"), 100),
    message: clean(formData.get("message"), 5000),
  };

  const errors: ContactState["errors"] = {};
  if (!data.name) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Please enter a valid email address.";
  if (!data.message) errors.message = "Please tell us a little about what you need.";
  if (Object.keys(errors).length) return { status: "error", errors, values: data, message: "Please fix the highlighted fields." };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Licensing Force Website <onboarding@resend.dev>";

  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[contact] RESEND_API_KEY not set; submission:", data);
      return { status: "success" };
    }
    console.error("[contact] RESEND_API_KEY is not configured");
    return {
      status: "error",
      values: data,
      message: `Our form is temporarily unavailable. Please email us at ${site.email} or call ${site.phone}.`,
    };
  }

  const rows = Object.entries(data)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0"><b>${k}</b></td><td>${escapeHtml(v || "—")}</td></tr>`)
    .join("");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `New website inquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
      html: `<h2>New consultation request</h2><table>${rows}</table>`,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text());
    return {
      status: "error",
      values: data,
      message: `Something went wrong sending your message. Please email us at ${site.email}.`,
    };
  }

  return { status: "success" };
}
