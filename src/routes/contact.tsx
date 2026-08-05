import { createFileRoute } from "@tanstack/react-router";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { BookingForm } from "@/components/BookingForm";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact White Cabz — Book a Cab on WhatsApp or Call 24/7" },
      {
        name: "description",
        content:
          "Contact White Cabz in Jalandhar, Punjab. Call +91 94786 13001, email us, or send a WhatsApp enquiry. Open 24 hours, 7 days a week.",
      },
      { property: "og:title", content: "Contact White Cabz" },
      {
        property: "og:description",
        content: "Call, email or WhatsApp us — cabs available 24/7 across India.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Twitter, label: "X", href: "https://x.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to us any time, day or night"
        subtitle="Call, WhatsApp or send an enquiry — our booking desk never closes."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <Reveal>
            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-lg font-bold">Contact details</h2>
                <ul className="mt-4 space-y-4 text-sm">
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 size-4.5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a
                        href={`tel:${SITE.phoneRaw}`}
                        className="text-muted-foreground hover:text-primary"
                      >
                        {SITE.phoneDisplay}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 size-4.5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="text-muted-foreground hover:text-primary"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 size-4.5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">{SITE.address}</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="mt-0.5 size-4.5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <p className="font-medium">Business hours</p>
                      <p className="text-muted-foreground">{SITE.hours}</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Button asChild variant="hero">
                    <a
                      href={waLink("Hello White Cabz, I would like to book a cab.")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle /> WhatsApp Now
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={`tel:${SITE.phoneRaw}`}>
                      <Phone /> Call Now
                    </a>
                  </Button>
                </div>
                <div className="mt-6 flex gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex size-9 items-center justify-center rounded-lg border border-border transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <s.icon className="size-4" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="White Cabz location on Google Maps"
                  src={SITE.mapEmbed}
                  width="100%"
                  height="280"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="bg-soft-gradient py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Quick Booking"
            title="Prefer to book straight away?"
            subtitle="Fill in your trip details and we'll confirm your cab on WhatsApp."
          />
          <Reveal className="mt-10">
            <BookingForm compact />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
