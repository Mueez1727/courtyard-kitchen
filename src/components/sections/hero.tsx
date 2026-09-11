"use client";

import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { restaurant } from "@/data/restaurant";
import { getOpenStatus } from "@/lib/hours";
import { useEffect, useState } from "react";

export function Hero() {
  const [status, setStatus] = useState(() => getOpenStatus());

  useEffect(() => {
    setStatus(getOpenStatus());
    const id = window.setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=80"
        alt="Candlelit dining tables at The Courtyard Kitchen in Rawalpindi"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/45 to-charcoal/80" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-28 pt-32 sm:px-6 lg:justify-center lg:px-8 lg:pb-20">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
          Restaurant in Rawalpindi
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
          {restaurant.tagline}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
          {restaurant.slogan}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/menu" variant="gold">
            View Menu
          </ButtonLink>
          <ButtonLink href="/reservations" variant="secondary">
            Reserve a Table
          </ButtonLink>
        </div>
        <div className="mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-cream/15 bg-charcoal/40 px-4 py-2 text-sm text-cream/90 backdrop-blur">
          <span
            className={`h-2.5 w-2.5 rounded-full ${status.isOpen ? "bg-emerald-400" : "bg-gold"}`}
            aria-hidden="true"
          />
          <span className="font-medium">{status.isOpen ? "Open Today" : "Closed Now"}</span>
          <span className="text-cream/50">·</span>
          <Icons.clock size={16} />
          <span>{status.hoursLabel}</span>
        </div>
      </div>
    </section>
  );
}
