import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  BadgeIndianRupee,
  Clock3,
  MapPinned,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserCheck,
  ArrowRight,
  Users,
  Briefcase,
  Snowflake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsBand } from "@/components/StatsBand";
import { FaqSection } from "@/components/FaqSection";
import { CtaBand } from "@/components/CtaBand";
import { ReviewCard, Stars } from "@/components/ReviewCard";
import { FLEET, IMAGES, REVIEWS, SERVICES } from "@/lib/data";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "White Cabz — Reliable Cab Services Across India | Book Taxi 24/7" },
      {
        name: "description",
        content:
          "Book safe, comfortable and affordable taxi services for local, outstation, airport transfers and corporate travel across India. 24/7 cabs with verified drivers.",
      },
      { property: "og:title", content: "White Cabz — Reliable Cab Services Across India" },
      {
        property: "og:description",
        content:
          "Local, outstation, airport and corporate cab bookings across 50+ Indian cities. Verified drivers, GPS-enabled cars, transparent pricing.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const WHY = [
  { icon: UserCheck, title: "Professional Drivers", text: "Police-verified, courteous and trained on long highway routes." },
  { icon: Sparkles, title: "Clean Vehicles", text: "Sanitised interiors and a full inspection before every single trip." },
  { icon: Clock3, title: "24/7 Service", text: "Early flights or midnight arrivals — we are always on the road." },
  { icon: BadgeIndianRupee, title: "Affordable Pricing", text: "Transparent per-km rates with no hidden surge or booking fees." },
  { icon: MapPinned, title: "GPS Enabled", text: "Live tracking on every ride, shareable with your family instantly." },
  { icon: ShieldCheck, title: "Safe Travel", text: "Fully insured cars, SOS support and a 24/7 safety helpline." },
];

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={IMAGES.fleetNight}
          alt="White Cabz fleet — Ertiga and Kia SUV taxis ready for booking in Jalandhar"
          width={1600}
          height={1200}
          fetchPriority="high"
          className="absolute inset-0 size-full scale-110 object-cover"
        />
        {/* cinematic layers */}
        <div
          className="absolute inset-0 bg-[linear-gradient(105deg,hsl(0_0%_4%/0.94)_0%,hsl(0_0%_4%/0.78)_42%,hsl(0_0%_4%/0.35)_72%,transparent_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_120%,hsl(0_0%_0%/0.85),transparent_60%)]"
          aria-hidden="true"
        />
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute -top-40 -left-24 size-[34rem] rounded-full bg-primary/25 blur-[120px]"
        />
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.2 }}
          className="absolute right-[-10%] bottom-[-20%] size-[30rem] rounded-full bg-primary-glow/20 blur-[130px]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay bg-[linear-gradient(to_right,hsl(0_0%_100%)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%)_1px,transparent_1px)] bg-[size:64px_64px]"
        />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3">
              <img
                src={IMAGES.logo}
                alt="White Cabz Tour & Travels"
                width={56}
                height={56}
                className="size-14 rounded-2xl object-cover shadow-elegant ring-1 ring-ink-foreground/15"
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 bg-ink-foreground/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-ink-foreground/85 backdrop-blur-md">
                <ShieldCheck className="size-3.5 text-primary-glow" aria-hidden="true" />
                25,000+ travellers · 24/7 service
              </span>
            </div>

            <h1 className="mt-7 font-display text-[2.6rem] leading-[1.02] font-extrabold tracking-tight text-ink-foreground sm:text-6xl lg:text-[4.4rem]">
              Premium cabs.
              <br />
              <span className="text-gradient">One tap away.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-foreground/75">
              Spotless, GPS-tracked cars with police-verified chauffeurs — for local runs, outstation
              highways, airport transfers and weddings. Confirmed instantly on WhatsApp.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {["Verified drivers", "24/7 pickups", "No hidden charges", "GPS tracked"].map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-ink-foreground/15 bg-ink-foreground/5 px-3 py-1.5 text-xs font-medium text-ink-foreground/80 backdrop-blur-sm"
                >
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Book Now <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="whatsapp" size="xl" className="text-ink-foreground">
                <a
                  href={waLink("Hello White Cabz, I would like to book a cab.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle /> WhatsApp Now
                </a>
              </Button>
            </div>

            <dl className="mt-11 grid max-w-lg grid-cols-3 divide-x divide-ink-foreground/10 rounded-2xl border border-ink-foreground/10 bg-ink-foreground/5 p-5 backdrop-blur-md">
              {[
                ["4.9★", "Average rating"],
                ["50+", "Cities covered"],
                ["24/7", "Support"],
              ].map(([v, l]) => (
                <div key={l} className="px-3 first:pl-0 last:pr-0">
                  <dt className="font-display text-2xl font-bold text-ink-foreground">{v}</dt>
                  <dd className="mt-0.5 text-xs text-ink-foreground/60">{l}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="bg-primary-gradient absolute -inset-2 rounded-[2rem] opacity-25 blur-2xl"
            />
            <div className="relative rounded-[1.6rem] border border-ink-foreground/12 bg-background/95 p-1 shadow-elegant backdrop-blur-xl">
              <BookingForm />
            </div>
          </motion.div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent"
        />
      </section>



      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why White Cabz"
            title="A premium ride, every single time"
            subtitle="We obsess over the details that matter — punctuality, cleanliness, safety and fair pricing."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-elegant">
                  <span className="bg-primary-gradient flex size-12 items-center justify-center rounded-xl shadow-glow transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="size-6 text-primary-foreground" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft-gradient py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Cabs for every kind of journey"
            subtitle="From a quick city hop to a week-long tour — one trusted fleet, ten tailored services."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.05}>
                <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} by White Cabz`}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View all services <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Fleet"
            title="Choose the car that fits your trip"
            subtitle="Hatchbacks to tempo travellers — all air-conditioned, insured and GPS enabled."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FLEET.slice(0, 4).map((v, i) => (
              <Reveal key={v.name} delay={i * 0.05}>
                <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={v.image}
                      alt={`${v.name} cab available with White Cabz`}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold">{v.name}</h3>
                    <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Users className="size-3.5 text-primary" aria-hidden="true" />
                        {v.passengers}
                      </li>
                      <li className="flex items-center gap-2">
                        <Briefcase className="size-3.5 text-primary" aria-hidden="true" />
                        {v.luggage}
                      </li>
                      <li className="flex items-center gap-2">
                        <Snowflake className="size-3.5 text-primary" aria-hidden="true" />
                        {v.ac}
                      </li>
                    </ul>
                    <p className="mt-4 text-sm font-semibold text-primary">From {v.price}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/fleet">
                Explore full fleet <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <StatsBand />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Reviews"
            title="Loved by travellers across India"
            subtitle="A 4.9 average rating from more than 1,200 verified riders."
          />
          <Reveal className="mt-8 flex justify-center">
            <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5 shadow-sm">
              <Stars rating={5} />
              <span className="text-sm font-semibold">4.9 / 5 · 1,284 reviews</span>
            </div>
          </Reveal>
          <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
            {REVIEWS.map((r) => (
              <div key={r.name} className="w-[85vw] shrink-0 snap-start sm:w-[360px]">
                <ReviewCard {...r} />
              </div>
            ))}
          </div>
          <Reveal className="mt-6 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/reviews">
                Read all reviews <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <FaqSection />
      <CtaBand />
    </>
  );
}
