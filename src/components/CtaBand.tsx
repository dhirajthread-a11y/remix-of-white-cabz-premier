import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { SITE, waLink } from "@/lib/site";

export function CtaBand({
  title = "Ready to ride with White Cabz?",
  subtitle = "Confirmed cabs, verified drivers and honest pricing — 24 hours a day, anywhere in India.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-hero-gradient relative overflow-hidden py-20">
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 size-72 rounded-full bg-primary/30 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-bold text-ink-foreground sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-foreground/70">{subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Book Now</Link>
            </Button>
            <Button asChild variant="whatsapp" size="xl" className="text-ink-foreground">
              <a href={waLink("Hello White Cabz, I would like to book a cab.")} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> WhatsApp Now
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="xl" className="text-ink-foreground">
              <a href={`tel:${SITE.phoneRaw}`}>
                <Phone /> {SITE.phoneDisplay}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
