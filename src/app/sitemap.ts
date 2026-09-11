import { restaurant } from "@/data/restaurant";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = restaurant.seo.siteUrl;
  const routes = [
    "",
    "/about",
    "/menu",
    "/gallery",
    "/reservations",
    "/contact",
    "/order",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
