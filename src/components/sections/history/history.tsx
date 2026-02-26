import SectionHeader from "@/components/section-header";

const timeline = [
  {
    year: "1999",
    title: "Nuestra Fundación",
    description:
      "El Dr. Adalberto Amaya Afanador funda la Tuna junto con un grupo de estudiantes y profesores apasionados por la música.",
  },
  {
    year: "2001",
    title: "Primer viaje nacional",
    description:
      "Realizamos nuestro primer gran viaje nacional participando en la emblemática Feria de Manizales.",
  },
  {
    year: "2002",
    title: "Apadrinamiento",
    description:
      "La Tuna es apadrinada por la Tuna Javeriana, quienes nos entregan la Beca como símbolo de reconocimiento a nuestro esfuerzo y hermandad.",
  },
  {
    year: "2003",
    title: "Suramérica",
    description:
      "Nuestro primer viaje internacional. Participación destacada en el Festival de Tunas Universitarias de Concepción, Chile.",
  },
  {
    year: "2008",
    title: "Gran Gira Europea",
    description:
      "Gira con paso por Caracas, París, Madrid, Murcia y Toledo. Premio Internacional a Mejor Pasacalle en el Festival Costa Cálida de Murcia, España.",
  },
  {
    year: "2014",
    title: "Gira por México",
    description:
      "Viaje internacional con participación en certámenes en Aguascalientes y Monterrey, donde trajimos a casa el Premio a Mejor Pasacalles.",
  },
  {
    year: "2018-2021",
    title: "Música, Perú y Resiliencia",
    description:
      "Premio Mejor Solista en Duitama (2018). Gira por el BITUP en Perú (2019). Pese a la pandemia seguimos creciendo y ganamos virtualmente Mejor Tuna en Perú (2021).",
  },
  {
    year: "2023",
    title: "A Triunfar en España",
    description:
      "Nueva gira por Murcia y Granada. En el prestigioso Certamen Costa Cálida obtuvimos 3° Mejor Tuna, Mejor Show de Pandereta y el anhelado premio a Tuna Simpatía.",
  },
  {
    year: "2024",
    title: "Recorriendo el país",
    description:
      "Destacamos como Mejor Tuna en Bucaramanga, 2° Mejor Tuna en Cartagena de Indias y múltiples galardones (Capa y Panderetas) a nivel nacional (CETUMNG).",
  },
  {
    year: "2025",
    title: "Nivel de Excelencia",
    description:
      "Consolidación nacional con premios a 2° Mejor Tuna en el VIII CETUMNG (y Mejores Capas y Panderetas) junto a victorias en el Certamen de la U. Nacional.",
  },
  {
    year: "2026",
    title: "El Legado Continúa",
    description:
      "Hoy, con más de 26 años ininterrumpidos de trayectoria, seguimos vistiendo nuestras becas con orgullo, cantando con el corazón y acompañando las mejores serenatas de Colombia.",
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
