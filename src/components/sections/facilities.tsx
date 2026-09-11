import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icons, type IconName } from "@/components/ui/icons";
import { facilities } from "@/data/facilities";

export function Facilities() {
  return (
    <section className="bg-parchment py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Facilities"
          title="Everything You Need for a Great Dining Experience"
          description="Comforts of a family restaurant in Rawalpindi — confirm each amenity with the owner before launch."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {facilities.map((facility, index) => {
            const Icon = Icons[facility.icon as IconName] ?? Icons.sparkle;
            return (
              <FadeIn key={facility.id} delay={index * 40}>
                <article className="h-full rounded-3xl border border-charcoal/8 bg-white p-6 transition-transform duration-300 hover:-translate-y-1">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-burgundy">
                    <Icon />
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-charcoal">
                    {facility.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {facility.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
