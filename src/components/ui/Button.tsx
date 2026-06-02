import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: false;
}

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href: string;
}

type Props = ButtonProps | AnchorProps;

const base =
  "inline-flex items-center justify-center gap-2 font-[family-name:var(--font-jakarta-var)] font-semibold rounded-lg transition-[transform,background-color,box-shadow,border-color,color,opacity] duration-150 ease-out active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] hover:shadow-[0_0_24px_var(--accent-glow)]",
  secondary:
    "border border-[rgba(255,85,0,0.4)] text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[rgba(255,85,0,0.08)]",
  ghost:
    "text-[var(--accent)] hover:text-[var(--accent-hover)]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props) {
    const { href, ...rest } = props as AnchorProps;
    return <a href={href} className={classes} {...rest} />;
  }

  return <button className={classes} {...(props as ButtonProps)} />;
}
