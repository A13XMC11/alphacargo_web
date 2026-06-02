import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6",
        className
      )}
    >
      {children}
    </div>
  );
}

export function GlowCard({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 glow-card-interactive",
        className
      )}
    >
      {children}
    </div>
  );
}
