import type { Metadata } from "next";
import { CheckList, Container, PageHero } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { CtaBanner } from "@/components/CtaBanner";
import { growthStages, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Company licensing, MLO licensing, state expansion, renewals, and compliance for mortgage brokers and lenders.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Mortgage licensing solutions for every stage of growth"
        intro="Choose the support you need, from a single state license to fully managed licensing across your entire footprint."
      />

      <section className="border-b border-slate-200 bg-slate-50 py-14">
        <Container className="grid gap-6 md:grid-cols-3">
          {growthStages.map((stage) => (
            <div key={stage.title} className="flex gap-4">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-navy-900 text-brand-400">
                <Icon name={stage.icon} />
              </div>
              <div>
                <h2 className="font-display font-semibold text-navy-900">{stage.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted">{stage.body}</p>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-8">
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="grid scroll-mt-28 gap-8 rounded-3xl border border-slate-200 p-8 sm:p-10 lg:grid-cols-[1fr_1.1fr]"
            >
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name={s.icon} />
                  </div>
                  <span className="font-display text-sm font-semibold text-slate-400">0{i + 1}</span>
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold text-navy-900 sm:text-3xl">{s.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-muted">{s.summary}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-6 sm:p-8">
                <h3 className="text-xs font-semibold tracking-[0.2em] text-brand-600 uppercase">What&apos;s included</h3>
                <div className="mt-5">
                  <CheckList items={s.details} />
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
