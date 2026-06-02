export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  initials: string;
}

export const team: TeamMember[] = [
  {
    name: "Andrés Morales",
    role: "CEO & Fundador",
    bio: "Más de 10 años en logística internacional. Fundó AlphaCargo con la visión de democratizar el comercio exterior para empresas ecuatorianas.",
    image: "/images/team/andres-morales.jpg",
    initials: "AM",
  },
  {
    name: "Gabriela Torres",
    role: "Directora de Operaciones",
    bio: "Especialista en cadena de suministro con experiencia en Asia y Europa. Garantiza que cada envío llegue en tiempo y forma.",
    image: "/images/team/gabriela-torres.jpg",
    initials: "GT",
  },
  {
    name: "Roberto Salcedo",
    role: "Agente de Aduana Sr.",
    bio: "Agente calificado SENAE con 8 años de experiencia. Experto en normativa aduanera y optimización de tributos.",
    image: "/images/team/roberto-salcedo.jpg",
    initials: "RS",
  },
  {
    name: "Camila Espinoza",
    role: "Ejecutiva Comercial",
    bio: "Asesora clientes en la elección del servicio logístico ideal. Su prioridad es que cada importador sienta que tiene un equipo completo a su lado.",
    image: "/images/team/camila-espinoza.jpg",
    initials: "CE",
  },
  {
    name: "Diego Paredes",
    role: "Coordinador de Carga Aérea",
    bio: "Especialista en tráfico aéreo con alianzas activas con las principales aerolíneas de carga que operan en Latam.",
    image: "/images/team/diego-paredes.jpg",
    initials: "DP",
  },
  {
    name: "Patricia Lema",
    role: "Coordinadora de Carga Marítima",
    bio: "Maneja las relaciones con navieras y consolidadores. Consigue los mejores fletes marítimos del mercado ecuatoriano.",
    image: "/images/team/patricia-lema.jpg",
    initials: "PL",
  },
];
