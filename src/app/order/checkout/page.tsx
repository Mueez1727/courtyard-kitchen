import type { Metadata } from "next";
import { CheckoutForm } from "@/components/forms/checkout-form";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your order from The Courtyard Kitchen, Rawalpindi.",
};

export default function CheckoutPage() {
  return (
    <div className="bg-parchment pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl text-charcoal sm:text-5xl">Checkout</h1>
        <p className="mt-3 max-w-xl text-muted">
          Demo checkout only. No payment is taken and no order is sent to a kitchen.
        </p>
        <div className="mt-10">
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
}
