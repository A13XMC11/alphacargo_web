"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import Badge from "./Badge";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  /** Absolute path to image in /public, e.g. "/images/hero/servicios.jpg" */
  image?: string;
  imageAlt?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  badge,
  title,
  subtitle,
  image,
  imageAlt = "",
  className,
  children,
}: PageHeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={cn(
        "relative flex min-h-[400px] items-end overflow-hidden bg-[var(--surface)] pt-32 pb-20 md:min-h-[480px]",
        className
      )}
    >
      {/* Background image with dark overlay */}
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[var(--bg)]/70" />
        </>
      )}

      {/* Gradient fade at the bottom to blend into page background */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--bg)] to-transparent" />

      <div className="relative mx-auto w-full max-w-screen-xl px-6 md:px-12">
        <motion.div
          className="flex max-w-2xl flex-col gap-4"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          {badge && <Badge>{badge}</Badge>}
          <h1 className="font-[family-name:var(--font-jakarta-var)] text-4xl font-bold leading-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
