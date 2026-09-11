"use client";

import { useMemo, useState, type FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/forms/form-shared";
import { restaurant } from "@/data/restaurant";
import { useCart } from "@/lib/cart";
import { formatPkr } from "@/lib/utils";
import type { OrderType, PaymentMethod } from "@/types";

export function CheckoutForm() {
  const router = useRouter();
  const { items, subtotal, deliveryFee, total, clearCart } = useCart();
  const [orderType, setOrderType] = useState<OrderType>("delivery");
  const [payment, setPayment] = useState<PaymentMethod>("cod");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const payableDelivery = orderType === "delivery" ? deliveryFee : 0;
  const payableTotal = subtotal + payableDelivery;

  const minMet = useMemo(() => {
    if (orderType !== "delivery") return true;
    return subtotal >= restaurant.ordering.minDeliveryOrder;
  }, [orderType, subtotal]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (items.length === 0) {
      setError("Your cart is empty.");
      return;
    }
    if (!minMet) {
      setError(
        `Minimum delivery order is ${formatPkr(restaurant.ordering.minDeliveryOrder)}.`,
      );
      return;
    }
    if (!event.currentTarget.reportValidity()) return;
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    clearCart();
    router.push("/order/checkout/success");
  }

  if (items.length === 0) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center">
        <p className="font-display text-3xl text-charcoal">Nothing to check out</p>
        <p className="mt-2 text-muted">Add dishes from the menu first.</p>
        <Button className="mt-6" onClick={() => router.push("/order")}>
          Back to menu
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-4 rounded-[2rem] bg-white p-6 sm:p-8">
        <h2 className="font-display text-3xl text-charcoal">Your details</h2>
        <Field label="Customer name" name="name" required placeholder="Full name" />
        <Field label="Phone number" name="phone" type="tel" required placeholder="03xx xxxxxxx" />
        {orderType === "delivery" ? (
          <Field
            label="Delivery address"
            name="address"
            as="textarea"
            required
            placeholder="House, street, area in Rawalpindi"
          />
        ) : (
          <p className="rounded-2xl bg-cream px-4 py-3 text-sm text-muted">
            Collect from {restaurant.location.street}, {restaurant.location.city}. Estimated ready
            in {restaurant.ordering.estimatedPickupMinutes} minutes.
          </p>
        )}
        <Field
          label="Optional instructions"
          name="instructions"
          as="textarea"
          placeholder="Gate code, spice level, no coriander…"
        />

        <fieldset>
          <legend className="text-sm font-medium text-charcoal">Order type</legend>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {(
              [
                ["delivery", "Delivery"],
                ["pickup", "Pickup"],
              ] as const
            ).map(([value, label]) => (
              <label
                key={value}
                className={`cursor-pointer rounded-2xl border px-4 py-3 text-sm ${
                  orderType === value
                    ? "border-burgundy bg-burgundy/5 text-burgundy"
                    : "border-charcoal/10"
                }`}
              >
                <input
                  type="radio"
                  name="orderType"
                  value={value}
                  className="sr-only"
                  checked={orderType === value}
                  onChange={() => setOrderType(value)}
                />
                {label}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-medium text-charcoal">Payment</legend>
          <p className="mt-1 text-xs text-muted">
            Mock checkout — no payment is processed. Connect a gateway later.
          </p>
          <div className="mt-3 grid gap-3">
            {(
              [
                ["cod", "Cash on Delivery"],
                ["card", "Card"],
                ["online", "Online Payment"],
              ] as const
            ).map(([value, label]) => (
              <label
                key={value}
                className={`cursor-pointer rounded-2xl border px-4 py-3 text-sm ${
                  payment === value
                    ? "border-burgundy bg-burgundy/5 text-burgundy"
                    : "border-charcoal/10"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value={value}
                  className="sr-only"
                  checked={payment === value}
                  onChange={() => setPayment(value)}
                />
                {label}
              </label>
            ))}
          </div>
        </fieldset>
        {error ? (
          <p className="rounded-2xl bg-burgundy/10 px-4 py-3 text-sm text-burgundy" role="alert">
            {error}
          </p>
        ) : null}
      </div>

      <aside className="h-fit rounded-[2rem] bg-charcoal p-6 text-cream sm:p-8">
        <h2 className="font-display text-3xl">Order summary</h2>
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li key={item.id} className="flex gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-xl">
                <Image src={item.image} alt="" fill className="object-cover" sizes="56px" />
              </div>
              <div className="flex flex-1 items-start justify-between gap-3 text-sm">
                <span>
                  {item.name}
                  <span className="block text-cream/50">× {item.quantity}</span>
                </span>
                <span>{formatPkr(item.price * item.quantity)}</span>
              </div>
            </li>
          ))}
        </ul>
        <dl className="mt-6 space-y-2 border-t border-cream/10 pt-4 text-sm">
          <div className="flex justify-between text-cream/70">
            <dt>Subtotal</dt>
            <dd>{formatPkr(subtotal)}</dd>
          </div>
          <div className="flex justify-between text-cream/70">
            <dt>{orderType === "delivery" ? "Delivery" : "Pickup"}</dt>
            <dd>{orderType === "delivery" ? (payableDelivery === 0 ? "Free" : formatPkr(payableDelivery)) : "—"}</dd>
          </div>
          <div className="flex justify-between text-lg font-semibold">
            <dt>Total</dt>
            <dd>{formatPkr(payableTotal)}</dd>
          </div>
        </dl>
        <Button type="submit" variant="gold" className="mt-6 w-full" disabled={submitting}>
          {submitting ? "Placing order…" : "Place Order"}
        </Button>
      </aside>
    </form>
  );
}
