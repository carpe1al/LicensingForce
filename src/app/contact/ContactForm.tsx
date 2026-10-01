"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "./actions";
import { Icon } from "@/components/Icon";
import { services } from "@/lib/content";

const initial: ContactState = { status: "idle" };

const inputClass =
  "mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-ink placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl bg-brand-50 p-10 text-center ring-1 ring-brand-100" role="status">
        <Icon name="check" className="mx-auto h-12 w-12 text-brand-500" />
        <h2 className="mt-4 font-display text-2xl font-bold text-navy-900">Thanks, we got your message.</h2>
        <p className="mt-2 text-muted">A member of our team will reach out within one business day.</p>
      </div>
    );
  }

  const err = state.errors ?? {};
  const v = state.values ?? {};

  return (
    <form key={JSON.stringify(v)} action={action} className="space-y-5" noValidate>
      {state.status === "error" && state.message && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {state.message}
        </p>
      )}

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-navy-900">
            Full name *
          </label>
          <input id="name" name="name" defaultValue={v.name} required autoComplete="name" className={inputClass} aria-invalid={!!err.name} />
          {err.name && <p className="mt-1 text-sm text-red-600">{err.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy-900">
            Email *
          </label>
          <input
            id="email"
          defaultValue={v.email}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            aria-invalid={!!err.email}
          />
          {err.email && <p className="mt-1 text-sm text-red-600">{err.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-navy-900">
            Phone
          </label>
          <input id="phone" name="phone" defaultValue={v.phone} type="tel" autoComplete="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium text-navy-900">
            Company
          </label>
          <input id="company" name="company" defaultValue={v.company} autoComplete="organization" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="text-sm font-medium text-navy-900">
          I&apos;m interested in
        </label>
        <select id="interest" name="interest" className={inputClass} defaultValue={v.interest ?? ""}>
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
          <option>License Management Program</option>
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-navy-900">
          How can we help? *
        </label>
        <textarea
          id="message"
          defaultValue={v.message}
          name="message"
          rows={5}
          required
          placeholder="Tell us about your company, the states you're in or targeting, and your timeline."
          className={inputClass}
          aria-invalid={!!err.message}
        />
        {err.message && <p className="mt-1 text-sm text-red-600">{err.message}</p>}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600 disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending…" : "Request a Consultation"}
        {!pending && <Icon name="arrow" className="h-4 w-4" />}
      </button>
    </form>
  );
}
