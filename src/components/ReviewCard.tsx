import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stars({ rating = 5, className }: { rating?: number; className?: string }) {
  return (
    <div className={cn("flex gap-0.5", className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "size-4",
            i < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30",
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function ReviewCard({
  name,
  city,
  rating,
  text,
  initials,
}: {
  name: string;
  city: string;
  rating: number;
  text: string;
  initials: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant">
      <div className="flex items-center gap-3">
        <span className="bg-primary-gradient flex size-11 items-center justify-center rounded-full text-sm font-bold text-primary-foreground">
          {initials}
        </span>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-xs text-muted-foreground">{city}</p>
        </div>
      </div>
      <Stars rating={rating} className="mt-4" />
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">“{text}”</p>
    </article>
  );
}
