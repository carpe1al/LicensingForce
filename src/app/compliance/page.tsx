import type { Metadata } from "next";
import { CheckList, Container, PageHero, SectionHeading } from "@/components/ui";
import { Icon, type IconName } from "@/components/Icon";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Regulatory Compliance",
  description:
    "Compliance policies, BSA/AML programs, advertising review, call reports, and exam preparation for mortgage companies.",
};

const areas: { icon: IconName; title: string; items: string[] }[] = [
  {
    icon: "book",
    title: "Policies & Procedures",
    items: [
      "Compliance management system build-out",
      "State-specific policy requirements",
      "Annual policy reviews and updates",
    ],
  },
  {
    icon: "shield",
    title: "BSA/AML",
    items: [
      "Anti-money laundering program setup",
      "Suspicious activity reporting procedures",
      "Independent testing coordination",
    ],
  },
  {
    icon: "badge",
    title: "Advertising Review",
    items: [
      "Website and social media review",
      "Required NMLS and license disclosures",
      "Rate and trigger term guidance",
    ],
  },
  {
    icon: "trending",
    title: "Reporting",
    items: [
      "Mortgage Call Reports (MCR)",
      "Financial condition and audited financial filings",
      "State-specific periodic reports",
    ],
  },
  {
    icon: "scale",
    title: "Exams & Audits",
    items: [
      "State regulatory exam preparation",
      "Document request and response management",
      "Corrective action planning",
    ],
  },
];

export default function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Regulatory Compliance"
        title="Stay exam-ready, every day"
        intro="Regulators expect more than a license. We help you build and maintain the compliance program that keeps your company in good standing."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Compliance services"
            title="Practical compliance support for mortgage companies"
            intro="We focus on the requirements that matter most to state regulators and examiners, so your program is effective without being overwhelming."
          />
          <div className="mt-14 flex flex-wrap justify-center gap-6">
            {areas.map((a) => (
              <div key={a.title} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] rounded-2xl border border-slate-200 p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={a.icon} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">{a.title}</h3>
                <div className="mt-4 text-sm">
                  <CheckList items={a.items} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Have an exam coming up?"
        body="Reach out early. We'll help you organize documents, review your policies, and prepare your team."
      />
    </>
  );
}
