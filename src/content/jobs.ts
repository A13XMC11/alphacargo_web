export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "remote";
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const jobs: JobListing[] = [
  {
    id: "ejecutivo-comercial",
    title: "Ejecutivo Comercial — Logística Internacional",
    department: "Comercial",
    location: "Guayaquil, Ecuador",
    type: "full-time",
    experience: "2+ años",
    description:
      "Buscamos un ejecutivo comercial apasionado por las ventas y el comercio exterior para ampliar nuestra cartera de clientes en Ecuador.",
    responsibilities: [
      "Prospección y cierre de nuevos clientes corporativos",
      "Gestión de cotizaciones de importación y exportación",
      "Seguimiento postventa y retención de cartera",
      "Coordinación con el equipo de operaciones para garantizar el servicio",
      "Cumplimiento de metas mensuales de ventas",
    ],
    requirements: [
      "Título en Comercio Exterior, Administración o afines",
      "Experiencia mínima de 2 años en ventas B2B (logística, comercio exterior o sector afín)",
      "Excelentes habilidades de comunicación y negociación",
      "Manejo de CRM (deseable HubSpot o Salesforce)",
      "Inglés básico o intermedio (deseable)",
    ],
  },
  {
    id: "agente-aduanas",
    title: "Agente de Aduanas",
    department: "Operaciones",
    location: "Guayaquil, Ecuador",
    type: "full-time",
    experience: "3+ años",
    description:
      "Requerimos un profesional en comercio exterior para gestionar declaraciones aduaneras, coordinar con la SENAE y asegurar la correcta nacionalización de mercancías.",
    responsibilities: [
      "Elaboración y presentación de Declaraciones Aduaneras de Importación (DAI)",
      "Coordinación con navieras, aerolíneas y consolidadores",
      "Asesoría a clientes sobre clasificación arancelaria",
      "Seguimiento del aforo y liberación de mercancías",
      "Actualización sobre normativas SENAE y MIPRO",
    ],
    requirements: [
      "Título en Comercio Exterior, Economía o afines",
      "Licencia de Agente de Aduanas vigente (preferible)",
      "Experiencia mínima de 3 años en agencias de aduana o navieras",
      "Dominio del sistema ECUAPASS",
      "Conocimiento de partidas arancelarias NANDINA",
    ],
  },
  {
    id: "coordinador-operaciones",
    title: "Coordinador de Operaciones Logísticas",
    department: "Operaciones",
    location: "Guayaquil, Ecuador",
    type: "full-time",
    experience: "2+ años",
    description:
      "Coordinar todos los procesos operativos: booking de carga, seguimiento de embarques, comunicación con proveedores internacionales y entrega final al cliente.",
    responsibilities: [
      "Booking y coordinación con aerolíneas, navieras y transportistas",
      "Seguimiento en tiempo real de todos los embarques activos",
      "Comunicación con agentes internacionales en origen",
      "Resolución de incidencias operativas (demoras, daños, documentación)",
      "Generación de reportes de gestión semanales",
    ],
    requirements: [
      "Experiencia de 2+ años en freight forwarding o agencias de carga",
      "Conocimiento de Incoterms y documentación de comercio exterior",
      "Manejo de TMS o sistemas de gestión logística",
      "Alta capacidad de organización y manejo de múltiples tareas",
      "Inglés intermedio (imprescindible para comunicación con agentes externos)",
    ],
  },
  {
    id: "ejecutivo-cuentas",
    title: "Ejecutivo de Cuentas — Customer Success",
    department: "Servicio al Cliente",
    location: "Remoto / Híbrido",
    type: "remote",
    experience: "1+ año",
    description:
      "Sé el punto de contacto principal para nuestra cartera de clientes, asegurando una experiencia excepcional en cada importación.",
    responsibilities: [
      "Gestión diaria de consultas y requerimientos de clientes asignados",
      "Comunicación proactiva sobre el estado de los embarques",
      "Identificación de oportunidades de up-selling y cross-selling",
      "Resolución de incidencias en coordinación con operaciones",
      "Recolección de feedback y medición de NPS",
    ],
    requirements: [
      "Experiencia en atención al cliente o account management",
      "Excelente comunicación escrita y verbal",
      "Empatía, paciencia y orientación al servicio",
      "Manejo de herramientas de comunicación (WhatsApp Business, email)",
      "Conocimiento básico de logística internacional (deseable)",
    ],
  },
  {
    id: "practicante-marketing",
    title: "Practicante — Marketing Digital",
    department: "Marketing",
    location: "Guayaquil, Ecuador",
    type: "part-time",
    experience: "Estudiante",
    description:
      "Únete a nuestro equipo de marketing para impulsar la presencia digital de AlphaCargo y generar leads de calidad.",
    responsibilities: [
      "Gestión de redes sociales (LinkedIn, Instagram, Facebook)",
      "Creación de contenido para blog y redes (redacción y diseño básico)",
      "Apoyo en campañas de email marketing",
      "Análisis de métricas (Google Analytics, Meta Ads)",
      "Apoyo en estrategia SEO",
    ],
    requirements: [
      "Estudiante de últimos semestres de Marketing, Comunicación o afines",
      "Conocimiento de redes sociales y tendencias digitales",
      "Creatividad y gusto por la redacción",
      "Manejo básico de Canva o herramientas de diseño",
      "Disponibilidad de 20 horas semanales",
    ],
  },
];

export const TYPE_LABELS: Record<JobListing["type"], string> = {
  "full-time": "Tiempo completo",
  "part-time": "Medio tiempo",
  remote: "Remoto",
};
