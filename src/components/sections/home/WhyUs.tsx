import { Award, Globe, Users, Zap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const REASONS = [
  {
    icon: Award,
    title: "5+ Años de Experiencia",
    text: "Más de cinco años operando en logística internacional nos dan el conocimiento para resolver cualquier desafío en la cadena de suministro.",
  },
  {
    icon: Globe,
    title: "Cobertura en 180 Países",
    text: "Presencia directa en los principales hubs logísticos del mundo. Desde Shanghái hasta Miami, tu carga siempre tiene un camino.",
  },
  {
    icon: Users,
    title: "Equipo Especializado",
    text: "Agentes de aduana certificados, operadores logísticos y asesores comerciales dedicados exclusivamente a tu operación.",
  },
  {
    icon: Zap,
    title: "Tecnología en Tiempo Real",
    text: "Rastreo de envíos, comunicación directa y gestión de documentos en una plataforma accesible 24/7 desde cualquier dispositivo.",
  },
] as const;

export default function WhyUs() {
  return (
    <section className="bg-[var(--surface)] py-24">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: heading */}
          <ScrollReveal>
            <SectionHeading
              badge="¿Por qué AlphaCargo?"
              title="La diferencia que sientes en cada envío"
              subtitle="No somos solo transportistas. Somos el socio logístico que trabaja contigo para que tu negocio no se detenga."
            />
          </ScrollReveal>

          {/* Right: feature grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {REASONS.map(({ icon: Icon, title, text }, i) => (
              <ScrollReveal key={title} delay={i * 0.08}>
                <div className="flex flex-col gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(255,85,0,0.1)]">
                    <Icon className="h-5 w-5 text-[var(--accent)]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-jakarta-var)] text-base font-semibold text-[var(--text-primary)]">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
