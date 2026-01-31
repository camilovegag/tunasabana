import SectionHeader from "@/components/section-header";
import TestimonialCard from "@/components/testimonial-card";

const testimonials = [
  {
    name: "María Rodríguez",
    role: "Cliente Serenata Romántica",
    content:
      "La serenata fue perfecta. Mi esposo quedó sorprendido y emocionado. La Tuna Sabana tiene un nivel musical increíble y son muy profesionales.",
    rating: 5,
  },
  {
    name: "Carlos Martínez",
    role: "Evento Corporativo",
    content:
      "Contratamos a la Tuna para nuestro evento empresarial y fue todo un éxito. Agregaron un toque cultural y tradicional que todos nuestros invitados adoraron.",
    rating: 5,
  },
  {
    name: "Laura Gómez",
    role: "Cumpleaños",
    content:
      "Celebramos el cumpleaños de mi mamá con una serenata de la Tuna. Fue una experiencia única y emotiva. Súper recomendados, 100% profesionales.",
    rating: 5,
  },
  {
    name: "Andrés Silva",
    role: "Aniversario",
    content:
      "Excelente servicio. La calidad musical es impresionante y la simpatía con la que tratan a las personas hace que la experiencia sea inolvidable.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Lo Que Dicen Nuestros Clientes"
          subtitle="La satisfacción de nuestros clientes es nuestra mejor carta de presentación"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
