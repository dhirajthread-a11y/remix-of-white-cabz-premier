import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "flex size-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-elegant transition-all duration-300 hover:bg-accent",
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <ArrowUp className="size-5" aria-hidden="true" />
      </button>

      <a
        href={`tel:${SITE.phoneRaw}`}
        aria-label={`Call ${SITE.phoneDisplay}`}
        className="bg-primary-gradient flex size-13 items-center justify-center rounded-full text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-110"
      >
        <Phone className="size-6" aria-hidden="true" />
      </a>

      <a
        href={waLink("Hello White Cabz, I would like to book a cab.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform duration-300 hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
        <MessageCircle className="relative size-6" aria-hidden="true" />
      </a>
    </div>
  );
}
