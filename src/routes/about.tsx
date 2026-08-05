import { createFileRoute } from "@tanstack/react-router";
import { Award, Eye, ShieldCheck, Target, UserCheck, BadgeCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsBand } from "@/components/StatsBand";
import { CtaBand } from "@/components/CtaBand";
import { IMAGES } from "@/lib/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About White Cabz — Our Story, Mission & Safety Standards" },
      {
        name: "description",
        content:
          "Learn about White Cabz: our story since 2014, mission, vision, safety standards, professional drivers, certifications and why 25,000+ customers trust us.",
      },
      { property: "og:title", content: "About White Cabz" },
      {
        property: "og:description",
        content:
          "A decade of safe, punctual and premium cab service across India — built on verified drivers and honest pricing.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const PILLARS = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To make premium, dependable road travel accessible to every Indian family and business through transparent pricing and genuine care.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be India's most trusted intercity cab brand — recognised for punctuality, safety and drivers who feel like family.",
  },
  {
    icon: Award,
    title: "Our Experience",
    text: "Over a decade on the road, 120,000+ completed trips and a fleet that grew from a single sedan to 180+ vehicles.",
  },
];

const TIMELINE = [
  ["2014", "Started with one sedan and a promise of on-time pickups in Jalandhar."],
  ["2017", "Crossed 10,000 trips and introduced 24/7 airport transfer service."],
  ["2019", "Expanded to outstation routes across Punjab, Himachal and Delhi NCR."],
  ["2022", "Launched corporate accounts with GST billing and dedicated fleet managers."],
  ["2024", "Fleet grew past 180 vehicles with full GPS tracking and SOS support."],
  ["2026", "Serving 50+ cities with a 4.9★ average rating from 1,284 reviews."],
];

const TRUST = [
  "Police-verified, uniformed drivers on every trip",
  "Live GPS tracking shared with your family",
  "Fixed all-inclusive quotes before you book",
  "Sanitised, mechanically inspected vehicles",
  "24/7 helpline with real humans, not bots",
  "Free cancellation up to 2 hours before pickup",
];

const CERTS = [
  ["Commercial Transport Licence", "Punjab State Transport Authority"],
  ["All-India Tourist Permit", "AITP — valid across 28 states"],
  ["Comprehensive Fleet Insurance", "Passenger cover on every vehicle"],
  ["GST Registered Business", "Compliant invoicing for corporates"],
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A decade of safe journeys"
        subtitle="White Cabz began in 2014 with one car, one driver and one rule: never keep a customer waiting."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
              <img
                src={IMAGES.fleetNight}
                alt="White Cabz fleet vehicles parked and ready for night duty"
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Built on punctuality, kept by trust"
              subtitle="What started as a single sedan running airport drops from Jalandhar has grown into one of North India's most dependable cab operators."
            />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                We invested early in the two things customers actually feel: drivers who are trained
                and treated well, and cars that are maintained on schedule rather than on breakdown.
              </p>
              <p>
                Today our team runs local rides, highway outstation trips, flight-tracked airport
                transfers, wedding fleets and monthly corporate contracts — with the same obsession
                over the 5 minutes before pickup.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-soft-gradient py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant">
                  <span className="bg-primary-gradient flex size-12 items-center justify-center rounded-xl shadow-glow">
                    <p.icon className="size-6 text-primary-foreground" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-lg font-bold">{p.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Safety First"
            title="Safety standards & professional drivers"
            subtitle="Every driver clears a background check, a road test and a hospitality briefing before their first trip."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-card p-7">
                <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold">Safety standards</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  <li>Pre-trip mechanical inspection and sanitisation checklist</li>
                  <li>Speed governors and live GPS on every vehicle</li>
                  <li>Comprehensive passenger insurance cover</li>
                  <li>24/7 control room with SOS escalation</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-7">
                <UserCheck className="size-8 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold">Professional drivers</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  <li>Police verification and licence validation</li>
                  <li>Minimum 5 years of commercial driving experience</li>
                  <li>Hospitality and first-aid training</li>
                  <li>Rest-hour policy on long outstation routes</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-soft-gradient py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading eyebrow="Timeline" title="How we grew, year by year" />
          <ol className="relative mt-12 border-l border-border pl-8">
            {TIMELINE.map(([year, text], i) => (
              <Reveal key={year} delay={i * 0.05}>
                <li className="relative pb-9">
                  <span className="bg-primary-gradient absolute -left-[41px] flex size-5 items-center justify-center rounded-full ring-4 ring-background" />
                  <p className="font-display text-lg font-bold text-primary">{year}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Certificates" title="Licensed, permitted and insured" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CERTS.map(([title, issuer], i) => (
              <Reveal key={title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant">
                  <BadgeCheck className="mx-auto size-9 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 text-sm font-bold">{title}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground">{issuer}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold">Why customers trust White Cabz</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {TRUST.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
