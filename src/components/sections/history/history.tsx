import SectionHeader from "@/components/section-header";

const timeline = [
  {
    year: "1999",
    title: "Fundación",
    description:
      "El Dr. Adalberto Amaya Afanador funda la Tuna junto con un grupo de estudiantes y profesores apasionados por la música.",
  },
  {
    year: "2000-2005",
    title: "Primeros Reconocimientos",
    description:
      "La Tuna comienza a destacarse en festivales nacionales, ganando premios por su calidad musical y carisma.",
  },
  {
    year: "2006-2015",
    title: "Proyección Internacional",
    description:
      "Participación en festivales internacionales y giras por Latinoamérica, representando a Colombia con orgullo.",
  },
  {
    year: "2019",
    title: "Primer Álbum",
    description:
      "Lanzamiento del primer álbum en Spotify, preservando las canciones de nuestros fundadores.",
  },
  {
    year: "2024",
    title: "Presente",
    description:
      "Más de 25 años de trayectoria, siendo líderes en serenatas universitarias en Colombia.",
  },
];

export default function History() {
  return (
    <section id="history" className="py-20 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Nuestra Historia"
          subtitle="Más de dos décadas escribiendo la historia de la música tradicional en la Universidad de La Sabana"
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line - visible only on sm+ */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 hidden sm:block md:-translate-x-0.5" />

            {/* Timeline Items */}
            <div className="space-y-8 sm:space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  >
                    <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border">
                      <span className="inline-block text-2xl sm:text-3xl font-bold text-accent mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-accent border-4 border-background -translate-x-1.5 md:-translate-x-2 hidden sm:block" />

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
