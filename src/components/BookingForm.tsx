import { useState, type FormEvent } from "react";
import { MapPin, Users, Car, Send, User, Phone, ShieldCheck } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sendBooking } from "@/lib/site";
import { FLEET } from "@/lib/data";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s-]{7,15}$/, "Enter a valid phone number"),
  pickup: z.string().trim().min(2, "Enter a pickup location").max(120),
  drop: z.string().trim().min(2, "Enter a drop location").max(120),
  passengers: z.string().min(1, "Select passenger count"),
  vehicle: z.string().min(1, "Select a vehicle type"),
});

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    passengers: "",
    vehicle: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (key: keyof typeof values) => (value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please complete all booking details.");
      return;
    }
    setErrors({});
    const d = parsed.data;
    sendBooking(
      `New Cab Booking — ${d.pickup} to ${d.drop}`,
      `Hello White Cabz,\n\nNew Cab Booking\n\nName: ${d.name}\nPhone: ${d.phone}\nPickup: ${d.pickup}\nDrop: ${d.drop}\nPassengers: ${d.passengers}\nVehicle: ${d.vehicle}\n\nPlease confirm my booking.`,
    );
    toast.success("Sending your booking on WhatsApp and email…");
  };

  const field = (name: keyof typeof values) =>
    errors[name] ? (
      <p className="mt-1 text-xs text-destructive" role="alert">
        {errors[name]}
      </p>
    ) : null;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-label="Cab booking form"
      className="rounded-3xl border border-border/70 bg-card/95 p-5 shadow-elegant backdrop-blur-xl sm:p-7"
    >
      {!compact && (
        <div className="mb-5">
          <span className="bg-primary-gradient inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide text-primary-foreground uppercase">
            <ShieldCheck className="size-3.5" aria-hidden="true" /> Instant confirmation
          </span>
          <h3 className="mt-3 font-display text-2xl font-extrabold">Book your ride</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill the details and tap Book Now — it goes straight to our WhatsApp and inbox.
          </p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" className="mb-1.5 flex items-center gap-1.5">
            <User className="size-3.5 text-primary" aria-hidden="true" /> Your Name
          </Label>
          <Input
            id="name"
            value={values.name}
            maxLength={80}
            autoComplete="name"
            placeholder="e.g. Harpreet Singh"
            onChange={(e) => set("name")(e.target.value)}
          />
          {field("name")}
        </div>
        <div>
          <Label htmlFor="phone" className="mb-1.5 flex items-center gap-1.5">
            <Phone className="size-3.5 text-primary" aria-hidden="true" /> Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            value={values.phone}
            maxLength={18}
            autoComplete="tel"
            placeholder="+91 98765 43210"
            onChange={(e) => set("phone")(e.target.value)}
          />
          {field("phone")}
        </div>
        <div>
          <Label htmlFor="pickup" className="mb-1.5 flex items-center gap-1.5">
            <MapPin className="size-3.5 text-primary" aria-hidden="true" /> Pickup Location
          </Label>
          <Input
            id="pickup"
            value={values.pickup}
            maxLength={120}
            placeholder="e.g. Jalandhar City"
            onChange={(e) => set("pickup")(e.target.value)}
          />
          {field("pickup")}
        </div>
        <div>
          <Label htmlFor="drop" className="mb-1.5 flex items-center gap-1.5">
            <MapPin className="size-3.5 text-primary" aria-hidden="true" /> Drop Location
          </Label>
          <Input
            id="drop"
            value={values.drop}
            maxLength={120}
            placeholder="e.g. Delhi Airport T3"
            onChange={(e) => set("drop")(e.target.value)}
          />
          {field("drop")}
        </div>
        <div>
          <Label className="mb-1.5 flex items-center gap-1.5">
            <Users className="size-3.5 text-primary" aria-hidden="true" /> Passengers
          </Label>
          <Select value={values.passengers} onValueChange={set("passengers")}>
            <SelectTrigger aria-label="Passenger count">
              <SelectValue placeholder="Select passengers" />
            </SelectTrigger>
            <SelectContent>
              {["1", "2", "3", "4", "5", "6", "7", "8+"].map((n) => (
                <SelectItem key={n} value={n}>
                  {n} {n === "1" ? "Passenger" : "Passengers"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {field("passengers")}
        </div>
        <div>
          <Label className="mb-1.5 flex items-center gap-1.5">
            <Car className="size-3.5 text-primary" aria-hidden="true" /> Vehicle Type
          </Label>
          <Select value={values.vehicle} onValueChange={set("vehicle")}>
            <SelectTrigger aria-label="Vehicle type">
              <SelectValue placeholder="Select vehicle" />
            </SelectTrigger>
            <SelectContent>
              {FLEET.map((v) => (
                <SelectItem key={v.name} value={v.name}>
                  {v.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {field("vehicle")}
        </div>
      </div>

      <Button type="submit" variant="hero" size="lg" className="mt-6 w-full">
        <Send /> Book Now
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Sent instantly to WhatsApp &amp; email · No advance payment
      </p>
    </form>
  );
}
