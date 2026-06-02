import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";

const STATS = [
  { value: 5, suffix: "+ años", label: "de experiencia en logística" },
  { value: 1250, suffix: "+", label: "clientes satisfechos" },
  { value: 180, suffix: " países", label: "con cobertura activa" },
] as const;

export default function Stats() {
  return (
    <section className="bg-[var(--surface)] py-16">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {STATS.map(({ value, suffix, label }, i) => (
            <ScrollReveal key={label} delay={i * 0.1} className="flex flex-col items-center gap-2 text-center">
              <p
                className="font-[family-name:var(--font-barlow-var)] font-black text-[var(--accent)]"
                style={{ fontSize: "clamp(48px, 6vw, 80px)", lineHeight: 1 }}
              >
                <AnimatedCounter value={value} suffix={suffix} />
              </p>
              <p className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider">
                {label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
