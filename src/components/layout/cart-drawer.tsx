"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, ButtonLink } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { QuantityControl } from "@/components/ui/quantity-control";
import { restaurant } from "@/data/restaurant";
import { useCart } from "@/lib/cart";
import { formatPkr } from "@/lib/utils";

export function CartDrawer() {
  const pathname = usePathname();
  const {
    isOpen,
    closeCart,
    items,
    setQuantity,
    removeItem,
    subtotal,
    deliveryFee,
    total,
  } = useCart();

  useEffect(() => {
    closeCart();
  }, [pathname, closeCart]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-labelledby="cart-title">
      <button
        type="button"
        className="absolute inset-0 bg-charcoal/50"
        aria-label="Close cart"
        onClick={closeCart}
      />
      <aside className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-parchment shadow-2xl">
        <div className="flex items-center justify-between border-b border-charcoal/10 px-5 py-4">
          <h2 id="cart-title" className="font-display text-2xl text-charcoal">
            Your Order
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/10"
            aria-label="Close cart"
          >
            <Icons.close size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-display text-2xl text-charcoal">Your cart is empty</p>
              <p className="mt-2 max-w-xs text-sm text-muted">
                Add a few dishes from the menu to start an order.
              </p>
              <Link
                href="/menu"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-burgundy px-6 py-3 text-sm font-semibold text-cream"
                onClick={closeCart}
              >
                Browse Menu
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 rounded-2xl bg-white p-3">
                  <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                    <Image src={item.image} alt="" fill className="object-cover" sizes="80px" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-medium text-charcoal">{item.name}</p>
                      <p className="text-sm font-semibold text-burgundy">
                        {formatPkr(item.price * item.quantity)}
                      </p>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <QuantityControl
                        value={item.quantity}
                        onChange={(value) => setQuantity(item.id, value)}
                      />
                      <button
                        type="button"
                        className="text-muted hover:text-burgundy"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                      >
                        <Icons.trash size={16} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 ? (
          <div className="border-t border-charcoal/10 bg-white px-5 py-5">
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between text-muted">
                <dt>Subtotal</dt>
                <dd>{formatPkr(subtotal)}</dd>
              </div>
              <div className="flex justify-between text-muted">
                <dt>Delivery</dt>
                <dd>
                  {deliveryFee === 0 ? "Free" : formatPkr(deliveryFee)}
                </dd>
              </div>
              <div className="flex justify-between pt-2 text-base font-semibold text-charcoal">
                <dt>Total</dt>
                <dd>{formatPkr(total)}</dd>
              </div>
            </dl>
            {subtotal < restaurant.ordering.freeDeliveryOver ? (
              <p className="mt-3 text-xs text-muted">
                Free delivery over {formatPkr(restaurant.ordering.freeDeliveryOver)}.
              </p>
            ) : null}
            <ButtonLink href="/order/checkout" className="mt-4 w-full">
              Proceed to Checkout
            </ButtonLink>
            <Button variant="outline" className="mt-2 w-full" onClick={closeCart}>
              Keep browsing
            </Button>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
