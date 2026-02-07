import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import HeroImg from "../../../public/walk.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid place-items-center min-h-[calc(100dvh-5rem)] w-full relative isolate overflow-hidden bg-black"
    >
      <div className="col-start-1 row-start-1 w-full min-h-full relative -z-10">
        <Image
          src={HeroImg}
          alt="Tuna Universidad de La Sabana en presentación"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary/30 to-primary" />
      </div>

      <div className="col-start-1 row-start-1 relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 text-primary-foreground">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-balance leading-tight drop-shadow-lg">
              {siteConfig.name}
            </h1>
            <p className="text-base sm:text-lg text-primary-foreground/90 drop-shadow-md max-w-2xl mx-auto">
              Desde 1999, llevamos alegría y amor por la música a bodas, grados,
              cumpleaños y eventos especiales.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <div className="flex flex-col items-center gap-2 text-primary-foreground/90 font-medium drop-shadow-md">
          <span className="text-sm">Descubre más</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce md:hidden">
        <ChevronDown className="w-8 h-8 text-accent drop-shadow-md" />
      </div>
    </section>
  );
}
