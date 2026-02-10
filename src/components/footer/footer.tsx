import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { social } from "@/config/social";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-col md:flex-row justify-between md:items-center gap-8 mb-8">
          <div className="grid grid-cols-[64px_1fr] gap-x-4 gap-y-1.5">
            <Link href="/" className="row-span-2 relative h-16 w-16">
              <Image
                src="/logo.png"
                alt={`Escudo de la ${siteConfig.name}`}
                fill
                className="object-contain"
              />
            </Link>
            <Link href="/" className="flex items-center pt-1">
              <h2 className="font-serif font-bold text-lg leading-none">
                {siteConfig.name}
              </h2>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-tight">
              Desde 1999, recorremos el mundo llevando alegría y amor por la
              música.
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 mx-auto md:mx-0">
            <div className="flex gap-3">
              {social.map((item) => (
                <a
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 grid place-items-center hover:bg-accent transition-colors"
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    height={20}
                    width={20}
                  />
                </a>
              ))}
            </div>
            <a
              href={`https://wa.me/${siteConfig.contact.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="md:ml-auto flex items-center gap-2 text-sm text-primary-foreground/90 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.contact.phone}
            </a>
          </div>
        </nav>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70 text-sm">
          <p>
            {siteConfig.name} &#169; {currentYear}.
          </p>
          <p className="text-xs mt-2 text-primary-foreground/50">
            Este sitio usa analíticas anónimas para mejorar la experiencia del
            usuario. No recopilamos datos personales.
          </p>
        </div>
      </div>
    </footer>
  );
}
