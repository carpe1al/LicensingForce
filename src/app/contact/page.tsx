import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Schedule a consultation with Licensing Force about mortgage licensing and compliance.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Schedule a consultation"
        intro="Tell us about your company and goals. We'll follow up to talk through your licensing plan, at no cost or obligation."
      />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <aside className="space-y-6">
            <div className="rounded-2xl bg-navy-900 p-8 text-white">
              <h2 className="font-display text-xl font-semibold">Talk to our team</h2>
              <ul className="mt-6 space-y-5 text-slate-300">
                <li className="flex gap-3">
                  <Icon name="mail" className="h-5 w-5 flex-none text-brand-400" />
                  <a href={`mailto:${site.email}`} className="hover:text-white">
                    {site.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Icon name="phone" className="h-5 w-5 flex-none text-brand-400" />
                  <a href={site.phoneHref} className="hover:text-white">
                    {site.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Icon name="clock" className="h-5 w-5 flex-none text-brand-400" />
                  {site.hours}
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 p-8">
              <h2 className="font-display text-lg font-semibold text-navy-900">What happens next?</h2>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted">
                <li>We review your request within one business day.</li>
                <li>We schedule a call to understand your goals.</li>
                <li>You receive a licensing plan with costs and timelines.</li>
              </ol>
            </div>
          </aside>

          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm sm:p-10">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
