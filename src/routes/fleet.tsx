import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Fuel, MessageCircle, Snowflake, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { FLEET } from "@/lib/data";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Our Fleet — Sedan, SUV, Innova & Tempo Traveller | White Cabz" },
      {
        name: "description",
        content:
          "Browse the White Cabz fleet: hatchback, sedan, SUV, Innova Crysta, Ertiga, tempo traveller and luxury cars with seating, luggage and per-km pricing.",
      },
      { property: "og:title", content: "Premium Cab Fleet | White Cabz" },
      {
        property: "og:description",
        content:
          "Air-conditioned, insured and GPS-enabled vehicles for every group size and budget.",
      },
      { property: "og:url", content: "/fleet" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/fleet" }],
  }),
  component: FleetPage,
});

function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Fleet"
        title="A vehicle for every journey"
        subtitle="Every car in our fleet is air-conditioned, fully insured, GPS enabled and deep-cleaned before each trip."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {FLEET.map((v, i) => (
            <Reveal key={v.name} delay={(i % 3) * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-elegant">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={v.image}
                    alt={`${v.name} taxi available for booking with White Cabz`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {v.tag ? (
                    <span className="bg-primary-gradient absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground">
                      {v.tag}
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-bold">{v.name}</h2>
                  <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Users className="size-4 text-primary" aria-hidden="true" /> {v.passengers}
                    </li>
                    <li className="flex items-center gap-2">
                      <Briefcase className="size-4 text-primary" aria-hidden="true" /> {v.luggage}
                    </li>
                    <li className="flex items-center gap-2">
                      <Snowflake className="size-4 text-primary" aria-hidden="true" /> {v.ac}
                    </li>
                    <li className="flex items-center gap-2">
                      <Fuel className="size-4 text-primary" aria-hidden="true" /> {v.mileage}
                    </li>
                  </ul>
                  <div className="mt-5 flex items-baseline gap-2 border-t border-border pt-4">
                    <span className="text-xs text-muted-foreground">Starting from</span>
                    <span className="font-display text-xl font-extrabold text-primary">
                      {v.price}
                    </span>
                  </div>
                  <Button asChild variant="hero" className="mt-4 w-full">
                    <a
                      href={waLink(
                        `Hello White Cabz,\n\nI want to book a ${v.name}.\n\nPlease share availability and final fare.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle /> Book {v.name}
                    </a>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Need a bigger group or a special car?" subtitle="We arrange multi-car convoys, luxury sedans and decorated wedding vehicles on request." />
    </>
  );
}
