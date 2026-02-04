"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/config/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // En homepage sin scroll, usar texto blanco sobre el hero oscuro
  const useWhiteText = isHomePage && !isScrolled;

  return (
    <header
      className={`${
        isHomePage ? "fixed top-0 left-0" : "sticky top-0"
      } w-full z-50 ${isMobileMenuOpen ? "transition-none" : "transition-all duration-300"} ${
        isMobileMenuOpen
          ? "bg-primary-foreground shadow-lg"
          : isHomePage && !isScrolled
            ? "bg-transparent"
            : "bg-primary-foreground/95 backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4">
          <Link href="/" className="relative z-10">
            <Image
              src="/logo.png"
              alt="Escudo de la Tuna Universidad de La Sabana"
              height={64}
              width={64}
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
                      : useWhiteText && !isMobileMenuOpen
                        ? "text-white/90 hover:text-white"
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
            className={`md:hidden z-10 ${
              useWhiteText && !isMobileMenuOpen
                ? "text-white"
                : "text-foreground"
            }`}
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
          <div className="md:hidden py-4 bg-primary-foreground border-t border-border">
            <ul className="space-y-3">
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
