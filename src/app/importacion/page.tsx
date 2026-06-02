import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImportSteps from "@/components/sections/importacion/ImportSteps";
import Documents from "@/components/sections/importacion/Documents";
import Incoterms from "@/components/sections/importacion/Incoterms";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Cómo Importar desde Cualquier País",
  description:
    "Guía completa para importar al Ecuador: 8 pasos, documentos necesarios, Incoterms explicados y consejos prácticos de nuestros agentes de aduana.",
  path: "/importacion",
});

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "593999999999";
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=Hola%2C%20necesito%20ayuda%20con%20una%20importaci%C3%B3n`;

export default function ImportacionPage() {
  return (
    <>
      <PageHero
        badge="Guía de importación"
        title="¿Cómo importar desde cualquier país?"
        subtitle="Todo lo que necesitas saber antes de hacer tu primera importación. Sin tecnicismos, sin pasos ocultos. Con consejos reales de nuestros agentes."
        image="/images/hero/importacion.jpg"
        imageAlt="Importación desde cualquier país AlphaCargo"
      >
        <div className="flex flex-wrap gap-4 pt-2">
          <Button href="#pasos" variant="primary" size="lg">
            Ver los 8 pasos
          </Button>
          <Button href={WA_HREF} variant="secondary" size="lg">
            Hablar con un agente
          </Button>
        </div>
      </PageHero>

      <ImportSteps />
      <Documents />
      <Incoterms />

      {/* Final CTA */}
      <section className="bg-[var(--surface)] py-24">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-6 rounded-2xl border border-[rgba(255,85,0,0.2)] bg-[rgba(255,85,0,0.05)] p-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                ¿Lista tu primera importación?
              </p>
              <h2 className="font-[family-name:var(--font-jakarta-var)] text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
                Somos tus agentes en Ecuador
              </h2>
              <p className="max-w-xl leading-relaxed text-[var(--text-secondary)]">
                Desde la búsqueda del proveedor hasta la entrega en tu bodega. AlphaCargo maneja toda la cadena logística para que tú solo te concentres en vender.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href={WA_HREF} variant="primary" size="lg">
                  Cotizar mi importación
                </Button>
                <Button href="/servicios/agenciamiento-aduanero" variant="secondary" size="lg">
                  Ver agenciamiento aduanero
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
