import type { Metadata } from "next";
import { MenuGrid } from "@/components/menu/menu-grid";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Order Online",
  description:
    "Order Pakistani, BBQ and continental food online from The Courtyard Kitchen, Rawalpindi. Delivery and pickup.",
};

export default function OrderPage() {
  return (
    <div className="bg-parchment pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-burgundy">
          Delivery & pickup
        </p>
        <h1 className="mt-3 font-display text-5xl text-charcoal">Order Online</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Add dishes to your cart, then check out. Delivery is a frontend mockup — connect
          a real ordering or payment provider when the client is ready. Minimum delivery
          order {restaurant.ordering.minDeliveryOrder.toLocaleString("en-PK")} PKR.
        </p>
        <div className="mt-10">
          <MenuGrid />
        </div>
      </div>
    </div>
  );
}
