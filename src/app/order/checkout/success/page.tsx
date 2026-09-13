import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Order received",
};

export default function CheckoutSuccessPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-parchment px-4 pt-28 pb-20 text-center">
      <div className="max-w-lg">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-burgundy">
          Demo confirmation
        </p>
        <h1 className="mt-3 font-display text-4xl text-charcoal sm:text-5xl">Order received</h1>
        <p className="mt-4 text-muted">
          Thank you. In a live website this would go to the kitchen and a rider. Here it
          simply clears your cart so you can show the full guest journey.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/menu">Back to menu</ButtonLink>
          <ButtonLink href="/" variant="outline">
            Home
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
