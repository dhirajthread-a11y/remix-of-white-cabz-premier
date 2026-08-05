import { Link } from "@tanstack/react-router";
import { Car, Mail, MapPin, Phone, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { SERVICES } from "@/lib/data";

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Twitter, label: "X", href: "https://x.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="bg-primary-gradient flex size-9 items-center justify-center rounded-xl">
              <Car className="size-5 text-primary-foreground" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-extrabold">
              White<span className="text-primary-glow">Cabz</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-foreground/65">
            Premium, safe and affordable cab services across India — local rides, outstation trips,
            airport transfers and corporate travel, available 24/7.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex size-9 items-center justify-center rounded-lg border border-ink-foreground/15 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <s.icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.14em] uppercase">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-ink-foreground/65 transition-colors hover:text-primary-glow"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.14em] uppercase">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  className="text-ink-foreground/65 transition-colors hover:text-primary-glow"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.14em] uppercase">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/65">
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary-glow" aria-hidden="true" />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-primary-glow">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary-glow" aria-hidden="true" />
              <a href={`mailto:${SITE.email}`} className="hover:text-primary-glow">
                {SITE.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary-glow" aria-hidden="true" />
              <span>{SITE.address}</span>
            </li>
          </ul>
          <div className="mt-4 overflow-hidden rounded-xl border border-ink-foreground/15">
            <iframe
              title="White Cabz office location map"
              src={SITE.mapEmbed}
              width="100%"
              height="140"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10 px-4 py-6 text-center text-xs text-ink-foreground/55">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
