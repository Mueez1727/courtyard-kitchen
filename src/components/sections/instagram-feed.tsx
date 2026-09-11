import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { instagramPosts } from "@/data/content";
import { restaurant } from "@/data/restaurant";

export function InstagramFeed() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Social"
          title="Follow the courtyard"
          description={restaurant.social.instagram.handle}
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="image-reveal relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 16vw"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
