"use client";

import { useEffect, useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import {
  dayLabels,
  dayOrder,
  getDirectionsUrl,
  getFullAddress,
  getMapEmbedUrl,
  getTelHref,
  restaurant,
} from "@/data/restaurant";
import { formatDayHours, getOpenStatus } from "@/lib/hours";

export function Location() {
  const [status, setStatus] = useState(() => getOpenStatus());

  useEffect(() => {
    setStatus(getOpenStatus());
  }, []);

  return (
    <section id="visit" className="bg-parchment py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Find us"
          title="Visit Us"
          description="A family restaurant in Saddar, Rawalpindi — easy to reach, easy to replace with the client's exact pin."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeIn>
            <div className="overflow-hidden rounded-[2rem] border border-charcoal/8 bg-white">
              <iframe
                title={`Map showing ${restaurant.name} in Rawalpindi`}
                src={getMapEmbedUrl()}
                className="h-[240px] w-full border-0 sm:h-[360px] lg:h-[520px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="flex h-full min-w-0 flex-col rounded-[1.5rem] bg-charcoal p-5 text-cream sm:rounded-[2rem] sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold sm:text-xs sm:tracking-[0.24em]">
                Address
              </p>
              <p className="mt-3 font-display text-2xl leading-snug break-words sm:text-3xl">{getFullAddress()}</p>
              <div className="mt-8 space-y-4 text-sm text-cream/75">
                <p className="flex items-center gap-3">
                  <Icons.phone size={18} className="text-gold" />
                  <a href={getTelHref()} className="hover:text-gold">
                    {restaurant.contact.phoneDisplay}
                  </a>
                </p>
                <p className="flex items-start gap-3">
                  <Icons.clock size={18} className="mt-0.5 text-gold" />
                  <span>
                    <span
                      className={`mr-2 inline-flex items-center gap-2 font-medium ${status.isOpen ? "text-emerald-300" : "text-gold"}`}
                    >
                      <span className="h-2 w-2 rounded-full bg-current" />
                      {status.label}
                    </span>
                    <span className="block text-cream/70">Today · {status.hoursLabel}</span>
                  </span>
                </p>
              </div>
              <ul className="mt-8 space-y-2 border-t border-cream/10 pt-6 text-xs text-cream/70 sm:text-sm">
                {dayOrder.map((day) => (
                  <li key={day} className="flex justify-between gap-3">
                    <span className={day === status.todayKey ? "text-gold" : ""}>
                      {dayLabels[day]}
                    </span>
                    <span className="shrink-0 text-right">{formatDayHours(restaurant.hours[day])}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink href={getDirectionsUrl()} variant="gold" className="mt-8 w-full sm:w-fit" external>
                Get Directions
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
