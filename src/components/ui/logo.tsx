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
      className={cn("group flex items-center gap-3", className)}
      aria-label={`${restaurant.name} home`}
    >
      <span
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-full border text-sm font-semibold tracking-[0.18em]",
          light
            ? "border-gold/60 text-gold"
            : "border-burgundy/30 text-burgundy",
        )}
        aria-hidden="true"
      >
        CK
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg tracking-wide sm:text-xl",
            light ? "text-cream" : "text-charcoal",
          )}
        >
          {restaurant.name}
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] uppercase tracking-[0.26em]",
            light ? "text-gold-soft" : "text-muted",
          )}
        >
          Rawalpindi
        </span>
      </span>
    </Link>
  );
}
