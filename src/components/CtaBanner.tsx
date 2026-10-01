import { ButtonLink, Container } from "./ui";
import { site } from "@/lib/site";

export function CtaBanner({
  title = "Ready to get licensed or expand?",
  body = "Tell us where you are and where you want to go. We'll build a licensing plan with the requirements, costs, and timeline for each state.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-brand-800 px-6 py-14 text-center sm:px-12">
          <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" aria-hidden="true" />
          <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-lg text-slate-300">{body}</p>
          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact">Schedule a Consultation</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="outline">
              Call {site.phone}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
