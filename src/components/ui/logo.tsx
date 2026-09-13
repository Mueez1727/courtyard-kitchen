import Link from "next/link";
import { restaurant } from "@/data/restaurant";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group flex min-w-0 items-center gap-2 sm:gap-3", className)}
      aria-label={`${restaurant.name} home`}
    >
      <span
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xs font-semibold tracking-[0.18em] sm:h-11 sm:w-11 sm:text-sm",
          light
            ? "border-gold/60 text-gold"
            : "border-burgundy/30 text-burgundy",
        )}
        aria-hidden="true"
      >
        CK
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "font-display text-[15px] leading-tight tracking-wide sm:text-xl",
            light ? "text-cream" : "text-charcoal",
          )}
        >
          {restaurant.name}
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] uppercase tracking-[0.22em]",
            light ? "text-gold-soft" : "text-muted",
          )}
        >
          Rawalpindi
        </span>
      </span>
    </Link>
  );
}
