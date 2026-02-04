import { ExternalLink, Music2 } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/sections/cta-section";
import PageHero from "@/components/sections/page-hero";
import { buttonVariants } from "@/components/ui/button-variants";
import { album } from "@/data/music";

export const metadata: Metadata = {
  title: "Música",
  description:
    "Escucha la música de la Tuna Universidad de La Sabana en Spotify. Nuestro álbum con canciones tradicionales grabadas por nuestros tunos.",
  keywords:
    "tuna sabana música, spotify tuna, canciones tuna universitaria, música tradicional colombiana, álbum tuna",
};

const platforms = [
  {
    name: "Spotify",
    description: "Escucha nuestro álbum",
    icon: "/icons/spotify.svg",
    url: "https://open.spotify.com/artist/1mE7dHYb9rhhR3ogOCdoy2",
    color: "bg-[#1DB954]",
  },
  {
    name: "YouTube",
    description: "Videos de presentaciones",
    icon: "/icons/youtube.svg",
    url: "https://youtube.com/@tunasabana",
    color: "bg-[#FF0000]",
  },
  {
    name: "Apple Music",
    description: "También disponible aquí",
    icon: "/icons/apple.svg",
    url: "https://music.apple.com/es/artist/tuna-sabana/1569150021",
    color: "bg-[#FA243C]",
  },
];

export default function MusicaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Nuestra Música"
        description="Ya puedes escuchar nuestro álbum en las principales plataformas. Conoce las canciones que grabaron nuestros fundadores hace más de 20 años."
        imageSrc="/music.jpg"
        icon={<Music2 className="w-10 h-10 text-accent" />}
        imageClassName="opacity-40 mix-blend-overlay"
        quality={75}
      />

      {/* Spotify Embed Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-8 text-center">
              Escucha en Spotify
            </h2>

            {/* Spotify Embed */}
            <div className="bg-muted rounded-lg overflow-hidden mb-12">
              <iframe
                title="Spotify - Tuna Sabana"
                src="https://open.spotify.com/embed/artist/1mE7dHYb9rhhR3ogOCdoy2?utm_source=generator&theme=0"
                width="100%"
                height="500"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg border-0"
              />
            </div>

            {/* Track List */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="p-6 border-b border-border">
                <h3 className="text-xl font-serif font-bold text-foreground">
                  Nuestro Repertorio
                </h3>
                <p className="text-muted-foreground mt-1">
                  Algunas de las canciones que interpretamos en nuestras
                  presentaciones
                </p>
              </div>
              <div className="divide-y divide-border">
                {album.songs.map((song, index) => (
                  <div
                    key={song.id}
                    className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground w-6 text-center">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-medium text-foreground">
                          {song.name}
                        </p>
                        {song.popular && (
                          <span className="text-xs text-accent font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {song.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-8 text-center">
              Encuéntranos en
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="group bg-card border border-border rounded-lg p-6 text-center space-y-4 hover:shadow-lg transition-shadow"
                >
                  <div
                    className={`w-16 h-16 rounded-full ${platform.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}
                  >
                    <Image
                      src={platform.icon}
                      alt={platform.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 text-white"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {platform.description}
                    </p>
                  </div>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                      className:
                        "bg-transparent inline-flex items-center gap-2",
                    })}
                  >
                    Escuchar
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="¿Quieres escuchar nuestra música en vivo?"
        description="Contrata una serenata y disfruta de la tradición tunera en tu evento especial."
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
