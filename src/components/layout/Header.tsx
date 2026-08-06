import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, Moon, Sun, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

function useDarkMode() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const stored = window.localStorage.getItem("wc-theme");
    const enabled = stored ? stored === "dark" : true;
    setDark(enabled);
    document.documentElement.classList.toggle("dark", enabled);
  }, []);
  const toggle = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      window.localStorage.setItem("wc-theme", next ? "dark" : "light");
      return next;
    });
  };
  return { dark, toggle };
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useDarkMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 shadow-sm backdrop-blur-xl"
          : "bg-background/60 backdrop-blur-md",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <Link to="/" className="flex items-center gap-2.5" aria-label="White Cabz home">
          <span className="bg-primary-gradient flex size-9 items-center justify-center rounded-xl shadow-glow">
            <Car className="size-5 text-primary-foreground" aria-hidden="true" />
          </span>
          <span className="font-display text-lg leading-none font-extrabold tracking-tight">
            White<span className="text-primary">Cabz</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary bg-primary/8" }}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <Sun /> : <Moon />}
          </Button>
          <Button asChild variant="ghost" size="sm" className="hidden xl:inline-flex">
            <a href={`tel:${SITE.phoneRaw}`}>
              <Phone /> {SITE.phoneDisplay}
            </a>
          </Button>
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">Book Now</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm">
              <SheetTitle className="font-display text-xl font-bold">
                White<span className="text-primary">Cabz</span>
              </SheetTitle>
              <ul className="mt-6 space-y-1">
                {NAV.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      activeOptions={{ exact: item.to === "/" }}
                      activeProps={{ className: "text-primary bg-primary/8" }}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button asChild variant="hero" size="lg" className="mt-6 w-full">
                <a href={`tel:${SITE.phoneRaw}`}>
                  <Phone /> Call {SITE.phoneDisplay}
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
