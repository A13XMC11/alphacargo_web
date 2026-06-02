import { cn } from "@/lib/utils";
import Badge from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  /** Center-align the heading block */
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered && "items-center text-center",
        className
      )}
    >
      {badge && <Badge>{badge}</Badge>}
      <h2
        className="font-[family-name:var(--font-jakarta-var)] text-3xl font-bold leading-tight text-[var(--text-primary)] md:text-4xl lg:text-5xl"
        // Allow responsive clamp override via className
      >
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
