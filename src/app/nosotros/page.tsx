import PageHero from "@/components/ui/PageHero";
import Timeline from "@/components/sections/nosotros/Timeline";
import MissionVision from "@/components/sections/nosotros/MissionVision";
import Values from "@/components/sections/nosotros/Values";
import Team from "@/components/sections/nosotros/Team";
import { team } from "@/content/team";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Empresa de Logística Internacional en Ecuador | Quiénes Somos",
  description:
    "Conoce a AlphaCargo: empresa ecuatoriana de logística internacional con 5+ años de experiencia, 1.250+ clientes y el equipo que hace posible mover tu carga al mundo.",
  path: "/nosotros",
});

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        badge="Sobre nosotros"
        title="Más de 5 años moviendo el mundo"
        subtitle="Somos una empresa ecuatoriana con alma global. Nacimos para simplificar el comercio exterior y hoy somos el aliado logístico de más de 1.250 clientes."
        image="/images/hero/nosotros.jpg"
        imageAlt="Nosotros AlphaCargo"
      />
      <Timeline />
      <MissionVision />
      <Values />
      <Team members={team} />
    </>
  );
}
