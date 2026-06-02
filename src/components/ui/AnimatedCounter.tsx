"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, useReducedMotion, useSpring, useTransform, motion } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  /** Text prepended to the number, e.g. "+" */
  prefix?: string;
  /** Text appended to the number, e.g. "+" or "países" */
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();

  const spring = useSpring(0, { stiffness: 60, damping: 20, mass: 0.8 });
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString("es-EC"));

  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (inView && !hasTriggered) {
      setHasTriggered(true);
      spring.set(reduceMotion ? value : value);
    }
  }, [inView, hasTriggered, reduceMotion, spring, value]);

  // Immediately show final value when reduced motion is preferred
  if (reduceMotion) {
    return (
      <span ref={ref} className={className}>
        {prefix}
        {value.toLocaleString("es-EC")}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
