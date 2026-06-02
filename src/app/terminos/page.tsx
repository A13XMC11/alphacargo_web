import PageHero from "@/components/ui/PageHero";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso del sitio web y los servicios de logística internacional de AlphaCargo.",
  path: "/terminos",
});

const LAST_UPDATED = "1 de junio de 2025";

export default function TerminosPage() {
  return (
    <>
      <PageHero
        badge="Legal"
        title="Términos y Condiciones"
        subtitle={`Última actualización: ${LAST_UPDATED}`}
      />

      <section className="mx-auto max-w-screen-md px-6 py-20 md:px-12">
        <div className="prose">
          <h2>1. Aceptación de los términos</h2>
          <p>
            Al acceder y utilizar el sitio web de <strong>AlphaCargo S.A.S.</strong> (
            <em>alphacargo.com.ec</em>) y sus servicios, aceptas estar sujeto a estos Términos y
            Condiciones. Si no estás de acuerdo, por favor no utilices nuestro sitio.
          </p>

          <h2>2. Descripción del servicio</h2>
          <p>
            AlphaCargo ofrece servicios de logística internacional que incluyen transporte aéreo,
            marítimo y terrestre, consolidación de carga, courier, agencia de aduanas, bodegaje y
            seguro de carga. La contratación de servicios específicos se rige por contratos o
            cotizaciones individuales que complementan estos términos.
          </p>

          <h2>3. Uso del sitio web</h2>
          <p>Aceptas utilizar este sitio únicamente para fines lícitos y de acuerdo con:</p>
          <ul>
            <li>La legislación ecuatoriana vigente.</li>
            <li>Las normas de uso aceptable generalmente reconocidas en internet.</li>
          </ul>
          <p>Queda prohibido:</p>
          <ul>
            <li>Intentar acceder sin autorización a sistemas o datos de AlphaCargo.</li>
            <li>Transmitir contenido malicioso, difamatorio o que infrinja derechos de terceros.</li>
            <li>Realizar scraping masivo o uso automatizado sin consentimiento previo.</li>
          </ul>

          <h2>4. Cotizaciones y contratación</h2>
          <p>
            Las cotizaciones generadas a través del formulario de contacto o por WhatsApp son
            estimaciones válidas por 48 horas hábiles, sujetas a confirmación de espacio, tipo de
            cambio y condiciones del mercado al momento de la aceptación. Ninguna cotización
            constituye un contrato vinculante hasta que sea confirmada por escrito por AlphaCargo.
          </p>

          <h2>5. Tarifas y pagos</h2>
          <p>
            Las tarifas incluyen únicamente los conceptos detallados en la cotización. Gastos
            adicionales imprevistos (demoras, inspecciones aduaneras, almacenaje por causas
            externas) serán comunicados al cliente y cobrados según corresponda. El incumplimiento
            de pagos genera intereses conforme a la tasa legal vigente en Ecuador.
          </p>

          <h2>6. Limitación de responsabilidad</h2>
          <p>
            AlphaCargo actúa como agente logístico y no es el transportista efectivo en todos los
            tramos. La responsabilidad por daño o pérdida de mercancía se rige por los convenios
            internacionales aplicables (Convenio de Varsovia/Montreal para carga aérea, Reglas de
            La Haya-Visby para carga marítima) y los límites contractuales acordados. Recomendamos
            contratar seguro de carga para cobertura adicional.
          </p>

          <h2>7. Fuerza mayor</h2>
          <p>
            AlphaCargo no será responsable por retrasos o incumplimientos causados por eventos
            fuera de su control razonable: desastres naturales, huelgas, cierres de puertos,
            restricciones gubernamentales, pandemias u otros eventos de fuerza mayor.
          </p>

          <h2>8. Propiedad intelectual</h2>
          <p>
            Todo el contenido de este sitio (textos, imágenes, logotipo, diseño) es propiedad de
            AlphaCargo o sus licenciantes y está protegido por la legislación de propiedad
            intelectual ecuatoriana. Queda prohibida su reproducción sin autorización escrita
            previa.
          </p>

          <h2>9. Enlaces a terceros</h2>
          <p>
            Nuestro sitio puede contener enlaces a sitios de terceros (navieras, aerolíneas,
            entidades gubernamentales). AlphaCargo no controla ni es responsable por el contenido
            o las prácticas de privacidad de esos sitios.
          </p>

          <h2>10. Modificaciones</h2>
          <p>
            AlphaCargo se reserva el derecho de modificar estos términos en cualquier momento. Los
            cambios entran en vigencia al publicarse en este sitio. El uso continuado del sitio
            después de la publicación implica la aceptación de los términos actualizados.
          </p>

          <h2>11. Ley aplicable y jurisdicción</h2>
          <p>
            Estos términos se rigen por las leyes de la República del Ecuador. Para cualquier
            disputa, las partes se someten a la jurisdicción de los jueces y tribunales competentes
            de la ciudad de Guayaquil, renunciando a cualquier otro fuero.
          </p>

          <h2>12. Contacto</h2>
          <p>
            Para consultas legales, escríbenos a{" "}
            <a href="mailto:legal@alphacargo.com.ec">legal@alphacargo.com.ec</a>.
          </p>
        </div>
      </section>
    </>
  );
}
