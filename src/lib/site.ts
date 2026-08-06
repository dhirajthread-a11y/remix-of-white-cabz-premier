export const SITE = {
  name: "White Cabz",
  domain: "https://whitecabz.com",
  phoneDisplay: "+91 94786 13001",
  phoneRaw: "+919478613001",
  whatsapp: "919478613001",
  email: "info@whitecabz.com",
  address: "Mohalla Bhojowal Patti, Chugitti, Jalandhar, Punjab 144004, India",
  hours: "Open 24 hours · 7 days a week",
  mapEmbed:
    "https://www.google.com/maps?q=Chugitti,+Jalandhar,+Punjab&output=embed",
} as const;

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string) {
  if (typeof window !== "undefined") {
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }
}

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Fleet" },
  { to: "/pricing", label: "Pricing" },
  { to: "/reviews", label: "Reviews" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function mailtoLink(subject: string, body: string) {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Sends the booking both ways: opens WhatsApp chat and the user's mail client. */
export function sendBooking(subject: string, message: string) {
  if (typeof window === "undefined") return;
  window.open(waLink(message), "_blank", "noopener,noreferrer");
  window.setTimeout(() => {
    window.location.href = mailtoLink(subject, message);
  }, 900);
}
