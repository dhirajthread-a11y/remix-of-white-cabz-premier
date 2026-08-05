import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FaqSection } from "@/components/FaqSection";
import { CtaBand } from "@/components/CtaBand";
import { waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Cab Fare & Pricing Packages — Transparent Rates | White Cabz" },
      {
        name: "description",
        content:
          "See White Cabz pricing for local, airport, outstation, corporate and hourly rental packages, including extra km, night, waiting and toll charges.",
      },
      { property: "og:title", content: "Transparent Cab Pricing | White Cabz" },
      {
        property: "og:description",
        content: "Clear per-km rates and package pricing with no hidden charges.",
      },
      { property: "og:url", content: "/pricing" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const PACKAGES = [
  {
    name: "Local Package",
    price: "₹1,499",
    unit: "8 hrs / 80 km",
    highlight: false,
    rows: [
      ["Distance included", "80 km"],
      ["Extra km", "₹12 / km"],
      ["Extra hour", "₹150 / hr"],
      ["Night charges", "₹300 (10 PM – 6 AM)"],
      ["Waiting charges", "₹2 / min after 30 min"],
      ["Toll & parking", "At actuals"],
    ],
  },
  {
    name: "Airport Package",
    price: "₹899",
    unit: "One-way transfer",
    highlight: true,
    rows: [
      ["Distance included", "Up to 35 km"],
      ["Extra km", "₹13 / km"],
      ["Free waiting", "60 min (arrivals)"],
      ["Night charges", "₹250 (11 PM – 5 AM)"],
      ["Waiting charges", "₹2 / min post free time"],
      ["Toll & parking", "At actuals"],
    ],
  },
  {
    name: "Outstation Package",
    price: "₹11 / km",
    unit: "Min 250 km per day",
    highlight: false,
    rows: [
      ["Distance included", "250 km / day"],
      ["Extra km", "₹11 / km"],
      ["Driver allowance", "₹400 / day"],
      ["Night charges", "₹300 halt"],
      ["Waiting charges", "₹150 / hr"],
      ["Toll, tax & permit", "At actuals"],
    ],
  },
  {
    name: "Corporate Package",
    price: "Custom",
    unit: "Monthly billing",
    highlight: false,
    rows: [
      ["Distance included", "As per contract"],
      ["Extra km", "Negotiated slab"],
      ["Invoicing", "Monthly with GST"],
      ["Night charges", "Waived on contract"],
      ["Waiting charges", "First 30 min free"],
      ["Toll & parking", "Billed at actuals"],
    ],
  },
  {
    name: "Hourly Rental",
    price: "₹249",
    unit: "Per hour · min 3 hrs",
    highlight: false,
    rows: [
      ["Distance included", "10 km / hour"],
      ["Extra km", "₹12 / km"],
      ["Extra hour", "₹249 / hr"],
      ["Night charges", "₹250 (10 PM – 6 AM)"],
      ["Waiting charges", "Included"],
      ["Toll & parking", "At actuals"],
    ],
  },
];

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Honest fares, published upfront"
        subtitle="No surge pricing, no hidden fees. What we quote is what you pay — plus tolls at actuals."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Packages"
            title="Choose a package that suits your travel"
            subtitle="Rates shown are for sedans. Hatchback fares are lower and SUV / Innova fares vary by vehicle."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 0.06}>
                <article
                  className={cn(
                    "flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant",
                    p.highlight
                      ? "border-primary/50 bg-card shadow-glow"
                      : "border-border bg-card",
                  )}
                >
                  {p.highlight ? (
                    <span className="bg-primary-gradient mb-4 self-start rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground">
                      Most booked
                    </span>
                  ) : null}
                  <h2 className="text-lg font-bold">{p.name}</h2>
                  <p className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-3xl font-extrabold text-primary">
                      {p.price}
                    </span>
                    <span className="text-xs text-muted-foreground">{p.unit}</span>
                  </p>
                  <dl className="mt-5 space-y-2.5 border-t border-border pt-5 text-sm">
                    {p.rows.map(([k, v]) => (
                      <div key={k} className="flex items-start justify-between gap-3">
                        <dt className="flex items-center gap-2 text-muted-foreground">
                          <Check className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
                          {k}
                        </dt>
                        <dd className="text-right font-medium">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <Button asChild variant="hero" className="mt-6 w-full">
                    <a
                      href={waLink(
                        `Hello White Cabz,\n\nI am interested in the ${p.name}.\n\nPlease share a detailed quote.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle /> Book Now
                    </a>
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <p className="mx-auto max-w-3xl rounded-xl border border-border bg-muted/50 p-5 text-center text-sm text-muted-foreground">
              <strong className="text-foreground">Toll policy:</strong> all toll plazas, state
              permits, entry taxes and parking fees are charged at actuals and shown on your final
              bill with receipts.
            </p>
          </Reveal>
        </div>
      </section>

      <FaqSection />
      <CtaBand title="Want an exact fare for your route?" subtitle="Send us your pickup and drop and we will quote a fixed all-inclusive price." />
    </>
  );
}
