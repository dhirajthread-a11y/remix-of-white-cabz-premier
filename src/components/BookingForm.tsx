import { useState, type FormEvent } from "react";
import { CalendarDays, Clock, MapPin, Users, Car, Send } from "lucide-react";
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
import { openWhatsApp } from "@/lib/site";
import { FLEET } from "@/lib/data";

const schema = z.object({
  pickup: z.string().trim().min(2, "Enter a pickup location").max(120),
  drop: z.string().trim().min(2, "Enter a drop location").max(120),
  date: z.string().min(1, "Choose a travel date"),
  time: z.string().min(1, "Choose a pickup time"),
  passengers: z.string().min(1, "Select passenger count"),
  vehicle: z.string().min(1, "Select a vehicle type"),
});

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const [values, setValues] = useState({
    pickup: "",
    drop: "",
    date: "",
    time: "",
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
    openWhatsApp(
      `Hello White Cabz,\n\nNew Cab Booking\n\nPickup:\n${d.pickup}\n\nDrop:\n${d.drop}\n\nDate:\n${d.date}\n\nTime:\n${d.time}\n\nPassengers:\n${d.passengers}\n\nVehicle:\n${d.vehicle}\n\nPlease confirm my booking.`,
    );
    toast.success("Opening WhatsApp with your booking details…");
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
      className="rounded-2xl border border-border bg-card p-5 shadow-elegant sm:p-6"
    >
      {!compact && (
        <div className="mb-5">
          <h3 className="text-xl font-bold">Book your ride</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Get a confirmed cab in under 2 minutes on WhatsApp.
          </p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
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
          <Label htmlFor="date" className="mb-1.5 flex items-center gap-1.5">
            <CalendarDays className="size-3.5 text-primary" aria-hidden="true" /> Date
          </Label>
          <Input
            id="date"
            type="date"
            value={values.date}
            onChange={(e) => set("date")(e.target.value)}
          />
          {field("date")}
        </div>
        <div>
          <Label htmlFor="time" className="mb-1.5 flex items-center gap-1.5">
            <Clock className="size-3.5 text-primary" aria-hidden="true" /> Time
          </Label>
          <Input
            id="time"
            type="time"
            value={values.time}
            onChange={(e) => set("time")(e.target.value)}
          />
          {field("time")}
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

      <Button type="submit" variant="hero" size="lg" className="mt-5 w-full">
        <Send /> Book Now on WhatsApp
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        No advance payment · Free cancellation up to 2 hours before pickup
      </p>
    </form>
  );
}
