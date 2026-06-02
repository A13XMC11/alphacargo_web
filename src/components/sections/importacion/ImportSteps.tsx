import {
  Search, MessageSquare, Handshake, Globe,
  FileText, Truck, ClipboardCheck, PackageCheck,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const STEPS = [
  {
    icon: Search,
    title: "Identificar al proveedor",
    text: "Investiga fábricas o distribuidores en el país de origen. Usa Alibaba, Made-in-China, directorios sectoriales o un agente de sourcing. Verifica reseñas, antigüedad y capacidad de producción antes de contactar.",
    tip: "AlphaCargo ofrece servicio de búsqueda de proveedores certificados en China, EE.UU. y Europa.",
  },
  {
    icon: MessageSquare,
    title: "Solicitar cotización",
    text: "Pide cotización a 3–5 proveedores con las mismas especificaciones. Incluye: descripción del producto, cantidad, empaque requerido y puerto de destino. Compara precio unitario, calidad y tiempo de producción.",
    tip: "Siempre pide muestras antes de hacer un pedido grande. El costo es mínimo vs. el riesgo de un error.",
  },
  {
    icon: Handshake,
    title: "Negociar términos",
    text: "Negocia precio, plazo de entrega, condiciones de pago y garantías de calidad. Establece penalidades por retrasos o productos defectuosos. Define los términos por escrito en un Purchase Order formal.",
    tip: "El pago más seguro para primera importación: 30% adelanto + 70% contra documento de embarque.",
  },
  {
    icon: Globe,
    title: "Definir el Incoterm",
    text: "El Incoterm determina quién paga el flete, seguro y derechos. Los más usados en Ecuador: FOB (tú pagas el flete desde origen), CIF (el proveedor paga hasta puerto ecuatoriano), DDP (el proveedor entrega en tu puerta).",
    tip: "Para primeras importaciones desde China, FOB Shanghai suele ser la mejor opción.",
  },
  {
    icon: FileText,
    title: "Preparar documentos",
    text: "Los documentos clave son: Factura Comercial, Packing List, Bill of Lading o AWB, Certificado de Origen y, para algunos productos, permisos especiales (ARCSA, AGROCALIDAD, INEN). Revisa cada uno antes del embarque.",
    tip: "Un error en la factura puede detener tu carga semanas en aduana. Revísala siempre antes de aprobarla.",
  },
  {
    icon: Truck,
    title: "Coordinar el transporte",
    text: "Elige la vía de transporte según urgencia y presupuesto: aéreo (2–7 días, más costoso), marítimo (15–45 días, más económico), terrestre (para Colombia, Perú y Chile). Contrata seguro de carga all-risk.",
    tip: "Para mercancía superior a USD 2.000 siempre asegura tu carga. El costo es 0.3–0.8% del valor.",
  },
  {
    icon: ClipboardCheck,
    title: "Despacho aduanero",
    text: "Al arribar la mercancía al Ecuador, un agente de aduana declara la importación en el sistema ECUAPASS. Se calcula y paga el arancel (Ad Valorem), IVA y otros tributos. El proceso toma 2–5 días hábiles según el canal de aforo.",
    tip: "Un agente de aduana certificado puede reducir tus tributos mediante la clasificación arancelaria correcta.",
  },
  {
    icon: PackageCheck,
    title: "Recepción de la carga",
    text: "Una vez aprobado el levante aduanero, la mercancía puede retirarse del depósito. Coordina el transporte hasta tu bodega o punto de venta. Inspecciona la carga al recibirla y documenta cualquier novedad.",
    tip: "Tienes hasta 30 días para retirar la mercancía del depósito temporal antes de pagar almacenaje.",
  },
] as const;

export default function ImportSteps() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12">
        <ScrollReveal className="mb-16">
          <SectionHeading
            badge="El proceso"
            title="8 pasos para importar con éxito"
            subtitle="Desde que identificas el producto hasta que lo tienes en tu bodega. Una guía práctica para importadores en Ecuador."
          />
        </ScrollReveal>

        <div className="flex flex-col gap-0">
          {STEPS.map(({ icon: Icon, title, text, tip }, i) => (
            <ScrollReveal key={title} delay={i * 0.05}>
              <div
                className={`grid gap-8 py-10 md:grid-cols-[80px_1fr] ${
                  i < STEPS.length - 1 ? "border-b border-[var(--border)]" : ""
                }`}
              >
                {/* Step number + icon */}
                <div className="flex flex-row items-center gap-4 md:flex-col md:items-start md:gap-2">
                  <span
                    className="font-[family-name:var(--font-barlow-var)] font-black leading-none text-[var(--accent)] opacity-30 select-none"
                    style={{ fontSize: "48px" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                    <Icon className="h-5 w-5 text-[var(--accent)]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-[family-name:var(--font-jakarta-var)] text-xl font-semibold text-[var(--text-primary)]">
                    {title}
                  </h3>
                  <p className="leading-relaxed text-[var(--text-secondary)]">{text}</p>
                  <div className="mt-1 rounded-lg border border-[rgba(255,85,0,0.2)] bg-[rgba(255,85,0,0.06)] px-4 py-3">
                    <p className="text-sm text-[var(--accent-hover)]">
                      <span className="font-semibold">Consejo AlphaCargo: </span>
                      {tip}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
