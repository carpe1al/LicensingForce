import type { ReactNode } from "react";
import { Container, PageHero } from "./ui";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} intro={`Last updated ${updated}`} />
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 leading-relaxed text-muted [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-navy-900">
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
