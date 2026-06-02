import PageHero from "@/components/ui/PageHero";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Política de Privacidad",
  description:
    "Conoce cómo AlphaCargo recopila, usa y protege tu información personal conforme a la normativa ecuatoriana.",
  path: "/privacidad",
});

const LAST_UPDATED = "1 de junio de 2025";

export default function PrivacidadPage() {
  return (
    <>
      <PageHero
        badge="Legal"
        title="Política de Privacidad"
        subtitle={`Última actualización: ${LAST_UPDATED}`}
      />

      <section className="mx-auto max-w-screen-md px-6 py-20 md:px-12">
        <div className="prose">
          <h2>1. Responsable del tratamiento</h2>
          <p>
            <strong>AlphaCargo S.A.S.</strong> (en adelante «AlphaCargo», «nosotros»), con
            domicilio en Guayaquil, Ecuador, es el responsable del tratamiento de los datos
            personales recopilados a través del sitio web <em>alphacargo.com.ec</em> y sus
            servicios relacionados.
          </p>

          <h2>2. Datos que recopilamos</h2>
          <p>Recopilamos los siguientes tipos de datos personales:</p>
          <ul>
            <li>
              <strong>Datos de contacto:</strong> nombre completo, correo electrónico, número
              de teléfono.
            </li>
            <li>
              <strong>Datos de navegación:</strong> dirección IP, páginas visitadas, tiempo de
              sesión (mediante cookies analíticas).
            </li>
            <li>
              <strong>Datos de negocio:</strong> información sobre tu carga, origen y destino,
              tipo de servicio solicitado.
            </li>
            <li>
              <strong>Datos de postulación:</strong> historial laboral, LinkedIn, carta de
              presentación (solo para candidatos).
            </li>
          </ul>

          <h2>3. Finalidad del tratamiento</h2>
          <p>Utilizamos tus datos para:</p>
          <ul>
            <li>Responder a tus consultas y cotizaciones de servicios logísticos.</li>
            <li>Ejecutar los contratos de transporte y logística que contratas con nosotros.</li>
            <li>Enviarte comunicaciones comerciales si lo has solicitado (puedes darte de baja en cualquier momento).</li>
            <li>Evaluar candidaturas laborales.</li>
            <li>Mejorar nuestro sitio web y la experiencia del usuario.</li>
            <li>Cumplir con obligaciones legales y regulatorias en Ecuador.</li>
          </ul>

          <h2>4. Base legal del tratamiento</h2>
          <p>
            El tratamiento de tus datos se realiza bajo las siguientes bases legales conforme a la
            Ley Orgánica de Protección de Datos Personales (LOPDP) del Ecuador:
          </p>
          <ul>
            <li>Tu consentimiento expreso cuando completas nuestros formularios.</li>
            <li>Ejecución de un contrato del que eres parte.</li>
            <li>Cumplimiento de una obligación legal.</li>
            <li>Interés legítimo de AlphaCargo en mejorar sus servicios.</li>
          </ul>

          <h2>5. Compartición de datos con terceros</h2>
          <p>
            No vendemos ni cedemos tus datos personales a terceros. Podemos compartirlos con:
          </p>
          <ul>
            <li>Proveedores de servicios logísticos (aerolíneas, navieras, agentes de aduana) estrictamente necesarios para ejecutar tu contrato.</li>
            <li>Proveedores tecnológicos que nos ayudan a operar el sitio web (hosting, email) bajo contratos de confidencialidad.</li>
            <li>Autoridades competentes cuando exista obligación legal.</li>
          </ul>

          <h2>6. Transferencias internacionales</h2>
          <p>
            Para ejecutar servicios de logística internacional, algunos datos operativos (como
            nombre del consignatario y descripción de la carga) son compartidos con agentes en
            países de origen o destino. Estos agentes están contractualmente obligados a proteger
            tu información.
          </p>

          <h2>7. Conservación de datos</h2>
          <p>
            Conservamos tus datos durante el tiempo necesario para cumplir las finalidades para las
            que fueron recopilados y, como mínimo, durante los plazos exigidos por la legislación
            tributaria y aduanera ecuatoriana (generalmente 7 años).
          </p>

          <h2>8. Tus derechos</h2>
          <p>
            Conforme a la LOPDP, tienes derecho a: acceder a tus datos, rectificarlos, suprimirlos,
            oponerte al tratamiento, solicitar la portabilidad y revocar tu consentimiento en
            cualquier momento. Para ejercer estos derechos, escríbenos a{" "}
            <a href="mailto:privacidad@alphacargo.com.ec">privacidad@alphacargo.com.ec</a>.
          </p>

          <h2>9. Cookies</h2>
          <p>
            Utilizamos cookies propias (necesarias para el funcionamiento del sitio) y cookies
            analíticas de Google Analytics para medir el tráfico. Puedes desactivar las cookies
            analíticas desde la configuración de tu navegador sin afectar la funcionalidad del
            sitio.
          </p>

          <h2>10. Seguridad</h2>
          <p>
            Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos
            contra acceso no autorizado, pérdida o destrucción: cifrado HTTPS, acceso restringido
            a bases de datos y revisiones periódicas de seguridad.
          </p>

          <h2>11. Cambios a esta política</h2>
          <p>
            Podemos actualizar esta política periódicamente. La fecha de «última actualización»
            al inicio de esta página refleja la versión vigente. Te notificaremos cambios
            relevantes por email si eres cliente registrado.
          </p>

          <h2>12. Contacto</h2>
          <p>
            Para cualquier consulta sobre privacidad, escríbenos a{" "}
            <a href="mailto:privacidad@alphacargo.com.ec">privacidad@alphacargo.com.ec</a> o a
            nuestra dirección física en Guayaquil, Ecuador.
          </p>
        </div>
      </section>
    </>
  );
}
