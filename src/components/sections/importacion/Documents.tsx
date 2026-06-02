import { FileText, AlertCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const DOCS = [
  {
    name: "Factura Comercial",
    required: true,
    description: "Emitida por el vendedor. Debe incluir descripción del producto, cantidad, precio unitario, valor total, Incoterm y datos del comprador y vendedor.",
  },
  {
    name: "Packing List",
    required: true,
    description: "Detalle de cada caja o bulto: número de bultos, peso bruto/neto y dimensiones. Debe coincidir exactamente con la factura comercial.",
  },
  {
    name: "Bill of Lading (BL) o AWB",
    required: true,
    description: "Documento de transporte. BL para carga marítima, AWB para carga aérea. Es el título de propiedad de la mercancía durante el tránsito.",
  },
  {
    name: "Certificado de Origen",
    required: false,
    description: "Emitido por la cámara de comercio del país exportador. Necesario para aplicar preferencias arancelarias bajo acuerdos comerciales (ALADI, SGP, etc.).",
  },
  {
    name: "Seguro de Carga",
    required: false,
    description: "Póliza que ampara la mercancía en tránsito. Obligatorio para ciertos productos y altamente recomendable para cualquier importación.",
  },
  {
    name: "Permiso ARCSA",
    required: false,
    description: "Requerido para alimentos, cosméticos, medicamentos y dispositivos médicos. Tramitarlo antes del embarque puede evitar semanas de demora en aduana.",
  },
  {
    name: "Permiso AGROCALIDAD",
    required: false,
    description: "Obligatorio para plantas, semillas, animales y productos de origen animal. Incluye inspección fitosanitaria en el punto de ingreso.",
  },
  {
    name: "Registro INEN",
    required: false,
    description: "Para productos que deben cumplir normas técnicas ecuatorianas: juguetes, electrodomésticos, materiales de construcción, entre otros.",
  },
] as const;

export default function Documents() {
  const required = DOCS.filter((d) => d.required);
  const conditional = DOCS.filter((d) => !d.required);

  return (
    <section className="bg-[var(--surface)] py-24">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12">
        <ScrollReveal className="mb-14">
          <SectionHeading
            badge="Documentación"
            title="Documentos que necesitas para importar"
            subtitle="Tenerlos listos antes del embarque evita demoras y costos adicionales en aduana."
          />
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Required */}
          <div>
            <ScrollReveal>
              <h3 className="mb-5 flex items-center gap-2 font-[family-name:var(--font-jakarta-var)] text-lg font-semibold text-[var(--text-primary)]">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                Siempre obligatorios
              </h3>
            </ScrollReveal>
            <div className="flex flex-col gap-3">
              {required.map(({ name, description }, i) => (
                <ScrollReveal key={name} delay={i * 0.06}>
                  <div className="flex gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-4">
                    <FileText className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)]">{name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                        {description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Conditional */}
          <div>
            <ScrollReveal>
              <h3 className="mb-5 flex items-center gap-2 font-[family-name:var(--font-jakarta-var)] text-lg font-semibold text-[var(--text-primary)]">
                <span className="h-2 w-2 rounded-full bg-[var(--text-muted)]" />
                Según tipo de producto
              </h3>
            </ScrollReveal>
            <div className="flex flex-col gap-3">
              {conditional.map(({ name, description }, i) => (
                <ScrollReveal key={name} delay={i * 0.06}>
                  <div className="flex gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-4">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--text-muted)]" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)]">{name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                        {description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
