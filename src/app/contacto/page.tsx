import type { Metadata } from "next";
import Contact from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cotiza tu serenata de tuna en Bogotá. Contáctanos por WhatsApp +57 316 784 3615 para reservar. Serenatas románticas, de grado, cumpleaños y eventos especiales.",
  keywords:
    "contratar tuna serenata, cotizar serenata bogota, tuna serenata precio, contacto tuna sabana, whatsapp tuna bogota",
  openGraph: {
    title: "Cotiza tu Serenata | Tuna Universidad de La Sabana",
    description:
      "Reserva la mejor serenata de tuna en Bogotá. +500 serenatas realizadas desde 1999.",
    type: "website",
  },
};

export default function ContactPage() {
  return <Contact />;
}
