import { Construction } from "lucide-react";
import type { Metadata } from "next";
import CTASection from "@/components/sections/cta-section";
import PageHero from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Galería de fotos de la Tuna Universidad de La Sabana. Revive nuestras mejores serenatas, presentaciones y momentos especiales en Bogotá.",
};

export default function GaleriaPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Galería en Construcción"
        description="Estamos seleccionando las mejores fotos de nuestra historia para compartirlas contigo. ¡Muy pronto podrás verlas!"
        imageSrc="/hero.jpg"
        icon={<Construction className="w-10 h-10 text-accent" />}
        imageClassName="opacity-30 mix-blend-overlay"
        quality={75}
      />

      <CTASection
        title="¿Tienes fotos de la Tuna?"
        description="Si tienes fotos antiguas o recientes de nuestras presentaciones, ¡nos encantaría verlas! Contáctanos para incluirlas en nuestra galería."
        className="bg-background text-foreground"
        primaryAction={{
          label: "Enviar Fotos",
          href: "/contacto",
          className: "bg-primary text-primary-foreground hover:bg-primary/90",
        }}
      />
    </main>
  );
}
