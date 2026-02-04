import { Users } from "lucide-react";
import type { Metadata } from "next";
import CTASection from "@/components/sections/cta-section";
import PageHero from "@/components/sections/page-hero";
import { InstagramIcon } from "@/components/ui/icons";
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
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Nuestros Tunos"
        description="Conoce a los estudiantes y egresados apasionados que conforman la Tuna Universidad de La Sabana."
        imageSrc="/tunos.jpg"
        icon={<Users className="w-10 h-10 text-accent" />}
        quality={90}
      />

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">{tunos.length}</p>
              <p className="text-muted-foreground">Tunos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">+ 50</p>
              <p className="text-muted-foreground">Integrantes</p>
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
      <CTASection
        title="¿Quieres ser parte de la Tuna?"
        description="Si eres estudiante de la Universidad de La Sabana y te apasiona la música, te invitamos a conocernos. Hacer parte de la Tuna es una experiencia única que te acompañará toda la vida."
        className="bg-secondary text-secondary-foreground"
        primaryAction={{
          label: "Contáctanos",
          href: "/contacto",
          className: "bg-accent text-accent-foreground hover:bg-accent/90",
        }}
        secondaryAction={{
          label: "Síguenos en Instagram",
          href: siteConfig.links.instagram,
          variant: "outline",
          className:
            "border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent gap-2 group",
          icon: <InstagramIcon className="w-4 h-4" />,
          external: true,
        }}
      />
    </main>
  );
}
