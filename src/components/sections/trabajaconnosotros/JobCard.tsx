"use client";

import { useState } from "react";
import { MapPin, Clock, Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { JobListing } from "@/content/jobs";
import { TYPE_LABELS } from "@/content/jobs";
import Button from "@/components/ui/Button";

interface JobCardProps {
  job: JobListing;
  onApply: (jobId: string) => void;
}

export default function JobCard({ job, onApply }: JobCardProps) {
  const [expanded, setExpanded] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-colors duration-150 hover:border-[var(--border-accent)]">
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="mb-2 inline-block rounded-full bg-[rgba(255,85,0,0.12)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
              {job.department}
            </span>
            <h3 className="font-[family-name:var(--font-jakarta-var)] text-lg font-bold text-[var(--text-primary)]">
              {job.title}
            </h3>
          </div>
          <Button
            variant="secondary"
            size="sm"
            className="flex-shrink-0 self-start"
            onClick={() => onApply(job.id)}
          >
            Postularme
          </Button>
        </div>

        {/* Meta */}
        <ul className="mt-4 flex flex-wrap gap-4">
          <MetaItem icon={MapPin}>{job.location}</MetaItem>
          <MetaItem icon={Clock}>{TYPE_LABELS[job.type]}</MetaItem>
          <MetaItem icon={Briefcase}>{job.experience}</MetaItem>
        </ul>

        <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
          {job.description}
        </p>

        {/* Toggle detail */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)]"
        >
          {expanded ? (
            <>
              Ver menos <ChevronUp size={14} />
            </>
          ) : (
            <>
              Ver más detalles <ChevronDown size={14} />
            </>
          )}
        </button>
      </div>

      {/* Expandable detail */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: reduceMotion ? 0 : 0.3, ease: [0.23, 1, 0.32, 1] },
              opacity: { duration: reduceMotion ? 0 : 0.2 },
            }}
          >
            <div className="grid gap-6 border-t border-[var(--border)] p-6 sm:grid-cols-2">
              <DetailList title="Responsabilidades" items={job.responsibilities} />
              <DetailList title="Requisitos" items={job.requirements} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MetaItem({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
      <Icon size={13} />
      {children}
    </li>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold text-[var(--text-primary)]">{title}</h4>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent)]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
