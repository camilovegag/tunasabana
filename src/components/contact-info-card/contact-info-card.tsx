import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}

export default function ContactInfoCard({
  icon: Icon,
  title,
  children,
}: ContactInfoCardProps) {
  return (
    <div className="p-4 bg-card rounded-lg border border-border flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <div>
        <p className="font-semibold text-foreground mb-1">{title}</p>
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}
