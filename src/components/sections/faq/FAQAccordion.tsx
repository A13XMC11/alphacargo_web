"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQCategory } from "@/content/faq";

interface FAQAccordionProps {
  categories: FAQCategory[];
}

export default function FAQAccordion({ categories }: FAQAccordionProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? "");
  const [openItem, setOpenItem] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const currentItems =
    categories.find((c) => c.id === activeCategory)?.items ?? [];

  function toggle(key: string) {
    setOpenItem((prev) => (prev === key ? null : key));
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              setOpenItem(null);
            }}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors duration-150",
              activeCategory === cat.id
                ? "border-[var(--accent)] bg-[rgba(255,85,0,0.12)] text-[var(--accent)]"
                : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Items */}
      <div className="flex flex-col gap-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col gap-3"
          >
            {currentItems.map((item, idx) => {
              const key = `${activeCategory}-${idx}`;
              const isOpen = openItem === key;

              return (
                <div
                  key={key}
                  className={cn(
                    "overflow-hidden rounded-xl border transition-colors duration-150",
                    isOpen
                      ? "border-[var(--border-accent)] bg-[var(--surface-elevated)]"
                      : "border-[var(--border)] bg-[var(--surface)]"
                  )}
                >
                  <button
                    onClick={() => toggle(key)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-[family-name:var(--font-jakarta-var)] text-base font-semibold leading-snug text-[var(--text-primary)]">
                      {item.question}
                    </span>
                    <span className="mt-0.5 flex-shrink-0 text-[var(--accent)]">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: {
                            duration: reduceMotion ? 0 : 0.28,
                            ease: [0.23, 1, 0.32, 1],
                          },
                          opacity: { duration: reduceMotion ? 0 : 0.2 },
                        }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-[var(--text-secondary)]">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
