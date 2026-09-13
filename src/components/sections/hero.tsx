"use client";

import { ButtonLink } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { SafeImage } from "@/components/ui/safe-image";
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
      <SafeImage
        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=80"
        alt="Candlelit dining tables at The Courtyard Kitchen in Rawalpindi"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/45 to-charcoal/80" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-end px-4 pb-32 pt-28 sm:px-6 sm:pb-28 sm:pt-32 lg:justify-center lg:px-8 lg:pb-20">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold sm:text-xs sm:tracking-[0.32em]">
          Restaurant in Rawalpindi
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.08] text-cream sm:text-6xl lg:text-7xl">
          {restaurant.tagline}
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-cream/80 sm:mt-6 sm:text-lg">
          {restaurant.slogan}
        </p>
        <div className="mt-7 flex w-full max-w-md flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap">
          <ButtonLink href="/menu" variant="gold" className="w-full sm:w-auto">
            View Menu
          </ButtonLink>
          <ButtonLink href="/reservations" variant="secondary" className="w-full sm:w-auto">
            Reserve a Table
          </ButtonLink>
        </div>
        <div className="mt-8 flex max-w-full flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl border border-cream/15 bg-charcoal/40 px-3 py-2 text-xs text-cream/90 backdrop-blur sm:mt-10 sm:w-fit sm:rounded-full sm:px-4 sm:text-sm">
          <span
            className={`h-2.5 w-2.5 shrink-0 rounded-full ${status.isOpen ? "bg-emerald-400" : "bg-gold"}`}
            aria-hidden="true"
          />
          <span className="font-medium">{status.isOpen ? "Open Today" : "Closed Now"}</span>
          <span className="hidden text-cream/50 sm:inline">·</span>
          <span className="inline-flex items-center gap-2">
            <Icons.clock size={16} />
            {status.hoursLabel}
          </span>
        </div>
      </div>
    </section>
  );
}
