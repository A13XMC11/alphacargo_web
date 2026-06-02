import { Handshake, Globe, Zap, ShieldCheck, Users, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const VALUES = [
  {
    icon: Handshake,
    title: "Confianza",
    text: "Somos transparentes en cada operación. Sin costos ocultos, sin sorpresas. Tu carga y tu dinero siempre están en buenas manos.",
  },
  {
    icon: ShieldCheck,
    title: "Responsabilidad",
    text: "Nos hacemos cargo de cada envío como si fuera nuestro. Si algo falla, estamos ahí para resolverlo sin excusas.",
  },
  {
    icon: Zap,
    title: "Agilidad",
    text: "En logística el tiempo es dinero. Cotizamos en 2 horas, respondemos en minutos y buscamos siempre la solución más rápida.",
  },
  {
    icon: Globe,
    title: "Visión Global",
    text: "Pensamos como empresa global aunque servimos localmente. Conocemos los mercados, culturas y regulaciones de los 180 países donde operamos.",
  },
  {
    icon: Users,
    title: "Cercanía",
    text: "No somos un call center. Tienes un ejecutivo dedicado que conoce tu operación y siempre está disponible para ti.",
  },
  {
    icon: Award,
    title: "Excelencia",
    text: "El 99% de nuestros envíos llegan en tiempo y forma. Ese estándar no es casualidad, es el resultado de un proceso de mejora continua.",
  },
] as const;

export default function Values() {
  return (
    <section className="bg-[var(--surface)] py-24">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12">
        <ScrollReveal className="mb-14">
          <SectionHeading
            badge="Nuestros valores"
            title="Lo que nos define como empresa"
            subtitle="Los valores no son palabras en una pared. Son la forma en que tomamos decisiones cada día."
            centered
          />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, text }, i) => (
            <ScrollReveal key={title} delay={i * 0.07}>
              <div className="flex flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 transition-all duration-300 hover:border-[var(--border-accent)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(255,85,0,0.1)]">
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
    </section>
  );
}
