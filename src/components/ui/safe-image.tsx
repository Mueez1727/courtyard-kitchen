"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { FALLBACK_FOOD, unsplashLoader } from "@/lib/images";
import { cn } from "@/lib/utils";

export function SafeImage({ src, alt, className, ...props }: ImageProps) {
  const [current, setCurrent] = useState(src);
  const [failed, setFailed] = useState(false);
  const remote =
    typeof current === "string" && current.includes("images.unsplash.com");

  if (failed) {
    return (
      <span
        className={cn(
          "flex items-center justify-center bg-cream text-muted",
          props.fill && "absolute inset-0 h-full w-full",
          className,
        )}
        role="img"
        aria-label={alt}
      >
        <span className="px-3 text-center text-xs font-medium">Photo</span>
      </span>
    );
  }

  return (
    <Image
      {...props}
      src={current}
      alt={alt}
      className={className}
      loader={remote ? unsplashLoader : undefined}
      unoptimized={remote}
      onError={() => {
        if (current !== FALLBACK_FOOD) {
          setCurrent(FALLBACK_FOOD);
          return;
        }
        setFailed(true);
      }}
    />
  );
}
