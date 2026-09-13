import type { Metadata } from "next";
import { restaurant } from "@/data/restaurant";
import { ButtonLink } from "@/components/ui/button";
import { SafeImage } from "@/components/ui/safe-image";
import { EventEnquiryForm } from "@/components/forms/event-enquiry-form";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of The Courtyard Kitchen — a family restaurant in Rawalpindi serving Pakistani, BBQ and contemporary dishes.",
};

export default function AboutPage() {
  const { about, established } = restaurant;

  return (
    <div className="bg-parchment pt-28">
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-burgundy">
            Since {established}
          </p>
          <h1 className="mt-3 font-display text-3xl text-charcoal sm:text-5xl lg:text-6xl">
            {about.heading}
          </h1>
          <div className="mt-5 h-px w-16 bg-gold" />
          <p className="mt-6 text-lg leading-relaxed text-ink">{about.intro}</p>
          <p className="mt-4 leading-relaxed text-muted">{about.story}</p>
          <p className="mt-4 leading-relaxed text-muted">{about.philosophy}</p>
          <p className="mt-4 leading-relaxed text-muted">{about.quality}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/menu" className="w-full sm:w-auto">View Menu</ButtonLink>
            <ButtonLink href="/reservations" variant="outline" className="w-full sm:w-auto">
              Reserve a Table
            </ButtonLink>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
          <SafeImage
            src={about.image}
            alt={about.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </section>
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-4xl text-charcoal">Events at the courtyard</h2>
          <p className="mt-4 text-muted">
            Tell us about a birthday, corporate dinner or catering request. This form is a
            frontend mockup until a mailbox is connected.
          </p>
          <div className="mt-8 rounded-[2rem] bg-white p-6 sm:p-8">
            <EventEnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
