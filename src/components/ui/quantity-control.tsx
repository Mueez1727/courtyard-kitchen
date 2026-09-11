"use client";

import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function QuantityControl({
  value,
  onChange,
  min = 0,
  className,
}: {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-charcoal/10 bg-white",
        className,
      )}
    >
      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center text-charcoal hover:text-burgundy"
        onClick={() => onChange(Math.max(min, value - 1))}
        aria-label="Decrease quantity"
      >
        <Icons.minus size={16} />
      </button>
      <span className="min-w-6 text-center text-sm font-semibold" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center text-charcoal hover:text-burgundy"
        onClick={() => onChange(value + 1)}
        aria-label="Increase quantity"
      >
        <Icons.plus size={16} />
      </button>
    </div>
  );
}
