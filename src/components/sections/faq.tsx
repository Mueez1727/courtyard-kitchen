"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icons } from "@/components/ui/icons";
import { faqs } from "@/data/content";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently Asked"
          description="Straightforward answers for reservations, delivery and dining in Rawalpindi."
        />
        <FadeIn>
          <div className="mt-12 divide-y divide-charcoal/10 rounded-[2rem] bg-white px-2 sm:px-4">
            {faqs.map((faq) => {
              const open = openId === faq.id;
              return (
                <div key={faq.id}>
                  <h3>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left"
                      aria-expanded={open}
                      onClick={() => setOpenId(open ? null : faq.id)}
                    >
                      <span className="font-medium text-charcoal">{faq.question}</span>
                      <Icons.chevronDown
                        className={cn(
                          "shrink-0 text-burgundy transition-transform",
                          open ? "rotate-180" : "",
                        )}
                      />
                    </button>
                  </h3>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300",
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <p className="overflow-hidden px-4 pb-5 text-sm leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
