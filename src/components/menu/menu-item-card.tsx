"use client";

import { Button } from "@/components/ui/button";
import { SafeImage } from "@/components/ui/safe-image";
import { Icons } from "@/components/ui/icons";
import { useCart } from "@/lib/cart";
import { formatPkr } from "@/lib/utils";
import type { MenuItem, MenuTag } from "@/types";

const tagMeta: Record<MenuTag, { label: string; className: string }> = {
  spicy: { label: "Spicy", className: "bg-burgundy/10 text-burgundy" },
  vegetarian: { label: "Vegetarian", className: "bg-emerald-50 text-emerald-800" },
  popular: { label: "Popular", className: "bg-gold/20 text-charcoal" },
  chef: { label: "Chef's pick", className: "bg-charcoal text-cream" },
};

export function MenuItemCard({
  item,
  compact = false,
}: {
  item: MenuItem;
  compact?: boolean;
}) {
  const { addItem } = useCart();

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-charcoal/8 bg-white shadow-[0_18px_40px_-28px_rgba(20,17,15,0.45)]">
      <div className="image-reveal relative aspect-[4/3] overflow-hidden">
        <SafeImage
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
          className="object-cover"
        />
        {item.tags?.includes("popular") ? (
          <span className="absolute left-4 top-4 rounded-full bg-burgundy px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cream">
            Popular
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-2 flex min-w-0 flex-wrap items-start justify-between gap-x-3 gap-y-1">
          <h3 className="min-w-0 font-display text-xl text-charcoal sm:text-2xl">{item.name}</h3>
          <p className="shrink-0 text-sm font-semibold text-burgundy">
            {formatPkr(item.price)}
          </p>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-muted">{item.description}</p>
        <div className="mt-auto flex flex-wrap items-center gap-2">
          {item.tags
            ?.filter((tag) => tag !== "popular")
            .map((tag) => (
              <span
                key={tag}
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium ${tagMeta[tag].className}`}
              >
                {tag === "spicy" ? <Icons.chilli size={12} /> : null}
                {tag === "vegetarian" ? <Icons.leafSmall size={12} /> : null}
                {tagMeta[tag].label}
              </span>
            ))}
        </div>
        <Button
          className={compact ? "mt-4 w-full" : "mt-5 w-full"}
          onClick={() => addItem(item.id)}
        >
          <Icons.plus size={16} />
          Add to Order
        </Button>
      </div>
    </article>
  );
}
