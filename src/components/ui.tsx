import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`text-xs font-semibold tracking-[0.2em] uppercase ${dark ? "text-brand-400" : "text-brand-600"}`}>
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-navy-900"}`}
      >
        {title}
      </h2>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-slate-300" : "text-muted"}`}>{intro}</p>}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "outlineDark";
}) {
  const styles = {
    primary: "bg-brand-500 text-white shadow-lg shadow-brand-500/25 hover:bg-brand-600",
    outline: "border border-white/30 text-white hover:bg-white/10",
    outlineDark: "border border-navy-900/20 text-navy-900 hover:bg-navy-900/5",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${styles}`}
    >
      {children}
      {variant === "primary" && <Icon name="arrow" className="h-4 w-4" />}
    </Link>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro: ReactNode }) {
  return (
    <section className="bg-grid relative overflow-hidden bg-navy-900">
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" aria-hidden="true" />
      <Container className="relative py-20 sm:py-24">
        <Eyebrow dark>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{intro}</p>
      </Container>
    </section>
  );
}

export function CheckList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Icon name="check" className="mt-0.5 h-5 w-5 flex-none text-brand-500" />
          <span className={dark ? "text-slate-200" : "text-ink"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
