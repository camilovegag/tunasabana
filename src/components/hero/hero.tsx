"use client";

import Autoplay from "embla-carousel-autoplay";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const heroImages = [
  {
    src: "/walk.jpg",
    alt: "Tuna Universidad de La Sabana caminando en la Universidad",
    priority: true,
  },
  {
    src: "/hero.jpg",
    alt: "Integrantes de la Tuna Universidad de La Sabana",
    priority: false,
  },
  {
    src: "/gallery.jpg",
    alt: "Tuna Universidad de La Sabana en su festival 2025",
    priority: false,
  },
  {
    src: "/music.jpg",
    alt: "Tuna Universidad de La Sabana cantando en tarima",
    priority: false,
  },
  {
    src: "/pandereta.jpg",
    alt: "Show de panderetas de la Tuna Universidad de La Sabana",
    priority: false,
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-black min-h-[calc(100dvh-5rem)]"
    >
      {/* Background Carousel - absolute positioned */}
      <div className="absolute inset-0 -z-10">
        <Carousel
          opts={{
            loop: true,
            duration: 50,
          }}
          plugins={[
            Autoplay({
              delay: 4500,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
          className="h-full"
        >
          <CarouselContent className="ml-0">
            {heroImages.map((image) => (
              <CarouselItem key={image.src} className="pl-0">
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={image.priority}
                    className="object-cover"
                    quality={image.priority ? 90 : 75}
                    sizes="100vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-linear-to-b from-primary/30 to-primary" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-32 min-h-[calc(100dvh-5rem)] flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center space-y-8 text-primary-foreground">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-balance leading-tight drop-shadow-lg">
              Serenatas inolvidables en Bogotá y la Sabana
            </h1>
            <p className="text-base sm:text-lg text-primary-foreground/90 drop-shadow-md max-w-2xl mx-auto">
              Más de 25 años creando momentos especiales en cumpleaños,
              aniversarios, bodas y eventos empresariales.
            </p>
          </div>

          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent text-accent-foreground px-8 py-3 text-base font-semibold hover:bg-secondary transition-colors shadow-lg"
          >
            ¡Cotiza tu serenata!
          </Link>
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
