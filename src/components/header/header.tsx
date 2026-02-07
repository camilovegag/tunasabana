"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/config/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 w-full z-50 bg-primary shadow-md border-b border-primary-foreground/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Escudo de la Tuna Universidad de La Sabana"
              height={56}
              width={56}
              className="transition-transform hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  className={`transition-colors ${
                    pathname === item.href
                      ? "text-primary-foreground font-semibold underline underline-offset-4 decoration-2"
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-primary border-t border-primary-foreground/10 shadow-lg">
            <ul className="p-6 flex flex-col gap-4 items-center">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    className={`block py-2 text-lg font-medium transition-colors ${
                      pathname === item.href
                        ? "text-primary-foreground font-semibold underline underline-offset-4"
                        : "text-primary-foreground/80 hover:text-primary-foreground"
                    }`}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
