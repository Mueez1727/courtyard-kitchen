import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-burgundy text-cream hover:bg-burgundy-dark shadow-[0_10px_24px_-12px_rgba(123,35,48,0.7)]",
  secondary:
    "bg-transparent text-cream border border-cream/40 hover:border-gold hover:text-gold",
  gold: "bg-gold text-charcoal hover:bg-gold-soft",
  outline:
    "bg-transparent text-charcoal border border-charcoal/15 hover:border-burgundy hover:text-burgundy",
  ghost: "bg-transparent text-cream hover:text-gold",
} as const;

type Variant = keyof typeof variants;

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  external,
}: Common & { href: string; external?: boolean }) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200",
    variants[variant],
    className,
  );

  if (
    external ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("https://") ||
    href.startsWith("http://")
  ) {
    const isHttp = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        target={isHttp ? "_blank" : undefined}
        rel={isHttp ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
