import { restaurant } from "@/data/restaurant";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${restaurant.seo.siteUrl}/sitemap.xml`,
  };
}
