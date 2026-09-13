import { FadeIn } from "@/components/ui/fade-in";
import { SafeImage } from "@/components/ui/safe-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { offers } from "@/data/content";
import { formatPkr } from "@/lib/utils";

export function Offers() {
  const active = offers.filter((offer) => offer.active);
  if (active.length === 0) return null;

  return (
    <section className="bg-burgundy py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="This week"
          title="Special Offers"
          description="Promotions are configurable. Switch them off in the data file when a campaign ends."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {active.map((offer, index) => (
            <FadeIn key={offer.id} delay={index * 80}>
              <article className="grid min-w-0 overflow-hidden rounded-[1.5rem] bg-charcoal sm:grid-cols-2 sm:rounded-[2rem]">
                <div className="relative min-h-48 sm:min-h-56">
                  <SafeImage
                    src={offer.image}
                    alt={offer.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                </div>
                <div className="flex min-w-0 flex-col p-5 sm:p-7">
                  <span className="w-fit rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-charcoal">
                    {offer.badge}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-cream sm:text-3xl">{offer.title}</h3>
                  <p className="mt-1 text-sm text-gold-soft">{offer.subtitle}</p>
                  <p className="mt-4 text-sm leading-relaxed text-cream/70">
                    {offer.description}
                  </p>
                  <div className="mt-5 flex items-end gap-3">
                    <span className="text-sm text-cream/40 line-through">
                      {formatPkr(offer.originalPrice)}
                    </span>
                    <span className="text-2xl font-semibold text-gold">
                      {formatPkr(offer.salePrice)}
                    </span>
                  </div>
                  <ButtonLink href={offer.ctaHref} variant="gold" className="mt-6 w-full sm:w-fit">
                    Order Now
                  </ButtonLink>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
