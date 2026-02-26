import { Heart, Music, Sparkles, Trophy } from "lucide-react";
import SectionHeader from "@/components/section-header";
import ValueCard from "@/components/value-card";

const values = [
  {
    icon: Music,
    title: "Calidad Musical",
    description:
      "Músicos empíricos con años de experiencia y dedicación a la música tradicional española y latinoamericana",
  },
  {
    icon: Heart,
    title: "Pasión y Simpatía",
    description:
      "Transmitimos alegría y emoción en cada presentación, creando momentos inolvidables",
  },
  {
    icon: Trophy,
    title: "Reconocimiento",
    description:
      "Premiados nacional e internacionalmente, representando a Colombia con orgullo",
  },
  {
    icon: Sparkles,
    title: "Tradición",
    description:
      "Mantenemos viva la tradición de la tuna universitaria española en Colombia",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="¿Quiénes Somos?"
          subtitle={
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                La Tuna de la Universidad de La Sabana es un grupo musical
                representativo fundado en 1999 por el{" "}
                <strong className="text-foreground">
                  Dr. Adalberto Amaya Afanador
                </strong>
                , un grupo de estudiantes y profesores.
              </p>
              <p>
                Con una trayectoria de más de 25 años, hemos ganado
                reconocimiento en Colombia y en el extranjero gracias a nuestra{" "}
                <strong className="text-accent">calidad musical</strong> y la{" "}
                <strong className="text-accent">simpatía</strong> que nos
                caracteriza.
              </p>
              <p>
                Hacer parte de la Tuna implica dedicación y compromiso. Es una
                oportunidad para desarrollar habilidades musicales, fortalecer
                la identidad cultural y vivir experiencias enriquecedoras
                durante la etapa universitaria.
              </p>
            </div>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
}
