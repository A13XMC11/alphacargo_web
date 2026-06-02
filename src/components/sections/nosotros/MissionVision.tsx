import { Target, Telescope } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function MissionVision() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12">
        <ScrollReveal className="mb-14">
          <SectionHeading
            badge="Quiénes somos"
            title="Misión y Visión"
          />
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Misión */}
          <ScrollReveal delay={0.05}>
            <div className="flex flex-col gap-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(255,85,0,0.1)]">
                <Target className="h-6 w-6 text-[var(--accent)]" />
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                  Misión
                </p>
                <h3 className="mb-3 font-[family-name:var(--font-jakarta-var)] text-xl font-bold text-[var(--text-primary)]">
                  Conectar a Ecuador con el mundo
                </h3>
                <p className="leading-relaxed text-[var(--text-secondary)]">
                  Simplificar el comercio exterior para empresas y personas ecuatorianas, ofreciendo soluciones logísticas integrales, transparentes y accesibles que les permitan competir en el mercado global sin importar su tamaño.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Visión */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-5 rounded-2xl border border-[rgba(255,85,0,0.2)] bg-[rgba(255,85,0,0.04)] p-8 h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(255,85,0,0.15)]">
                <Telescope className="h-6 w-6 text-[var(--accent)]" />
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                  Visión
                </p>
                <h3 className="mb-3 font-[family-name:var(--font-jakarta-var)] text-xl font-bold text-[var(--text-primary)]">
                  Ser el operador logístico #1 del Ecuador
                </h3>
                <p className="leading-relaxed text-[var(--text-secondary)]">
                  Para 2030, ser reconocidos como el socio logístico de mayor confianza en el Ecuador, con operaciones directas en los principales hubs de Asia, América del Norte y Europa, y con la tecnología que hace la logística invisible para nuestros clientes.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
