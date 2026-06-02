import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/sections/faq/FAQAccordion";
import Button from "@/components/ui/Button";
import { faqCategories, allFAQItems } from "@/content/faq";
import { generatePageMetadata } from "@/lib/metadata";

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "593999999999";
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20sus%20servicios`;

export const metadata = generatePageMetadata({
  title: "Preguntas Frecuentes",
  description:
    "Respuestas a las dudas más comunes sobre importación, logística internacional, documentos, costos y tiempos de entrega con AlphaCargo Ecuador.",
  path: "/faq",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFAQItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        badge="FAQ"
        title="Preguntas frecuentes"
        subtitle="Todo lo que necesitas saber sobre nuestros servicios de logística e importación internacional."
        image="/images/hero/faq.jpg"
        imageAlt="Preguntas Frecuentes AlphaCargo"
      />

      <section className="mx-auto max-w-screen-lg px-6 py-20 md:px-12">
        <FAQAccordion categories={faqCategories} />
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-6 px-6 py-20 text-center md:px-12">
          <SectionHeading
            badge="¿Aún tienes dudas?"
            title="Habla directamente con nuestro equipo"
            subtitle="Si no encontraste la respuesta que buscas, estamos a un mensaje de distancia."
            centered
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={WA_HREF} variant="primary" size="lg">
              Preguntar por WhatsApp
            </Button>
            <Button href="/contacto" variant="secondary" size="lg">
              Formulario de contacto
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
