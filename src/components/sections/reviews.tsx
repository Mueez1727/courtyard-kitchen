import { FadeIn } from "@/components/ui/fade-in";
import { SafeImage } from "@/components/ui/safe-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { reviews } from "@/data/reviews";
import { restaurant } from "@/data/restaurant";

export function Reviews() {
  return (
    <section className="bg-parchment py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Guest notes"
          title="What Diners Are Saying"
          description="Sample reviews for this demonstration. Replace with genuine Google reviews before the site goes live."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <FadeIn key={review.id} delay={index * 60}>
              <article className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-[0_18px_40px_-28px_rgba(20,17,15,0.4)]">
                <div className="flex items-center gap-3">
                  {review.avatar ? (
                    <SafeImage
                      src={review.avatar}
                      alt=""
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  ) : null}
                  <div>
                    <p className="font-medium text-charcoal">{review.name}</p>
                    {review.dish ? (
                      <p className="text-xs text-muted">Loved the {review.dish}</p>
                    ) : null}
                  </div>
                </div>
                <div className="mt-4 flex gap-1 text-gold" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Icons.star
                      key={star}
                      size={16}
                      className={star < review.rating ? "text-gold" : "text-charcoal/15"}
                    />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink">“{review.text}”</p>
              </article>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href={restaurant.reservations.googleReviewsUrl} variant="outline" external>
            Read More Reviews
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
