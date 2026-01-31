import { Instagram, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import TunoCard from "@/components/ui/tuno-card";
import { siteConfig } from "@/config/site";
import { tunos } from "@/data/tunos";

export const metadata: Metadata = {
  title: "Tunos",
  description:
    "Conoce a los integrantes de la Tuna Universidad de La Sabana. Estudiantes y egresados apasionados por la música y la tradición tunera.",
  keywords:
    "integrantes tuna sabana, tunos universidad sabana, músicos tuna, estudiantes tuna",
};

export default function TunosPage() {
  const tunosWithImage = tunos.filter((t) => t.image && t.image.length > 0);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                <Users className="w-10 h-10 text-accent" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-balance">
              Nuestros Tunos
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
              Conoce a los estudiantes y egresados apasionados que conforman la
              Tuna Universidad de La Sabana.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">+{tunos.length}</p>
              <p className="text-muted-foreground">Integrantes</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">
                {tunosWithImage.length}
              </p>
              <p className="text-muted-foreground">Con foto</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">+7</p>
              <p className="text-muted-foreground">Instrumentos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">+25</p>
              <p className="text-muted-foreground">Años de historia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tunos Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
              Integrantes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada tuno aporta su talento y pasión para mantener viva nuestra
              tradición musical.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tunos.map((tuno) => (
              <TunoCard key={tuno.id} tuno={tuno} />
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 lg:py-24 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-balance">
              ¿Quieres ser parte de la Tuna?
            </h2>
            <p className="text-lg text-secondary-foreground/90">
              Si eres estudiante de la Universidad de La Sabana y te apasiona la
              música, te invitamos a conocernos. Hacer parte de la Tuna es una
              experiencia única que te acompañará toda la vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/#contact"
                className={buttonVariants({
                  size: "lg",
                  className:
                    "bg-accent text-accent-foreground hover:bg-accent/90",
                })}
              >
                Contáctanos
              </Link>
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className:
                    "border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent gap-2",
                })}
              >
                <Instagram className="w-4 h-4" />
                Síguenos en Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Serenata CTA */}
      <section className="py-16 lg:py-24 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-balance">
              Contrata una Serenata
            </h2>
            <p className="text-lg text-accent-foreground/90">
              Sorprende a esa persona especial con una serenata inolvidable de
              la Tuna Sabana.
            </p>
            <Link
              href="/#contact"
              className={buttonVariants({
                size: "lg",
                className:
                  "bg-primary text-primary-foreground hover:bg-primary/90",
              })}
            >
              Cotizar Ahora
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
