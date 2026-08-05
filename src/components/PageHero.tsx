import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-hero-gradient relative overflow-hidden py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-20 size-96 rounded-full bg-primary/25 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <span className="inline-flex rounded-full border border-ink-foreground/20 bg-ink-foreground/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-ink-foreground/80 uppercase">
            {eyebrow}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold text-ink-foreground sm:text-5xl">{title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-ink-foreground/70">{subtitle}</p>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
