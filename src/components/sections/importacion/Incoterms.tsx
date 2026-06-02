import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const INCOTERMS = [
  {
    code: "EXW",
    name: "Ex Works",
    responsibility: "Mínima para el vendedor",
    who: "Comprador",
    description: "El vendedor pone la mercancía a disposición en su fábrica. El comprador corre con todos los gastos y riesgos desde ese punto.",
    recommended: false,
  },
  {
    code: "FOB",
    name: "Free On Board",
    responsibility: "Vendedor hasta puerto origen",
    who: "Comprador",
    description: "El vendedor entrega la mercancía a bordo del buque en el puerto de origen. A partir de ahí, el comprador asume flete, seguro y riesgos.",
    recommended: true,
  },
  {
    code: "CIF",
    name: "Cost, Insurance & Freight",
    responsibility: "Vendedor hasta puerto destino",
    who: "Vendedor",
    description: "El vendedor paga el flete y seguro hasta el puerto de destino. El comprador asume desde que la carga llega al puerto ecuatoriano.",
    recommended: true,
  },
  {
    code: "DAP",
    name: "Delivered At Place",
    responsibility: "Vendedor hasta destino final",
    who: "Vendedor",
    description: "El vendedor entrega en el lugar acordado en destino (sin desaduanar). El comprador paga los tributos de importación.",
    recommended: false,
  },
  {
    code: "DDP",
    name: "Delivered Duty Paid",
    responsibility: "Máxima para el vendedor",
    who: "Vendedor",
    description: "El vendedor entrega en el lugar acordado, ya desaduanado y con todos los impuestos pagados. La opción más simple para el comprador.",
    recommended: false,
  },
] as const;

export default function Incoterms() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12">
        <ScrollReveal className="mb-14">
          <SectionHeading
            badge="Incoterms 2020"
            title="Los Incoterms más usados, explicados simple"
            subtitle="Los Incoterms definen quién paga qué y quién asume el riesgo en cada etapa del envío. Elegir el correcto puede ahorrarte mucho dinero."
          />
        </ScrollReveal>

        <div className="flex flex-col gap-4">
          {INCOTERMS.map(({ code, name, responsibility, who, description, recommended }, i) => (
            <ScrollReveal key={code} delay={i * 0.06}>
              <div
                className={`grid gap-4 rounded-xl border p-5 transition-colors md:grid-cols-[100px_1fr_180px] md:items-center ${
                  recommended
                    ? "border-[rgba(255,85,0,0.3)] bg-[rgba(255,85,0,0.04)]"
                    : "border-[var(--border)] bg-[var(--surface)]"
                }`}
              >
                {/* Code badge */}
                <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-1">
                  <span
                    className={`font-[family-name:var(--font-barlow-var)] text-2xl font-black ${
                      recommended ? "text-[var(--accent)]" : "text-[var(--text-primary)]"
                    }`}
                  >
                    {code}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">{name}</span>
                  {recommended && (
                    <span className="rounded-full bg-[rgba(255,85,0,0.15)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)]">
                      Recomendado
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  {description}
                </p>

                {/* Who pays flete */}
                <div className="flex flex-row items-center gap-3 rounded-lg bg-[var(--surface-elevated)] px-4 py-3 md:flex-col md:items-start md:gap-0.5">
                  <span className="text-xs text-[var(--text-muted)]">Flete pagado por</span>
                  <span className="font-semibold text-[var(--text-primary)]">{who}</span>
                  <span className="hidden text-xs text-[var(--text-muted)] md:block">{responsibility}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
