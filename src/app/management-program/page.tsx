import type { Metadata } from "next";
import { CheckList, Container, PageHero, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { CtaBanner } from "@/components/CtaBanner";
import { faqs, programComparison } from "@/lib/content";

export const metadata: Metadata = {
  title: "License Management Program",
  description:
    "Monthly mortgage license management: renewals, amendments, MLO onboarding, and compliance support with a dedicated specialist.",
};

const included = [
  "A dedicated licensing specialist who knows your company",
  "Annual company, branch, and MLO renewals",
  "NMLS amendments for ownership, officer, and address changes",
  "New MLO onboarding, sponsorships, and terminations",
  "Deadline tracking for renewals, reports, and continuing education",
  "Mortgage Call Report preparation support",
  "Regulator correspondence and deficiency responses",
  "Updates on rule changes in the states where you're licensed",
];

export default function ManagementProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="License Management Program"
        title="Your licensing department, without the overhead"
        intro="For a predictable monthly fee, our team manages your licenses after approval so nothing lapses and every change is filed correctly."
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading center={false} eyebrow="What's included" title="Ongoing support, start to finish" />
            <div className="mt-8">
              <CheckList items={included} />
            </div>
          </div>
          <div className="self-start overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-navy-900 text-white">
                <tr>
                  <th scope="col" className="px-5 py-4 font-medium">
                    Comparison
                  </th>
                  <th scope="col" className="px-4 py-4 text-center font-semibold text-brand-400">
                    Program
                  </th>
                  <th scope="col" className="px-4 py-4 text-center font-medium">
                    In-house
                  </th>
                </tr>
              </thead>
              <tbody>
                {programComparison.map((row) => (
                  <tr key={row.feature} className="border-b border-slate-100 last:border-0">
                    <td className="px-5 py-3.5 text-ink">{row.feature}</td>
                    <td className="px-4 py-3.5 text-center">
                      <Icon name="check" className="mx-auto h-5 w-5 text-brand-500" />
                      <span className="sr-only">Included</span>
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <Icon name="close" className="mx-auto h-4 w-4 text-slate-400" />
                      <span className="sr-only">Not included</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-200">
            {faqs.map((f) => (
              <details key={f.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-navy-900">
                  {f.q}
                  <span className="text-brand-500 transition group-open:rotate-45">
                    <Icon name="close" className="h-5 w-5 rotate-45" />
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner title="Let's keep your licenses current" />
    </>
  );
}
