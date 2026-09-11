import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Icons, type IconName } from "@/components/ui/icons";
import { eventTypes } from "@/data/content";

export function Events() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gatherings"
          title="Events & Catering"
          description="Birthdays, family tables, corporate dinners and catering from the same kitchen that cooks the evening service."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {eventTypes.map((event, index) => {
            const Icon = Icons[event.icon as IconName] ?? Icons.sparkle;
            return (
              <FadeIn key={event.id} delay={index * 50}>
                <article className="h-full rounded-3xl bg-white p-6">
                  <span className="text-burgundy">
                    <Icon />
                  </span>
                  <h3 className="mt-4 font-display text-xl text-charcoal">{event.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{event.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/contact#event-enquiry">Enquire About an Event</ButtonLink>
        </div>
      </div>
    </section>
  );
}
