"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/config/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 px-8 py-4 w-full bg-accent-foreground">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Escudo de la Tuna Universidad de La Sabana"
            height={64}
            width={64}
          />
        </Link>
        <ul className="flex gap-5 text-sm">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                className={pathname === item.href ? "text-secondary" : ""}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
