import type { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string | ReactNode;
  centered?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl mb-12 lg:mb-16 ${centered ? "mx-auto text-center" : ""}`}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
        {title}
      </h2>
      {subtitle && (
        <div className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
          {subtitle}
        </div>
      )}
    </div>
  );
}
