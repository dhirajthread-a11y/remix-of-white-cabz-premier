import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Send, User, Phone, Mail, MapPin, Users, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s-]{7,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email address").max(160),
  pickup: z.string().trim().min(2, "Enter a pickup location").max(120),
  drop: z.string().trim().min(2, "Enter a drop location").max(120),
  passengers: z.string().min(1, "Select passenger count"),
  vehicle: z.string().min(1, "Select a vehicle type"),
  notes: z.string().trim().max(600).optional(),
});

export function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    pickup: "",
    drop: "",
    passengers: "",
    vehicle: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (key: keyof typeof values) => (value: string) =>
    setValues((v) => ({ ...v, [key]: value }));

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setErrors({});
    const d = parsed.data;
    sendBooking(
      `Ride Booking — ${d.pickup} to ${d.drop}`,
      `Hello White Cabz,\n\nRide Booking Request\n\nName: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email}\nPickup: ${d.pickup}\nDrop: ${d.drop}\nPassengers: ${d.passengers}\nVehicle: ${d.vehicle}${
        d.notes ? `\nNotes: ${d.notes}` : ""
      }\n\nPlease confirm my ride.`,
    );
    toast.success("Sending your booking on WhatsApp and email…");
  };

  const err = (name: keyof typeof values) =>
    errors[name] ? (
      <p className="mt-1 text-xs text-destructive" role="alert">
        {errors[name]}
      </p>
    ) : null;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-label="Book a ride form"
      className="rounded-3xl border border-border/70 bg-card p-6 shadow-elegant sm:p-8"
    >
      <h2 className="font-display text-2xl font-extrabold">Book a ride</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        One click sends your booking to our WhatsApp and our inbox — we reply within minutes.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="c-name" className="mb-1.5 flex items-center gap-1.5">
            <User className="size-3.5 text-primary" aria-hidden="true" /> Name
          </Label>
          <Input
            id="c-name"
            maxLength={80}
            autoComplete="name"
            value={values.name}
            onChange={(e) => set("name")(e.target.value)}
          />
          {err("name")}
        </div>
        <div>
          <Label htmlFor="c-phone" className="mb-1.5 flex items-center gap-1.5">
            <Phone className="size-3.5 text-primary" aria-hidden="true" /> Phone Number
          </Label>
          <Input
            id="c-phone"
            type="tel"
            maxLength={18}
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => set("phone")(e.target.value)}
          />
          {err("phone")}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="c-email" className="mb-1.5 flex items-center gap-1.5">
            <Mail className="size-3.5 text-primary" aria-hidden="true" /> Email
          </Label>
          <Input
            id="c-email"
            type="email"
            maxLength={160}
            autoComplete="email"
            value={values.email}
            onChange={(e) => set("email")(e.target.value)}
          />
          {err("email")}
        </div>
        <div>
          <Label htmlFor="c-pickup" className="mb-1.5 flex items-center gap-1.5">
            <MapPin className="size-3.5 text-primary" aria-hidden="true" /> Pickup Location
          </Label>
          <Input
            id="c-pickup"
            maxLength={120}
            placeholder="e.g. Jalandhar City"
            value={values.pickup}
            onChange={(e) => set("pickup")(e.target.value)}
          />
          {err("pickup")}
        </div>
        <div>
          <Label htmlFor="c-drop" className="mb-1.5 flex items-center gap-1.5">
            <MapPin className="size-3.5 text-primary" aria-hidden="true" /> Drop Location
          </Label>
          <Input
            id="c-drop"
            maxLength={120}
            placeholder="e.g. Delhi Airport T3"
            value={values.drop}
            onChange={(e) => set("drop")(e.target.value)}
          />
          {err("drop")}
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
          {err("passengers")}
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
          {err("vehicle")}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="c-notes" className="mb-1.5">
            Notes (optional)
          </Label>
          <Textarea
            id="c-notes"
            rows={4}
            maxLength={600}
            placeholder="Preferred time, luggage, child seat…"
            value={values.notes}
            onChange={(e) => set("notes")(e.target.value)}
          />
          {err("notes")}
        </div>
      </div>

      <Button type="submit" variant="hero" size="lg" className="mt-6 w-full">
        <Send /> Book Now
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Opens WhatsApp with your details and emails a copy to {""}
        our booking desk.
      </p>
    </form>
  );
}
