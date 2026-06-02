import { MessageSquare, FileText, Ship, PackageCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const STEPS = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Solicitar cotización",
    text: "Contáctanos por WhatsApp o formulario. En menos de 2 horas tienes tu cotización personalizada con todas las opciones disponibles.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Preparar documentos",
    text: "Te indicamos exactamente qué necesitas: factura, packing list, permisos especiales. Nosotros hacemos el resto del papeleo.",
  },
  {
    number: "03",
    icon: Ship,
    title: "Coordinar la logística",
    text: "Reservamos espacio, coordinamos recolección y gestionamos el despacho aduanero en origen y destino.",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Recibir tu carga",
    text: "Tu mercancía llega a tiempo y en perfectas condiciones. Recibes confirmación en cada etapa del proceso.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12">
        <ScrollReveal className="mb-16">
          <SectionHeading
            badge="Cómo funciona"
            title="De tu lado en cada paso"
            subtitle="Importar o exportar no tiene que ser complicado. Con AlphaCargo el proceso es simple, transparente y sin sorpresas."
            centered
          />
        </ScrollReveal>

        <div className="flex flex-col gap-0">
          {STEPS.map(({ number, icon: Icon, title, text }, i) => {
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal key={number} delay={i * 0.08}>
                <div
                  className={`flex flex-col gap-8 py-10 md:flex-row md:items-center md:gap-16 ${
                    isEven ? "" : "md:flex-row-reverse"
                  } ${i < STEPS.length - 1 ? "border-b border-[var(--border)]" : ""}`}
                >
                  {/* Number + icon */}
                  <div className="flex shrink-0 items-center gap-6 md:w-64">
                    <span
                      className="font-[family-name:var(--font-barlow-var)] font-black text-[var(--accent)] opacity-25 select-none"
                      style={{ fontSize: "clamp(64px, 8vw, 96px)", lineHeight: 1 }}
                    >
                      {number}
                    </span>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
                      <Icon className="h-7 w-7 text-[var(--accent)]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-[family-name:var(--font-jakarta-var)] text-2xl font-bold text-[var(--text-primary)]">
                      {title}
                    </h3>
                    <p className="max-w-lg text-base leading-relaxed text-[var(--text-secondary)]">
                      {text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
