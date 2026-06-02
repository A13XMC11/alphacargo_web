import Link from "next/link";
import {
  Plane, Ship, Truck, Package, BriefcaseBusiness,
  MapPin, ShieldCheck, Warehouse, Search, ArrowRight,
  type LucideProps,
} from "lucide-react";
import { GlowCard } from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { services } from "@/content/servicios";

type IconName = keyof typeof ICON_MAP;

const ICON_MAP = {
  Plane,
  Ship,
  Truck,
  Package,
  BriefcaseBusiness,
  MapPin,
  ShieldCheck,
  Warehouse,
  Search,
} as const satisfies Record<string, React.ComponentType<LucideProps>>;

function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICON_MAP[name as IconName] ?? Package;
  return <Icon className={className} />;
}

export default function ServicesGrid() {
  return (
    <section id="servicios" className="py-24 bg-[var(--bg)]">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12">
        <ScrollReveal className="mb-16">
          <SectionHeading
            badge="Nuestros servicios"
            title="Todo lo que tu carga necesita"
            subtitle="Desde un sobre hasta un contenedor completo. Cubrimos cada eslabón de la cadena logística internacional."
            centered
          />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 0.05}>
              <Link href={`/servicios/${service.slug}`} className="group block h-full">
                <GlowCard className="flex h-full flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(255,85,0,0.1)]">
                    <ServiceIcon
                      name={service.icon}
                      className="h-6 w-6 text-[var(--accent)]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <h3 className="font-[family-name:var(--font-jakarta-var)] text-lg font-semibold text-[var(--text-primary)]">
                      {service.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {service.shortDescription}
                    </p>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-semibold text-[var(--accent)]">
                    Ver más <ArrowRight className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-1" />
                  </span>
                </GlowCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
