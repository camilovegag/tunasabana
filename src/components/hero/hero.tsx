import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid place-items-center min-h-screen w-full relative isolate overflow-hidden"
    >
      <div className="col-start-1 row-start-1 w-full h-full relative -z-10">
        <Image
          src="/hero.jpg"
          alt="Tuna Universidad de La Sabana en presentación"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Content - Stacks on top */}
      <div className="col-start-1 row-start-1 relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 text-primary-foreground">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-balance leading-tight drop-shadow-lg">
              {siteConfig.name}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-accent font-semibold drop-shadow-md">
              Más de 25 años de tradición musical
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Positioned absolutely over grid */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <div className="flex flex-col items-center gap-2 text-primary-foreground/90 font-medium drop-shadow-md">
          <span className="text-sm">Descubre más</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>

      {/* Mobile Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce md:hidden">
        <ChevronDown className="w-8 h-8 text-accent drop-shadow-md" />
      </div>
    </section>
  );
}
