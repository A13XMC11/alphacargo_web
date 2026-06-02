"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "593999999999";
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=Hola%2C%20me%20interesa%20cotizar%20un%20env%C3%ADo`;

const WORDS = ["MOVEMOS", "EL", "MUNDO"];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const wordVariants = {
    hidden: { clipPath: "inset(100% 0 0 0)", opacity: 0 },
    visible: (i: number) => ({
      clipPath: "inset(0% 0 0 0)",
      opacity: 1,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : i * 0.18,
        ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
      },
    }),
  };

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: reduceMotion ? 0 : 0.7 + i * 0.1,
        ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden bg-[var(--bg)]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/home.png"
          alt="AlphaCargo Terminal"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 select-none pointer-events-none"
        />
        {/* Radial gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(255,85,0,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(17,29,53,0.95) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto w-full max-w-screen-xl px-6 pt-24 pb-20 md:px-12">
        <div className="flex max-w-4xl flex-col gap-6">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,85,0,0.25)] bg-[rgba(255,85,0,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--accent-hover)]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
              Logística Internacional desde Ecuador
            </span>
          </motion.div>

          {/* Tagline */}
          <h1
            aria-label="MOVEMOS EL MUNDO"
            className="flex flex-wrap gap-x-5 font-[family-name:var(--font-barlow-var)] font-black uppercase text-[var(--text-primary)]"
            style={{ fontSize: "clamp(60px, 10vw, 120px)", lineHeight: 0.95 }}
          >
            {WORDS.flatMap((word, i) => [
              i > 0 ? " " : null,
              <motion.span
                key={word}
                aria-hidden="true"
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {word}
              </motion.span>,
            ])}
          </h1>

          {/* Subtitle */}
          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-xl text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl"
          >
            Más de 5 años moviendo carga por los 180 países del mundo. Soluciones de logística internacional con más de 1.250 clientes satisfechos en Ecuador.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <Button href={WA_HREF} variant="primary" size="lg">
              Cotizar ahora
            </Button>
            <Button
              href="#servicios"
              variant="secondary"
              size="lg"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ver servicios
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — one-shot, fades out so it doesn't loop infinitely */}
      {!reduceMotion && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: [0, 0.6, 0.6, 0], y: [-6, 0, 0, 6] }}
          transition={{ delay: 1.8, duration: 3.5, times: [0, 0.15, 0.75, 1], ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="h-5 w-5 text-[var(--text-muted)]" />
        </motion.div>
      )}
    </section>
  );
}
