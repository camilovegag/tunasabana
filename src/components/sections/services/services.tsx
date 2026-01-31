import { Building2, GraduationCap, Heart, PartyPopper } from "lucide-react";
import SectionHeader from "@/components/section-header";
import ServiceCard from "@/components/service-card";
import { siteConfig } from "@/config/site";

const services = [
  {
    icon: Heart,
    title: "Serenatas Románticas",
    description:
      "Sorprende a esa persona especial con una serenata tradicional llena de amor y música",
    features: [
      "Repertorio romántico",
      "Hasta 1 hora",
      "Flores incluidas",
      "Fotografías",
    ],
    popular: true,
  },
  {
    icon: PartyPopper,
    title: "Eventos Especiales",
    description:
      "Cumpleaños, aniversarios, celebraciones. Hacemos tu evento único e inolvidable",
    features: [
      "Música variada",
      "Duración flexible",
      "Interacción con invitados",
      "Repertorio personalizado",
    ],
    popular: false,
  },
  {
    icon: Building2,
    title: "Eventos Corporativos",
    description:
      "Agregamos cultura y tradición a tus eventos empresariales e institucionales",
    features: [
      "Presentación formal",
      "Música tradicional",
      "Amenización profesional",
      "Adaptación al evento",
    ],
    popular: false,
  },
  {
    icon: GraduationCap,
    title: "Eventos Universitarios",
    description:
      "Festivales, graduaciones y ceremonias universitarias con auténtica tradición tunera",
    features: [
      "Experiencia universitaria",
      "Tradición estudiantil",
      "Repertorio tradicional",
      "Energía juvenil",
    ],
    popular: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Nuestros Servicios"
          subtitle="Ofrecemos una amplia variedad de servicios musicales para todo tipo de ocasiones. Cada presentación es única y personalizada según tus necesidades."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿Tienes algo diferente en mente?
          </p>
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border-2 border-foreground bg-transparent text-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
          >
            ¡Contáctanos!
          </a>
        </div>
      </div>
    </section>
  );
}
