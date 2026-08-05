import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { openWhatsApp } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s-]{7,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email address").max(160),
  message: z.string().trim().min(5, "Tell us a little about your trip").max(1000),
});

export function ContactForm() {
  const [values, setValues] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

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
    openWhatsApp(
      `Hello White Cabz,\n\nNew Enquiry\n\nName:\n${d.name}\n\nPhone:\n${d.phone}\n\nEmail:\n${d.email}\n\nMessage:\n${d.message}\n\nPlease contact me.`,
    );
    toast.success("Opening WhatsApp with your enquiry…");
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
      aria-label="Contact enquiry form"
      className="rounded-2xl border border-border bg-card p-6 shadow-elegant"
    >
      <h2 className="text-xl font-bold">Send us an enquiry</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Submitting opens WhatsApp with your details pre-filled — we usually reply within minutes.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" className="mb-1.5">
            Name
          </Label>
          <Input
            id="name"
            maxLength={80}
            autoComplete="name"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          />
          {err("name")}
        </div>
        <div>
          <Label htmlFor="phone" className="mb-1.5">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            maxLength={18}
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
          />
          {err("phone")}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="email" className="mb-1.5">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            maxLength={160}
            autoComplete="email"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          />
          {err("email")}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message" className="mb-1.5">
            Message
          </Label>
          <Textarea
            id="message"
            rows={5}
            maxLength={1000}
            placeholder="Trip route, date, number of passengers…"
            value={values.message}
            onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          />
          {err("message")}
        </div>
      </div>

      <Button type="submit" variant="hero" size="lg" className="mt-5 w-full">
        <Send /> Submit &amp; Chat on WhatsApp
      </Button>
    </form>
  );
}
