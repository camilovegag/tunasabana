import { randomUUID } from "node:crypto";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  role,
  content,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="p-8 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow relative border border-border">
      <Quote className="absolute top-4 right-4 w-12 h-12 text-accent/20" />

      <div className="space-y-4">
        {/* Rating */}
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_) => (
            <Star
              key={randomUUID()}
              className="w-5 h-5 fill-accent text-accent"
            />
          ))}
        </div>

        {/* Content */}
        <p className="text-foreground leading-relaxed italic">
          &ldquo;{content}&rdquo;
        </p>

        {/* Author */}
        <div className="pt-4 border-t border-border">
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
