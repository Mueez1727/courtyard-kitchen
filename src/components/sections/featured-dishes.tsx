import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { MenuItemCard } from "@/components/menu/menu-item-card";
import { getFeaturedDishes } from "@/data/menu";

export function FeaturedDishes() {
  const dishes = getFeaturedDishes();

  return (
    <section className="bg-cream py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="From the kitchen"
          title="Our Specialties"
          description="A few of the dishes guests in Rawalpindi come back for. Prices are demo values in PKR and can be replaced with the live menu."
        />
        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {dishes.map((item, index) => (
            <FadeIn key={item.id} delay={index * 70} className="min-w-0">
              <MenuItemCard item={item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
