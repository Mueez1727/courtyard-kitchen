import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icons, type IconName } from "@/components/ui/icons";
import { whyChooseUs } from "@/data/content";

export function WhyChooseUs() {
  return (
    <section className="bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Why guests return"
          title="Why Choose Us"
          description="A restaurant in Rawalpindi built around flavour, family tables and unhurried service."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => {
            const Icon = Icons[item.icon as IconName] ?? Icons.sparkle;
            return (
              <FadeIn key={item.id} delay={index * 80}>
                <article className="h-full rounded-3xl border border-cream/10 bg-charcoal-soft p-7">
                  <span className="text-gold">
                    <Icon size={28} />
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-cream">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">
                    {item.description}
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
