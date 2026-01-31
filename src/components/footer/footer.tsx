import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { social } from "@/config/social";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 lg:py-16 px-8 flex flex-col gap-4">
      <nav className="flex flex-col md:flex-row justify-between md:items-center gap-8">
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
        <div className="flex gap-3 mx-auto md:mx-0">
          {social.map((item) => (
            <a
              className="w-10 h-10 rounded-full bg-primary-foreground/10 grid place-items-center hover:bg-accent"
              key={item.name}
              href={item.href}
            >
              <Image src={item.src} alt={item.name} height={20} width={20} />
            </a>
          ))}
        </div>
      </nav>
      <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70 text-sm">
        <p>
          {siteConfig.name} &#169; {currentYear}.
        </p>
      </div>
    </footer>
  );
}
