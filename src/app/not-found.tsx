import { ArrowLeft, Home, Music } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center">
              <Music className="w-12 h-12 text-accent" />
            </div>
          </div>

          {/* Error Code */}
          <div>
            <h1 className="text-8xl sm:text-9xl font-sans font-bold text-accent">
              404
            </h1>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-balance">
              Esta página se fue de serenata
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Parece que la página que buscas no existe o se ha movido a otro
              lugar. No te preocupes, la Tuna siempre encuentra el camino de
              regreso.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/"
              className={buttonVariants({
                size: "lg",
                className:
                  "bg-accent text-accent-foreground hover:bg-accent/90 gap-2",
              })}
            >
              <Home className="w-4 h-4" />
              Volver al inicio
            </Link>
            <Link
              href="/#contact"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className:
                  "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent gap-2",
              })}
            >
              <ArrowLeft className="w-4 h-4" />
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
