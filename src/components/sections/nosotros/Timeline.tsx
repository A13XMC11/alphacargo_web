"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const EVENTS = [
  {
    year: "2019",
    title: "El comienzo",
    text: "AlphaCargo nace en Guayaquil con un equipo de 3 personas y la misión de simplificar las importaciones para la pequeña y mediana empresa ecuatoriana.",
  },
  {
    year: "2020",
    title: "Crisis y resiliencia",
    text: "Durante la pandemia gestionamos el transporte de insumos médicos críticos al país. Crecimos un 40% mientras el mundo se detenía.",
  },
  {
    year: "2021",
    title: "Expansión de servicios",
    text: "Lanzamos el servicio de almacenamiento y distribución nacional. Más de 200 clientes confían ya en nosotros para mover su carga.",
  },
  {
    year: "2022",
    title: "Presencia regional",
    text: "Abrimos operaciones terrestres con Colombia, Perú y Chile. Nuestro equipo crece a 15 personas especializadas.",
  },
  {
    year: "2023",
    title: "1.000 clientes",
    text: "Superamos el hito de 1.000 clientes activos y lanzamos nuestra plataforma de tracking en tiempo real.",
  },
  {
    year: "Hoy",
    title: "Líderes en logística",
    text: "1.250+ clientes, 180 países de cobertura y un equipo de 25 profesionales dedicados a mover el mundo para ti.",
    current: true,
  },
] as const;

function TimelineItem({
  year,
  title,
  text,
  current,
  index,
}: {
  year: string;
  title: string;
  text: string;
  current?: boolean;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: reduceMotion ? 0 : -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.08, ease: [0.23, 1, 0.32, 1] }}
      className="relative flex gap-8 pl-8"
    >
      {/* Vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--border)]" />

      {/* Dot */}
      <div
        className={`absolute left-0 top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 ${
          current
            ? "border-[var(--accent)] bg-[var(--accent)] shadow-[0_0_12px_var(--accent-glow)]"
            : "border-[var(--accent)] bg-[var(--bg)]"
        }`}
      />

      <div className="flex flex-col gap-1 pb-10">
        <span
          className={`font-[family-name:var(--font-barlow-var)] text-sm font-black uppercase tracking-widest ${
            current ? "text-[var(--accent)]" : "text-[var(--text-muted)]"
          }`}
        >
          {year}
        </span>
        <h3 className="font-[family-name:var(--font-jakarta-var)] text-lg font-semibold text-[var(--text-primary)]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{text}</p>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12">
        <div className="mb-14">
          <SectionHeading
            badge="Nuestra historia"
            title="Cómo llegamos hasta aquí"
            subtitle="Cinco años de trabajo, aprendizajes y miles de envíos nos convirtieron en el socio logístico de confianza del Ecuador."
          />
        </div>
        <div className="max-w-2xl">
          {EVENTS.map((event, i) => (
            <TimelineItem key={event.year} {...event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
