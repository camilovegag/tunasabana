import { Music2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/section-header";
import CTASection from "@/components/sections/cta-section";
import PageHero from "@/components/sections/page-hero";
import { serenataTypes } from "@/data/serenatas";

export const metadata: Metadata = {
  title: "Serenatas en Bogotá",
  description:
    "Contrata la mejor serenata de tuna en Bogotá. Serenatas románticas, de cumpleaños, grado, bodas y eventos corporativos. +500 serenatas desde 1999. ¡Cotiza ahora!",
  keywords:
    "serenata bogota, serenata tuna bogota, contratar serenata bogota, serenata romantica, serenata cumpleaños, serenata de grado, serenata bodas, tuna serenata precio",
  openGraph: {
    title: "Serenatas en Bogotá | Tuna Universidad de La Sabana",
    description:
      "La mejor serenata de tuna en Bogotá. +26 años de tradición. Cotiza sin compromiso.",
    type: "website",
  },
};

export default function SerenatasPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Serenatas en Bogotá"
        description="Más de 26 años llevando la tradición tunera a cumpleaños, bodas, grados y eventos especiales en Bogotá y la Sabana."
        imageSrc="/walk.jpg"
        icon={<Music2 className="w-10 h-10 text-accent" />}
        quality={90}
      />

      {/* Types */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="¿Qué tipo de serenata buscas?"
            subtitle="Ofrecemos serenatas para cada ocasión especial. Elige la tuya y cotiza sin compromiso."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serenataTypes.map((type) => (
              <Link
                key={type.slug}
                href={`/serenatas/${type.slug}`}
                className="group bg-card border border-border rounded-lg p-6 space-y-4 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-accent transition-colors">
                  {type.shortTitle}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {type.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-accent group-hover:underline">
                  Ver más →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ-style content for SEO */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground text-center">
              Preguntas Frecuentes sobre Serenatas
            </h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  ¿Cuánto cuesta una serenata de tuna en Bogotá?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  El precio varía según la duración, el tipo de evento y la
                  ubicación. Contáctanos por WhatsApp para recibir una
                  cotización personalizada y sin compromiso.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  ¿En qué zonas de Bogotá realizan serenatas?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Cubrimos toda Bogotá, Chía, Cajicá, Zipaquirá y la Sabana de
                  Bogotá en general. También viajamos a otras ciudades de
                  Colombia.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  ¿Cuánto dura una serenata?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Una serenata típica dura entre 45 minutos y una hora, con
                  múltiples canciones, shows de pandereta y capa. Podemos
                  adaptar la duración a tus necesidades.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  ¿Con cuánta anticipación debo reservar?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Recomendamos reservar con al menos una semana de anticipación,
                  especialmente en fechas especiales como San Valentín, Día de
                  la Madre y temporada de grados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Listo para cotizar tu serenata?"
        description="Escríbenos por WhatsApp y te responderemos en minutos con disponibilidad y precio. ¡Sin compromiso!"
        className="bg-accent text-accent-foreground"
        primaryAction={{
          label: "Cotizar Serenata",
          href: "/contacto",
          className: "bg-primary text-primary-foreground hover:bg-primary/90",
        }}
      />
    </main>
  );
}
