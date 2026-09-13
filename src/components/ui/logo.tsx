import Link from "next/link";
import { restaurant } from "@/data/restaurant";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  light = false,
  overlay = false,
}: {
  className?: string;
  light?: boolean;
  overlay?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label={`${restaurant.name} home`}
    >
      <span
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold tracking-[0.16em]",
          light && "bg-gold text-charcoal",
          overlay && !light && "bg-burgundy text-cream lg:bg-gold lg:text-charcoal",
          !light && !overlay && "bg-burgundy text-cream",
        )}
        aria-hidden="true"
      >
        CK
      </span>
      <span className="flex min-w-0 flex-col justify-center leading-none">
        <span
          className={cn(
            "font-display text-[1.15rem] tracking-wide sm:hidden",
            light && "text-cream",
            overlay && !light && "text-charcoal lg:text-cream",
            !light && !overlay && "text-charcoal",
          )}
        >
          Courtyard
        </span>
        <span
          className={cn(
            "hidden font-display text-xl tracking-wide sm:inline",
            light && "text-cream",
            overlay && !light && "text-charcoal lg:text-cream",
            !light && !overlay && "text-charcoal",
          )}
        >
          {restaurant.name}
        </span>
        <span
          className={cn(
            "mt-1 hidden text-[10px] uppercase tracking-[0.22em] sm:block",
            light && "text-gold-soft",
            overlay && !light && "text-muted lg:text-gold-soft",
            !light && !overlay && "text-muted",
          )}
        >
          Rawalpindi
        </span>
      </span>
    </Link>
  );
}
