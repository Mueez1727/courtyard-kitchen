import type { ImageLoaderProps } from "next/image";

/** Used if a remote photo 404s. Keep this URL known-good. */
export const FALLBACK_FOOD =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80";

export function unsplashLoader({ src, width, quality }: ImageLoaderProps) {
  try {
    const url = new URL(src);
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "crop");
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 75));
    return url.toString();
  } catch {
    return src;
  }
}
