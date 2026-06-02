import Link from "next/link";
import { Package2 } from "lucide-react";

const SERVICES = [
  { href: "/servicios/transporte-aereo", label: "Transporte Aéreo" },
  { href: "/servicios/transporte-maritimo", label: "Transporte Marítimo" },
  { href: "/servicios/courier-internacional", label: "Courier Internacional" },
  { href: "/servicios/agenciamiento-aduanero", label: "Agenciamiento Aduanero" },
  { href: "/servicios/transporte-nacional", label: "Transporte Nacional" },
  { href: "/servicios/almacenamiento-distribucion", label: "Almacenamiento" },
] as const;

const COMPANY = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/importacion", label: "Guía de Importación" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "Preguntas Frecuentes" },
  { href: "/trabaja-con-nosotros", label: "Trabaja con Nosotros" },
] as const;

function SvgIcon({ path, className }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d={path} />
    </svg>
  );
}

const SOCIAL_ICONS = {
  LinkedIn:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  Instagram:
    "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  Facebook:
    "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  TikTok:
    "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z",
} as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] mt-auto">
      <div className="mx-auto max-w-screen-xl px-6 py-16 md:px-12">
        {/* Top grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-[family-name:var(--font-barlow-var)] text-xl font-black tracking-widest text-[var(--text-primary)] uppercase"
            >
              <Package2 className="h-6 w-6 text-[var(--accent)]" strokeWidth={2.5} />
              AlphaCargo
            </Link>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              Movemos el mundo para ti. Logística internacional desde Ecuador con más de 5 años de experiencia y presencia en 180 países.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              {(
                [
                  { href: "https://linkedin.com", label: "LinkedIn" },
                  { href: "https://instagram.com", label: "Instagram" },
                  { href: "https://facebook.com", label: "Facebook" },
                  { href: "https://tiktok.com", label: "TikTok" },
                ] as const
              ).map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--border-accent)] hover:text-[var(--accent)]"
                >
                  <SvgIcon path={SOCIAL_ICONS[label]} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Empresa */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
              Empresa
            </p>
            <ul className="flex flex-col gap-2.5">
              {COMPANY.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
              Servicios
            </p>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
              Contacto
            </p>
            <ul className="flex flex-col gap-3 text-sm text-[var(--text-secondary)]">
              <li>
                <span className="block text-xs text-[var(--text-muted)]">Email</span>
                <a
                  href="mailto:info@alphacargo-ec.com"
                  className="transition-colors hover:text-[var(--text-primary)]"
                >
                  info@alphacargo-ec.com
                </a>
              </li>
              <li>
                <span className="block text-xs text-[var(--text-muted)]">WhatsApp</span>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "593999999999"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--text-primary)]"
                >
                  +593 99 999 9999
                </a>
              </li>
              <li>
                <span className="block text-xs text-[var(--text-muted)]">Horario</span>
                Lun–Vie 8:00–18:00 (ECT)
              </li>
              <li>
                <span className="block text-xs text-[var(--text-muted)]">Dirección</span>
                Guayaquil, Ecuador
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 text-xs text-[var(--text-muted)] sm:flex-row">
          <p>© {year} AlphaCargo. Todos los derechos reservados.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacidad" className="transition-colors hover:text-[var(--text-secondary)]">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="transition-colors hover:text-[var(--text-secondary)]">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
