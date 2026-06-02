import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const TESTIMONIALS = [
  {
    name: "Carlos Mendoza",
    company: "TechImport Ecuador",
    role: "Gerente de Compras",
    quote: "Llevamos 3 años trabajando con AlphaCargo para nuestras importaciones de electrónica desde China. El proceso es impecable y siempre hay alguien disponible para resolver cualquier problema.",
    initials: "CM",
  },
  {
    name: "Paola Vásquez",
    company: "Modas Paola",
    role: "Fundadora",
    quote: "Como pequeña empresaria, necesitaba un aliado logístico que me tratara con la misma seriedad que a una gran empresa. AlphaCargo hace exactamente eso. Mi primera importación fue un éxito total.",
    initials: "PV",
  },
  {
    name: "Roberto Andrade",
    company: "Andrade Distribuciones",
    role: "Director General",
    quote: "Manejo importaciones mensuales desde EE.UU. y Europa. Con AlphaCargo los tiempos se redujeron un 30% y los problemas aduaneros prácticamente desaparecieron. Los recomiendo sin dudar.",
    initials: "RA",
  },
  {
    name: "Sofía Guerrero",
    company: "Gourmet Market",
    role: "Directora de Operaciones",
    quote: "Importar alimentos especiales tiene sus complejidades. El equipo de AlphaCargo conoce cada detalle de los permisos sanitarios y siempre nos asesora con anticipación para evitar demoras.",
    initials: "SG",
  },
  {
    name: "Miguel Torres",
    company: "Torres Maquinaria",
    role: "Gerente Técnico",
    quote: "Maquinaria industrial de gran tamaño desde Alemania. AlphaCargo coordinó todo: seguros especiales, transporte sobredimensionado, montaje en destino. Un servicio de primera.",
    initials: "MT",
  },
] as const;

export default function Testimonials() {
  return (
    <section className="bg-[var(--surface)] py-24 overflow-hidden">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12">
        <ScrollReveal className="mb-16">
          <SectionHeading
            badge="Testimonios"
            title="Lo que dicen nuestros clientes"
            subtitle="Más de 1.250 empresas y personas confían en AlphaCargo para mover su carga al mundo."
            centered
          />
        </ScrollReveal>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {TESTIMONIALS.map(({ name, company, role, quote, initials }, i) => (
            <ScrollReveal
              key={name}
              delay={i * 0.06}
              className="min-w-[300px] lg:min-w-0"
            >
              <div className="flex h-full flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6">
                {/* Quote */}
                <p className="flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                  &ldquo;{quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-[var(--border)] pt-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(255,85,0,0.15)] font-[family-name:var(--font-jakarta-var)] text-sm font-bold text-[var(--accent)]">
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{name}</p>
                    <p className="text-xs text-[var(--text-muted)]">
                      {role} · {company}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
