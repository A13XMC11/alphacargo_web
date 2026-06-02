import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/contacto/ContactForm";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Contacto | Cotiza tu Importación o Envío Internacional",
  description:
    "Contáctanos para cotizar tu importación o envío internacional. Respondemos en menos de 2 horas en días hábiles. Oficina en Guayaquil, Ecuador.",
  path: "/contacto",
});

const INFO_ITEMS = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Av. Francisco de Orellana, Torre Centrum, Piso 4, Guayaquil, Ecuador",
  },
  {
    icon: Phone,
    label: "Teléfono / WhatsApp",
    value: "+593 99 999 9999",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@alphacargo.com.ec",
  },
  {
    icon: Clock,
    label: "Horario de atención",
    value: "Lun–Vie 8:00–18:00 · Sáb 9:00–13:00",
  },
];

export default function ContactoPage() {
  return (
    <>
      <PageHero
        badge="Contacto"
        title="Hablemos de tu carga"
        subtitle="Cuéntanos qué necesitas. Nuestro equipo te responde con una cotización personalizada en menos de 2 horas."
        image="/images/hero/contacto.jpg"
        imageAlt="Contacto AlphaCargo"
      />

      <section className="mx-auto max-w-screen-xl px-6 py-20 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_420px]">
          {/* Form */}
          <div>
            <SectionHeading
              badge="Formulario"
              title="Envíanos un mensaje"
              subtitle="Completa el formulario y te contactaremos a la brevedad."
              className="mb-8"
            />
            <ContactForm />
          </div>

          {/* Info sidebar */}
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
              <h2 className="mb-6 font-[family-name:var(--font-jakarta-var)] text-lg font-bold text-[var(--text-primary)]">
                Información de contacto
              </h2>
              <ul className="flex flex-col gap-6">
                {INFO_ITEMS.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[rgba(255,85,0,0.12)] text-[var(--accent)]">
                      <item.icon size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-sm text-[var(--text-secondary)]">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Google Maps embed */}
            <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
              <iframe
                title="Ubicación AlphaCargo en Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5!2d-79.8891!3d-2.1709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMTAnMTUuMiJTIDc5wrA1Myc0MC4yIlc!5e0!3m2!1ses!2sec!4v1700000000000"
                width="100%"
                height="280"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
