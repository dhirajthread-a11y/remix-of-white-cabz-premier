import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { toast } from "sonner";
import { Send, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ReviewCard, Stars } from "@/components/ReviewCard";
import { CtaBand } from "@/components/CtaBand";
import { REVIEWS } from "@/lib/data";
import { openWhatsApp } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews & Ratings — 4.9★ | White Cabz" },
      {
        name: "description",
        content:
          "Read verified White Cabz customer reviews from Jalandhar, Amritsar, Delhi and Chandigarh. 4.9 average rating from 1,284 riders. Share your own feedback.",
      },
      { property: "og:title", content: "Customer Reviews | White Cabz" },
      {
        property: "og:description",
        content: "4.9★ average rating from 1,284 verified riders across India.",
      },
      { property: "og:url", content: "/reviews" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "White Cabz Taxi Service",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1284",
            bestRating: "5",
          },
        }),
      },
    ],
  }),
  component: ReviewsPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  city: z.string().trim().min(2, "Please enter your city").max(60),
  feedback: z.string().trim().min(10, "Please share a little more detail").max(1000),
});

function ReviewForm() {
  const [values, setValues] = useState({ name: "", city: "", feedback: "" });
  const [rating, setRating] = useState(5);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please complete the review form.");
      return;
    }
    setErrors({});
    const d = parsed.data;
    openWhatsApp(
      `Hello White Cabz,\n\nNew Review\n\nName:\n${d.name}\n\nCity:\n${d.city}\n\nRating:\n${rating} / 5\n\nFeedback:\n${d.feedback}`,
    );
    toast.success("Thank you! Opening WhatsApp to share your review…");
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
      aria-label="Leave a review"
      className="rounded-2xl border border-border bg-card p-6 shadow-elegant"
    >
      <h2 className="text-xl font-bold">Share your experience</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Your feedback helps other travellers choose with confidence.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="rname" className="mb-1.5">
            Name
          </Label>
          <Input
            id="rname"
            maxLength={80}
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          />
          {err("name")}
        </div>
        <div>
          <Label htmlFor="rcity" className="mb-1.5">
            City
          </Label>
          <Input
            id="rcity"
            maxLength={60}
            value={values.city}
            onChange={(e) => setValues((v) => ({ ...v, city: e.target.value }))}
          />
          {err("city")}
        </div>
        <div className="sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium">Rating</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setRating(n)}
                aria-label={`Rate ${n} star${n > 1 ? "s" : ""}`}
                aria-pressed={rating === n}
                className="rounded p-1 transition-transform hover:scale-110"
              >
                <Star
                  className={cn(
                    "size-6",
                    n <= rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/40",
                  )}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="rfeedback" className="mb-1.5">
            Feedback
          </Label>
          <Textarea
            id="rfeedback"
            rows={4}
            maxLength={1000}
            value={values.feedback}
            onChange={(e) => setValues((v) => ({ ...v, feedback: e.target.value }))}
          />
          {err("feedback")}
        </div>
      </div>
      <Button type="submit" variant="hero" size="lg" className="mt-5 w-full">
        <Send /> Submit Review
      </Button>
    </form>
  );
}

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What our riders say"
        subtitle="Real feedback from customers who travel with White Cabz every week."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-elegant">
            <p className="font-display text-5xl font-extrabold text-primary">4.9</p>
            <Stars rating={5} className="mt-3 justify-center" />
            <p className="mt-3 text-sm text-muted-foreground">
              Average rating from 1,284 verified riders
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 0.06}>
                <ReviewCard {...r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft-gradient py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading eyebrow="Feedback" title="Rate your last ride" />
          <Reveal className="mt-10">
            <ReviewForm />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
