import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "593999999999";
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=Hola%2C%20me%20interesa%20cotizar%20un%20env%C3%ADo`;

export default function HomeCTA() {
  return (
    <section className="bg-[var(--accent)] py-24">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12">
        <ScrollReveal className="flex flex-col items-center gap-6 text-center">
          <h2
            className="font-[family-name:var(--font-barlow-var)] font-black uppercase text-white"
            style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.1 }}
          >
            ¿Listo para mover tu carga al mundo?
          </h2>
          <p className="max-w-xl text-lg text-white/80">
            Cuéntanos qué necesitas. En menos de 2 horas tienes tu cotización personalizada.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              href={WA_HREF}
              variant="primary"
              size="lg"
              className="bg-white text-[var(--accent)] hover:bg-white/90 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]"
            >
              Cotizar por WhatsApp
            </Button>
            <Button
              href="/contacto"
              variant="secondary"
              size="lg"
              className="border-white/50 text-white hover:border-white hover:bg-white/10"
            >
              Ir al formulario
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
