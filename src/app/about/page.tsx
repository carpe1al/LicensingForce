import type { Metadata } from "next";
import Image from "next/image";
import { Container, PageHero, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { CtaBanner } from "@/components/CtaBanner";
import { reasons } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Licensing Force helps mortgage companies get licensed, stay compliant, and grow with confidence.",
};

const pillars = [
  {
    title: "Licensing",
    body: "We prepare and file company, branch, and originator licenses accurately, and manage them for as long as you need us.",
  },
  {
    title: "Compliance",
    body: "We build and maintain the policies, reports, and records that keep you ready for regulators.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Licensing Force"
        title="Helping mortgage companies grow with confidence"
        intro="Licensing Force was built to take the complexity out of mortgage licensing and compliance, so the people running mortgage companies can focus on their borrowers and their teams."
      />

      <section className="py-20 sm:py-24">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Our mission"
              title="Licensing • Compliance"
              intro="Every state has its own rules, forms, and timelines. We bring them together into one clear plan and handle the work so you never have to wonder whether you're covered."
            />
          </div>
          <div className="rounded-3xl bg-navy-900 p-6">
            <Image src="/logo-lockup.png" alt="Licensing Force logo" width={1560} height={760} className="w-full" />
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white p-8 ring-1 ring-slate-200">
              <h2 className="font-display text-2xl font-bold text-gradient">{p.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="What sets us apart" title="Why companies choose us" />
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="flex gap-5">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={r.icon} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy-900">{r.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
