import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  icon: React.ReactNode;
  imageClassName?: string;
  quality?: number;
}

export default function PageHero({
  title,
  description,
  imageSrc,
  imageAlt,
  icon,
  imageClassName,
  quality = 75,
}: PageHeroProps) {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden min-h-[40vh] flex items-center justify-center bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          className={cn("object-cover", imageClassName)}
          priority
          quality={quality}
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary/20 to-primary" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center backdrop-blur-sm border border-accent/10">
              {icon}
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-balance drop-shadow-lg text-primary-foreground">
            {title}
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
