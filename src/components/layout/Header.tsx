"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Package2 } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/importacion", label: "Importación" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
] as const;

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "593999999999";
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=Hola%2C%20me%20interesa%20cotizar%20un%20env%C3%ADo`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change / resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ease-out",
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-[family-name:var(--font-barlow-var)] text-xl font-black tracking-widest text-[var(--text-primary)] uppercase"
        >
          <Package2 className="h-6 w-6 text-[var(--accent)]" strokeWidth={2.5} />
          AlphaCargo
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-[var(--text-secondary)] transition-colors duration-150 hover:text-[var(--text-primary)]"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-150 hover:bg-[var(--accent-hover)] hover:shadow-[0_0_20px_var(--accent-glow)] active:scale-[0.97] md:inline-flex"
        >
          Cotizar ahora
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded-md p-2 text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] md:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile slide-down menu — grid-template-rows avoids max-height jank */}
      <div
        className={cn(
          "grid overflow-hidden md:hidden",
          "transition-[grid-template-rows] duration-300 ease-[var(--ease-smooth)]",
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <nav className="overflow-hidden flex flex-col gap-1 border-t border-[var(--border)] bg-[var(--bg)]/95 px-6 py-4 backdrop-blur-md">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--text-primary)]"
            >
              {label}
            </Link>
          ))}
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-3 rounded-lg bg-[var(--accent)] px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-150 hover:bg-[var(--accent-hover)] active:scale-[0.97]"
          >
            Cotizar ahora
          </a>
        </nav>
      </div>
    </header>
  );
}
