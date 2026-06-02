export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  label: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "general",
    label: "General",
    items: [
      {
        question: "¿Qué es AlphaCargo y qué servicios ofrece?",
        answer:
          "AlphaCargo es una empresa ecuatoriana de logística internacional con más de 5 años de experiencia. Ofrecemos transporte aéreo, marítimo, terrestre, consolidación de carga, courier internacional, agencia de aduanas, bodegaje y distribución, y seguro de carga. Trabajamos con más de 1.250 clientes en todo Ecuador.",
      },
      {
        question: "¿En qué países operan?",
        answer:
          "Operamos en más de 180 países, con oficinas y agentes en los principales hubs logísticos de América, Asia, Europa y Oceanía. Nuestras rutas más frecuentes incluyen China, Estados Unidos, España, México, Perú y Colombia.",
      },
      {
        question: "¿Cómo puedo obtener una cotización?",
        answer:
          "Puedes solicitar una cotización de tres maneras: por WhatsApp al número que aparece en nuestro sitio, llenando el formulario de contacto, o llamándonos directamente. Respondemos en menos de 2 horas en días hábiles.",
      },
      {
        question: "¿Trabajan con personas naturales o solo con empresas?",
        answer:
          "Trabajamos tanto con personas naturales como con empresas de todos los tamaños. Para personas naturales ofrecemos servicios de courier y consolidación; para empresas manejamos importaciones y exportaciones comerciales completas.",
      },
    ],
  },
  {
    id: "importacion",
    label: "Importación",
    items: [
      {
        question: "¿Cuál es el proceso para importar desde China?",
        answer:
          "El proceso tiene 8 pasos: (1) Identificar el producto y proveedor, (2) Solicitar cotización y negociar Incoterm, (3) Confirmar la orden y el pago, (4) Coordinar el despacho con nosotros, (5) Gestión de documentos de exportación en China, (6) Transporte internacional, (7) Trámites aduaneros en Ecuador, y (8) Entrega en bodega o dirección. En AlphaCargo te acompañamos en cada paso.",
      },
      {
        question: "¿Cuánto tiempo demora una importación desde China?",
        answer:
          "Depende de la modalidad: vía aérea 5–10 días hábiles, vía marítima LCL (consolidada) 35–45 días, y vía marítima FCL (contenedor completo) 28–35 días. Los tiempos pueden variar por temporada alta, feriados o demoras en aduana.",
      },
      {
        question: "¿Cuál es el peso o volumen mínimo para importar?",
        answer:
          "No hay un mínimo estricto. Para importaciones pequeñas utilizamos el servicio de courier (hasta 50 kg) o consolidación LCL. Para cargas mayores recomendamos carga aérea o marítima. Te asesoramos sobre la opción más económica según tu carga.",
      },
      {
        question: "¿Puedo importar productos restringidos?",
        answer:
          "Algunos productos requieren permisos especiales: alimentos, cosméticos, juguetes, dispositivos médicos, entre otros. Te indicamos qué trámites previos necesitas (registro ARCSA, INEN, MAGAP, etc.) antes de iniciar la importación para evitar demoras en aduana.",
      },
      {
        question: "¿Manejan la importación puerta a puerta?",
        answer:
          "Sí, ofrecemos el servicio puerta a puerta completo: recogemos en el proveedor en origen, gestionamos el transporte internacional, trámites aduaneros en Ecuador y entrega final en tu dirección o bodega.",
      },
    ],
  },
  {
    id: "documentos",
    label: "Documentos",
    items: [
      {
        question: "¿Qué documentos necesito para importar?",
        answer:
          "Los documentos básicos son: Factura Comercial, Lista de Empaque (Packing List), Conocimiento de Embarque (BL/AWB/Guía de Carga), Certificado de Origen (cuando aplique) y Seguro de Carga. Para algunos productos se requieren adicionalmente certificados sanitarios, técnicos o permisos previos.",
      },
      {
        question: "¿Ustedes gestionan los trámites en la aduana ecuatoriana?",
        answer:
          "Sí, contamos con una agencia de aduanas acreditada por la SENAE. Nos encargamos de toda la declaración aduanera (DAE/DAI), el aforo, el pago de aranceles e impuestos, y la nacionalización de tu mercancía.",
      },
      {
        question: "¿Qué es el RUC y necesito uno para importar?",
        answer:
          "El RUC (Registro Único de Contribuyentes) es necesario para realizar importaciones comerciales en Ecuador. Si eres persona natural con cédula puedes hacer importaciones ocasionales. Para importaciones recurrentes recomendamos tener RUC activo. Te asesoramos en el proceso si aún no lo tienes.",
      },
      {
        question: "¿Qué pasa si mi embarque llega con documentos incorrectos?",
        answer:
          "En ese caso puede generarse una demora en el proceso de desaduanización. Nuestro equipo coordina directamente con tu proveedor para gestionar las correcciones necesarias. Por eso es vital revisar todos los documentos antes del embarque: nosotros te enviamos un checklist previo.",
      },
    ],
  },
  {
    id: "pagos",
    label: "Pagos y Costos",
    items: [
      {
        question: "¿Qué costos tiene una importación?",
        answer:
          "Los costos de una importación incluyen: flete internacional, seguro de carga, gastos de origen (manejo, documentación), gastos de destino (THC, handling), honorarios de agente de aduana, y tributos aduaneros (aranceles, IVA, FODINFA, AD VALOREM). En nuestra cotización detallamos cada rubro.",
      },
      {
        question: "¿Cuáles son los métodos de pago aceptados?",
        answer:
          "Aceptamos transferencia bancaria, depósito bancario y pagos a través de plataformas digitales. Para clientes frecuentes ofrecemos líneas de crédito. No aceptamos pagos en efectivo superiores a los límites legales establecidos.",
      },
      {
        question: "¿Cuándo debo pagar los aranceles?",
        answer:
          "Los tributos aduaneros se pagan antes de la nacionalización de la mercancía. Una vez que la carga arriba al puerto o aeropuerto de Ecuador, se realiza la declaración aduanera y se liquidan los impuestos. El pago debe hacerse dentro de los plazos establecidos por la SENAE para evitar moras.",
      },
      {
        question: "¿Tienen algún plan o tarifa para importadores frecuentes?",
        answer:
          "Sí, para clientes con importaciones recurrentes ofrecemos tarifas preferenciales, atención personalizada de un ejecutivo de cuenta y facturación mensual consolidada. Contáctanos para conocer los beneficios según tu volumen de carga.",
      },
    ],
  },
  {
    id: "tiempos",
    label: "Tiempos y Seguimiento",
    items: [
      {
        question: "¿Cómo puedo hacer seguimiento de mi carga?",
        answer:
          "Te compartimos el número de tracking (guía aérea o BL marítimo) para que puedas consultar el estado en línea. Además, nuestro equipo te envía actualizaciones proactivas por WhatsApp o email en cada etapa relevante: salida de origen, arribo a Ecuador y liberación aduanera.",
      },
      {
        question: "¿Qué pasa si mi carga se retrasa?",
        answer:
          "Te notificamos de inmediato e informamos la causa del retraso (climática, operativa, aduanera). Gestionamos soluciones alternativas cuando es posible y te mantenemos informado hasta que la carga sea entregada.",
      },
      {
        question: "¿En cuánto tiempo responden a una solicitud de cotización?",
        answer:
          "En días hábiles respondemos en menos de 2 horas para rutas estándar. Para cargas especiales o rutas menos frecuentes puede tomar hasta 24 horas. Si necesitas una respuesta urgente, comunícate directamente por WhatsApp.",
      },
      {
        question: "¿Cuál es el horario de atención?",
        answer:
          "Atendemos de lunes a viernes de 8:00 a 18:00 y sábados de 9:00 a 13:00 (hora Ecuador, UTC-5). Para emergencias operativas contamos con línea de guardia fuera del horario normal.",
      },
    ],
  },
];

export const allFAQItems: FAQItem[] = faqCategories.flatMap((c) => c.items);
