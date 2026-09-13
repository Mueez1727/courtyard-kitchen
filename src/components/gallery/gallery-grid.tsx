"use client";

import { useEffect, useMemo, useState } from "react";
import { galleryCategories, galleryImages } from "@/data/gallery";
import { SafeImage } from "@/components/ui/safe-image";
import { Icons } from "@/components/ui/icons";
import type { GalleryCategory, GalleryImage } from "@/types";

export function GalleryGrid() {
  const [category, setCategory] = useState<GalleryCategory | "all">("all");
  const [active, setActive] = useState<GalleryImage | null>(null);

  const images = useMemo(
    () =>
      galleryImages.filter((image) => category === "all" || image.category === category),
    [category],
  );

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };

    function step(delta: number) {
      setActive((current) => {
        if (!current) return current;
        const index = images.findIndex((image) => image.id === current.id);
        return images[(index + delta + images.length) % images.length];
      });
    }
  }, [active, images]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {galleryCategories.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setCategory(item.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              category === item.id ? "bg-burgundy text-cream" : "bg-white text-charcoal"
            }`}
            aria-pressed={category === item.id}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((image) => (
          <button
            key={image.id}
            type="button"
            className="image-reveal mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl"
            onClick={() => setActive(image)}
          >
            <SafeImage
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-charcoal/85 p-3 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
        >
          <button
            type="button"
            className="absolute inset-0"
            aria-label="Close lightbox"
            onClick={() => setActive(null)}
          />
          <div className="relative z-10 w-full max-w-5xl px-1 pb-16 sm:pb-0">
            <SafeImage
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              className="max-h-[68vh] w-full rounded-2xl object-contain sm:max-h-[80vh]"
            />
            <p className="mt-3 px-6 text-center text-sm text-cream/80">{active.alt}</p>
          </div>
          <button
            type="button"
            className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-cream text-charcoal sm:right-4 sm:top-4"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <Icons.close />
          </button>
          <button
            type="button"
            className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream text-charcoal sm:bottom-auto sm:left-3 sm:top-1/2 sm:-translate-y-1/2"
            onClick={() => {
              const index = images.findIndex((image) => image.id === active.id);
              setActive(images[(index - 1 + images.length) % images.length]);
            }}
            aria-label="Previous image"
          >
            <Icons.chevronLeft />
          </button>
          <button
            type="button"
            className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream text-charcoal sm:bottom-auto sm:right-3 sm:top-1/2 sm:-translate-y-1/2"
            onClick={() => {
              const index = images.findIndex((image) => image.id === active.id);
              setActive(images[(index + 1) % images.length]);
            }}
            aria-label="Next image"
          >
            <Icons.chevronRight />
          </button>
        </div>
      ) : null}
    </div>
  );
}
