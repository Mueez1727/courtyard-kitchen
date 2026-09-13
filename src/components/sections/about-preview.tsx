import { ButtonLink } from "@/components/ui/button";
import { SafeImage } from "@/components/ui/safe-image";
import { FadeIn } from "@/components/ui/fade-in";
import { restaurant } from "@/data/restaurant";

export function AboutPreview() {
  const { about } = restaurant;

  return (
    <section id="about" className="bg-parchment py-16 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <FadeIn>
          <div className="image-reveal relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:aspect-[5/6] sm:rounded-[2rem]">
            <SafeImage
              src={about.image}
              alt={about.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
        <FadeIn delay={120}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-burgundy sm:text-xs sm:tracking-[0.28em]">
            {about.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl text-charcoal sm:text-5xl">
            {about.heading}
          </h2>
          <div className="mt-5 h-px w-16 bg-gold" />
          <p className="mt-6 text-lg leading-relaxed text-ink">{about.intro}</p>
          <p className="mt-4 text-base leading-relaxed text-muted">{about.story}</p>
          <p className="mt-4 text-base leading-relaxed text-muted">{about.philosophy}</p>
          <ButtonLink href="/about" className="mt-8 w-full sm:w-auto">
            Discover Our Story
          </ButtonLink>
        </FadeIn>
      </div>
    </section>
  );
}
