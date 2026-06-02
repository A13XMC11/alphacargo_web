import Hero from "@/components/sections/home/Hero";
import Stats from "@/components/sections/home/Stats";
import ServicesGrid from "@/components/sections/home/ServicesGrid";
import WhyUs from "@/components/sections/home/WhyUs";
import HowItWorks from "@/components/sections/home/HowItWorks";
import Testimonials from "@/components/sections/home/Testimonials";
import HomeCTA from "@/components/sections/home/HomeCTA";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "AlphaCargo — Logística Internacional desde Ecuador",
  description:
    "Empresa ecuatoriana de logística y cargo internacional con más de 5 años de experiencia, 1.250+ clientes y presencia en 180 países.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesGrid />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
