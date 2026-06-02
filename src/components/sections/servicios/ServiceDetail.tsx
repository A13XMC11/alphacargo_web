import {
  Plane, Ship, Truck, Package, BriefcaseBusiness,
  MapPin, ShieldCheck, Warehouse, Search, CheckCircle,
  type LucideProps,
} from "lucide-react";
import type { Service } from "@/types/service";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";

const ICON_MAP = {
  Plane, Ship, Truck, Package, BriefcaseBusiness,
  MapPin, ShieldCheck, Warehouse, Search,
} as const satisfies Record<string, React.ComponentType<LucideProps>>;

type IconName = keyof typeof ICON_MAP;

function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICON_MAP[name as IconName] ?? Package;
  return <Icon className={className} />;
}

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "593999999999";

interface Props {
  service: Service;
}

export default function ServiceDetail({ service }: Props) {
  const waHref = `https://wa.me/${WA_NUMBER}?text=Hola%2C%20me%20interesa%20cotizar%20${encodeURIComponent(service.title)}`;

  return (
    <>
      {/* Hero */}
      <PageHero
        badge="Servicios"
        title={service.title}
        subtitle={service.shortDescription}
        image={service.image}
        imageAlt={service.title}
      />

      {/* Description + Stats */}
      <section className="bg-[var(--bg)] py-20">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-3">
            <ScrollReveal className="lg:col-span-2">
              <div className="flex flex-col gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(255,85,0,0.1)]">
                  <ServiceIcon name={service.icon} className="h-7 w-7 text-[var(--accent)]" />
                </div>
                <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>

            {service.stats && (
              <ScrollReveal delay={0.1}>
                <div className="flex flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  {service.stats.map(({ value, label }) => (
                    <div key={label} className="flex flex-col gap-0.5">
                      <span
                        className="font-[family-name:var(--font-barlow-var)] font-black text-[var(--accent)]"
                        style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1 }}
                      >
                        {value}
                      </span>
                      <span className="text-sm text-[var(--text-muted)]">{label}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          <ScrollReveal>
            <h2 className="mb-10 font-[family-name:var(--font-jakarta-var)] text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
              ¿Qué incluye este servicio?
            </h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, i) => (
              <ScrollReveal key={feature} delay={i * 0.05}>
                <div className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-4">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                  <span className="text-sm leading-relaxed text-[var(--text-secondary)]">{feature}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[var(--bg)] py-20">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          <ScrollReveal>
            <h2 className="mb-12 font-[family-name:var(--font-jakarta-var)] text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
              Cómo funciona el proceso
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map(({ step, title, description }, i) => (
              <ScrollReveal key={step} delay={i * 0.08}>
                <div className="relative flex flex-col gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <span
                    className="font-[family-name:var(--font-barlow-var)] font-black text-[var(--accent)] opacity-20 select-none"
                    style={{ fontSize: "56px", lineHeight: 1 }}
                  >
                    0{step}
                  </span>
                  <h3 className="font-[family-name:var(--font-jakarta-var)] text-base font-semibold text-[var(--text-primary)]">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-6 rounded-2xl border border-[rgba(255,85,0,0.2)] bg-[rgba(255,85,0,0.05)] p-10 text-center">
              <h2 className="font-[family-name:var(--font-jakarta-var)] text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
                ¿Necesitas {service.title.toLowerCase()}?
              </h2>
              <p className="max-w-lg text-[var(--text-secondary)]">
                Cuéntanos tu caso y te enviamos una cotización personalizada en menos de 2 horas.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href={waHref} variant="primary" size="lg">
                  {service.cta}
                </Button>
                <Button href="/contacto" variant="secondary" size="lg">
                  Usar formulario
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
