import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Food, interior, courtyard and event photography from The Courtyard Kitchen, Rawalpindi.",
};

export default function GalleryPage() {
  return (
    <div className="bg-parchment pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-burgundy">
          Photography
        </p>
        <h1 className="mt-3 font-display text-5xl text-charcoal">Gallery</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Click any image to open the lightbox. Swap every photo in the gallery data file
          when the client provides their own shots.
        </p>
        <div className="mt-10">
          <GalleryGrid />
        </div>
      </div>
    </div>
  );
}
