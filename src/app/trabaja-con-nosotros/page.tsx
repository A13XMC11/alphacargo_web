import { Heart, TrendingUp, Users, Globe } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import JobsSection from "@/components/sections/trabajaconnosotros/JobsSection";
import { jobs } from "@/content/jobs";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Trabaja con Nosotros",
  description:
    "Únete al equipo de AlphaCargo. Explora nuestras vacantes en logística internacional, comercial, operaciones y más.",
  path: "/trabaja-con-nosotros",
});

const PERKS = [
  {
    icon: Globe,
    title: "Impacto global",
    description:
      "Trabaja en proyectos que mueven carga a más de 180 países y conectan a Ecuador con el mundo.",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento real",
    description:
      "Empresa en crecimiento acelerado con oportunidades de ascenso claras y capacitación continua.",
  },
  {
    icon: Users,
    title: "Equipo comprometido",
    description:
      "Un equipo joven, dinámico y apasionado por el comercio exterior. Aquí todos aportamos y aprendemos.",
  },
  {
    icon: Heart,
    title: "Bienestar y flexibilidad",
    description:
      "Horarios flexibles, trabajo remoto en algunos roles, y un ambiente donde tu bienestar importa.",
  },
];

export default function TrabajaConNosotrosPage() {
  return (
    <>
      <PageHero
        badge="Únete al equipo"
        title="Crece con AlphaCargo"
        subtitle="Somos un equipo apasionado por la logística global. Si quieres dejar huella en el comercio exterior ecuatoriano, este es tu lugar."
        image="/images/hero/trabaja-con-nosotros.jpg"
        imageAlt="Trabaja con Nosotros AlphaCargo"
      />

      {/* Why work with us */}
      <section className="mx-auto max-w-screen-xl px-6 py-20 md:px-12">
        <SectionHeading
          badge="¿Por qué nosotros?"
          title="Un lugar para crecer"
          subtitle="En AlphaCargo no solo ofreces un servicio — eres parte de algo más grande."
          centered
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PERKS.map((perk, i) => (
            <ScrollReveal key={perk.title} delay={i * 0.1}>
              <div className="flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(255,85,0,0.12)] text-[var(--accent)]">
                  <perk.icon size={22} />
                </span>
                <h3 className="font-[family-name:var(--font-jakarta-var)] text-base font-bold text-[var(--text-primary)]">
                  {perk.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  {perk.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Jobs + form */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-screen-xl px-6 py-20 md:px-12">
          <SectionHeading
            badge="Vacantes abiertas"
            title="Encuentra tu posición"
            subtitle="Explora las oportunidades actuales. Haz clic en «Postularme» para ir directo al formulario."
            className="mb-10"
          />
          <JobsSection jobs={jobs} />
        </div>
      </section>
    </>
  );
}
