import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

interface CTAAction {
  label: string;
  href: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  className?: string;
  icon?: React.ReactNode;
  external?: boolean;
}

interface CTASectionProps {
  title: string;
  description: string;
  className?: string;
  primaryAction: CTAAction;
  secondaryAction?: CTAAction;
}

export default function CTASection({
  title,
  description,
  className,
  primaryAction,
  secondaryAction,
}: CTASectionProps) {
  return (
    <section className={cn("py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-balance">
            {title}
          </h2>
          <p className="text-lg opacity-90">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href={primaryAction.href}
              className={buttonVariants({
                size: "lg",
                variant: primaryAction.variant,
                className: primaryAction.className,
              })}
              target={primaryAction.external ? "_blank" : undefined}
              rel={primaryAction.external ? "noopener noreferrer" : undefined}
            >
              {primaryAction.icon}
              {primaryAction.label}
            </Link>

            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className={buttonVariants({
                  size: "lg",
                  variant: secondaryAction.variant,
                  className: secondaryAction.className,
                })}
                target={secondaryAction.external ? "_blank" : undefined}
                rel={
                  secondaryAction.external ? "noopener noreferrer" : undefined
                }
              >
                {secondaryAction.icon}
                {secondaryAction.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
