import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { SERVICES } from "@/lib/data";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Cab Services — Local, Outstation & Airport Taxi | White Cabz" },
      {
        name: "description",
        content:
          "Explore White Cabz services: local taxi, outstation cabs, one-way and round trips, airport transfers, corporate travel, wedding cars, tours and monthly rentals.",
      },
      { property: "og:title", content: "Cab Services Across India | White Cabz" },
      {
        property: "og:description",
        content:
          "Ten tailored cab services for city rides, highways, airports, weddings and corporate travel.",
      },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            description: s.description,
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Cab services built around your journey"
        subtitle="Whatever the route, the hour or the group size — White Cabz has a vehicle and a plan for it."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-elegant">
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={service.image}
                    alt={`${service.title} service by White Cabz`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-bold">{service.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="hero" className="mt-6 w-full">
                    <a
                      href={waLink(
                        `Hello White Cabz,\n\nI want to book: ${service.title}.\n\nPlease share availability and pricing.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle /> Book Now
                    </a>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Not sure which service fits?" subtitle="Tell us your route and we will recommend the most economical option." />
    </>
  );
}
