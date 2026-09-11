import type { Metadata } from "next";
import { MenuGrid } from "@/components/menu/menu-grid";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Pakistani, BBQ, Chinese and continental menu at The Courtyard Kitchen in Rawalpindi. View prices and order online.",
};

export default function MenuPage() {
  return (
    <div className="bg-parchment pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-burgundy">
          {restaurant.name}
        </p>
        <h1 className="mt-3 font-display text-5xl text-charcoal">The Menu</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Pakistani classics, charcoal BBQ, Chinese and continental plates. Prices are
          demonstration values in PKR — replace them with the live menu before launch.
        </p>
        <div className="mt-10">
          <MenuGrid />
        </div>
      </div>
    </div>
  );
}
