import Image from "next/image";
import Link from "next/link";
import { ButtonLink, CheckList, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { CtaBanner } from "@/components/CtaBanner";
import { growthStages, programComparison, reasons, services, steps } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-grid relative overflow-hidden bg-navy-900">
        <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-brand-500/25 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-brand-800/40 blur-3xl" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Eyebrow dark>Licensing • Compliance</Eyebrow>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Mortgage licensing and compliance, <span className="text-brand-400">built for growth.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Whether you&apos;re launching a new company, expanding into new states, or keeping existing licenses in
              good standing, Licensing Force handles the filings, deadlines, and regulators so you can focus on
              closing loans.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Get Started</ButtonLink>
              <ButtonLink href="/solutions" variant="outline">
                Explore Solutions
              </ButtonLink>
            </div>
          </div>
          <div className="relative mx-auto hidden w-full max-w-sm lg:block">
            <div className="absolute inset-0 rounded-full bg-brand-500/20 blur-3xl" aria-hidden="true" />
            <Image
              src="/logo-mark-transparent.png"
              alt="Licensing Force shield"
              width={600}
              height={600}
              priority
              className="relative w-full drop-shadow-2xl"
            />
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Everything you need to get licensed and stay licensed"
            intro="From your first application to your hundredth renewal, we cover the full mortgage licensing lifecycle."
          />
          <div className="mt-14 flex flex-wrap justify-center gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions#${s.slug}`}
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white">
                  <Icon name={s.icon} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  Learn more <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Growth stages */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Solutions for every stage"
            title="Wherever your company is, we meet you there"
            intro="Our support adapts to where your business is today and where you want it to be next."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {growthStages.map((stage, i) => (
              <div key={stage.title} className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <span className="absolute top-6 right-7 font-display text-5xl font-bold text-slate-100">0{i + 1}</span>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-brand-400">
                  <Icon name={stage.icon} />
                </div>
                <h3 className="relative mt-5 font-display text-xl font-semibold text-navy-900">{stage.title}</h3>
                <p className="relative mt-3 leading-relaxed text-muted">{stage.body}</p>
                <div className="relative mt-6 border-t border-slate-100 pt-6">
                  <CheckList items={stage.points} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Management program */}
      <section className="bg-navy-900 py-20 sm:py-24">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              dark
              center={false}
              eyebrow="License Management Program"
              title="Ongoing licensing support after approval"
              intro="Getting licensed is the first step. Our monthly program keeps every company and MLO license current, every change filed, and every deadline met, with a dedicated specialist who knows your business."
            />
            <div className="mt-8">
              <ButtonLink href="/management-program">See How It Works</ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-300">
                  <th scope="col" className="px-5 py-4 font-medium">
                    What you get
                  </th>
                  <th scope="col" className="px-4 py-4 text-center font-semibold text-brand-400">
                    Licensing Force
                  </th>
                  <th scope="col" className="px-4 py-4 text-center font-medium">
                    On your own
                  </th>
                </tr>
              </thead>
              <tbody>
                {programComparison.map((row) => (
                  <tr key={row.feature} className="border-b border-white/5 last:border-0">
                    <td className="px-5 py-3.5 text-slate-200">{row.feature}</td>
                    <td className="px-4 py-3.5 text-center">
                      <Icon name="check" className="mx-auto h-5 w-5 text-brand-400" />
                      <span className="sr-only">Included</span>
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <Icon name="close" className="mx-auto h-4 w-4 text-slate-500" />
                      <span className="sr-only">Not included</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="A simple path to approval"
            intro="Three steps from planning to production, with our team handling the heavy lifting."
          />
          <div className="relative mt-14">
            <div
              className="absolute top-7 right-[16%] left-[16%] hidden h-0.5 bg-gradient-to-r from-brand-800 to-brand-500 md:block"
              aria-hidden="true"
            />
            <ol className="relative grid gap-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-800 to-brand-500 font-display text-xl font-bold text-white ring-8 ring-white">
                  {i + 1}
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-navy-900">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-xs leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Why us */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Why Licensing Force" title="A partner that knows the mortgage business" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl bg-white p-7 ring-1 ring-slate-200">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon name={r.icon} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{r.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
