import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  popular = false,
}: ServiceCardProps) {
  return (
    <div
      className={`p-8 bg-card rounded-lg shadow-md hover:shadow-xl transition-all relative ${
        popular ? "border-2 border-accent" : "border border-border"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
            Más Popular
          </span>
        </div>
      )}

      <div className="flex flex-col space-y-4">
        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
          <Icon className="w-7 h-7 text-accent" />
        </div>

        <h3 className="text-2xl font-sans font-bold text-foreground">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">{description}</p>

        <ul className="space-y-2 pt-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="mt-4 inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground px-4 py-2 text-sm font-medium hover:bg-accent/90 transition-colors"
        >
          Solicitar Cotización
        </Link>
      </div>
    </div>
  );
}
