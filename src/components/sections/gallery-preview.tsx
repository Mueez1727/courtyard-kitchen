import Link from "next/link";
import { SafeImage } from "@/components/ui/safe-image";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { galleryImages } from "@/data/gallery";

export function GalleryPreview() {
  const preview = galleryImages.slice(0, 8);

  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="A look inside"
          title="Gallery"
          description="Food, rooms, courtyard evenings and celebrations — replace these images with the client's own photography."
        />
        <div className="mt-10 columns-1 gap-3 min-[420px]:columns-2 sm:mt-14 sm:columns-3 sm:gap-4 lg:columns-4">
          {preview.map((image, index) => (
            <FadeIn key={image.id} delay={index * 40} className="mb-3 break-inside-avoid sm:mb-4">
              <Link href="/gallery" className="image-reveal relative block overflow-hidden rounded-2xl">
                <SafeImage
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 420px) 100vw, (max-width: 768px) 50vw, 25vw"
                />
              </Link>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/gallery" variant="outline">
            View Full Gallery
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
