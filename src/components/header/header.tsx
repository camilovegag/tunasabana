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
    <header className="sticky top-0 w-full z-50 bg-primary-foreground shadow-md">
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
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
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
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-primary-foreground border-t border-border shadow-lg">
            <ul className="space-y-3 p-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    className={`block py-2 transition-colors ${
                      pathname === item.href
                        ? "text-accent font-semibold"
                        : "text-foreground hover:text-accent"
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
