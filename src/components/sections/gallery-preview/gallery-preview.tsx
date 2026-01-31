import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/section-header";

const images = [
  {
    id: 1,
    alt: "Serenata romántica",
    placeholder: "bg-accent/20",
  },
  {
    id: 2,
    alt: "Festival universitario",
    placeholder: "bg-primary/20",
  },
  {
    id: 3,
    alt: "Presentación nocturna",
    placeholder: "bg-accent/30",
  },
];

export default function GalleryPreview() {
  return (
    <section id="gallery" className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Revive Nuestros Mejores Momentos"
          subtitle="Mira las fotos de viajes, serenatas y festivales. Descubre cómo transmitimos alegría en cada presentación."
        />

        {/* Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {images.map((image) => (
            <div
              key={image.id}
              className={`relative aspect-square rounded-lg overflow-hidden group ${image.placeholder}`}
            >
              {/* Placeholder - replace with actual images later */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <span className="text-sm">Imagen {image.id}</span>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-primary-foreground font-semibold">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Gallery Page */}
        <div className="text-center">
          <Link
            href="/galeria"
            className="inline-flex items-center gap-2 rounded-md bg-accent text-accent-foreground px-6 py-3 text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Ver toda la galería
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Spotify Section */}
        <div className="mt-16 sm:mt-20 max-w-4xl mx-auto text-center bg-muted/50 p-6 sm:p-8 lg:p-12 rounded-lg">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-foreground mb-4">
            Escucha a la Tuna en Spotify
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground mb-6">
            Ya puedes escuchar nuestro primer álbum en Spotify. Conoce las
            canciones que grabaron nuestros fundadores hace 20 años.
          </p>
          <Link
            href="/musica"
            className="inline-flex items-center gap-2 rounded-md bg-accent text-accent-foreground px-6 py-3 text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Escuchar nuestra música
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
