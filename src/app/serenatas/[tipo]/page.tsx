import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CTASection from "@/components/sections/cta-section";
import PageHero from "@/components/sections/page-hero";
import { serenataTypes } from "@/data/serenatas";

interface Props {
  params: Promise<{ tipo: string }>;
}

export async function generateStaticParams() {
  return serenataTypes.map((type) => ({
    tipo: type.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tipo } = await params;
  const serenata = serenataTypes.find((t) => t.slug === tipo);

  if (!serenata) {
    return { title: "No encontrado" };
  }

  return {
    title: serenata.metaTitle,
    description: serenata.metaDescription,
    keywords: serenata.keywords,
    openGraph: {
      title: serenata.metaTitle,
      description: serenata.metaDescription,
      type: "website",
    },
  };
}

export default async function SerenataTypePage({ params }: Props) {
  const { tipo } = await params;
  const serenata = serenataTypes.find((t) => t.slug === tipo);

  if (!serenata) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <PageHero
        title={serenata.h1}
        description={serenata.description}
        imageSrc={serenata.heroImage}
        icon={<CheckCircle className="w-10 h-10 text-accent" />}
        quality={90}
      />

      {/* Features */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-8 text-center">
              ¿Qué incluye esta serenata?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {serenata.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 bg-card border border-border rounded-lg p-5"
                >
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
              ¿Por qué con la Tuna Sabana?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-accent">+26</p>
                <p className="text-muted-foreground text-sm">
                  Años de experiencia
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-accent">+500</p>
                <p className="text-muted-foreground text-sm">
                  Serenatas realizadas
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-accent">+50</p>
                <p className="text-muted-foreground text-sm">
                  Integrantes activos
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-accent">+60</p>
                <p className="text-muted-foreground text-sm">
                  Canciones en repertorio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`¿Listo para tu serenata?`}
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
