import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-[rgba(255,85,0,0.25)] bg-[rgba(255,85,0,0.12)] px-3 py-1 text-sm font-medium text-[var(--accent-hover)]",
        className
      )}
    >
      {children}
    </span>
  );
}
