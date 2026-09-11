/**
 * =============================================================================
 * CLIENT DATA — REPLACE BEFORE PRODUCTION
 * =============================================================================
 * Every business-specific value for the demo restaurant lives here (or in the
 * sibling files imported at the bottom of this module). Swap these fields with
 * the real client's information without editing UI components.
 * =============================================================================
 */

import type { DayKey, OpeningHours, SocialPlatform } from "@/types";

export const restaurant = {
  /**
   * CLIENT DATA — REPLACE BEFORE PRODUCTION
   * Demo restaurant identity. Change name, tagline and story for the real client.
   */
  name: "The Courtyard Kitchen",
  shortName: "Courtyard",
  legalName: "The Courtyard Kitchen",
  tagline: "Good Food. Great Moments.",
  slogan: "Authentic flavors, fresh ingredients and memorable dining experiences in the heart of Rawalpindi.",
  established: "2019",
  cuisine: ["Pakistani", "BBQ", "Chinese", "Continental"],
  priceRange: "PKR 350 – PKR 2,500",
  priceRangeSchema: "$$",

  about: {
    eyebrow: "Our Story",
    heading: "A courtyard table in the heart of Rawalpindi",
    intro:
      "At The Courtyard Kitchen, we bring together traditional Pakistani flavors and contemporary dining in a welcoming environment.",
    story:
      "What began as a small family kitchen is now a gathering place for friends, celebrations and weekday dinners. We cook the dishes people in Rawalpindi grew up with — karahi, handi, tikka and biryani — and serve them with the care of a sit-down restaurant.",
    philosophy:
      "We believe a meal should feel generous: honest spice, fresh ingredients, and a room that makes you want to stay for dessert.",
    quality:
      "Our kitchen works with daily-sourced produce, carefully cut meats and recipes that have been seasoned for local palates — never bland, never overdone.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Warm restaurant dining room with set tables at The Courtyard Kitchen",
  },

  /**
   * CLIENT DATA — REPLACE BEFORE PRODUCTION
   * Contact details are fictional placeholders for the client demo.
   */
  contact: {
    phoneDisplay: "+92 51 123 4567",
    phoneTel: "+92511234567",
    whatsappDisplay: "+92 300 1234567",
    whatsappE164: "923001234567",
    email: "hello@courtyardkitchen.pk",
    reservationsEmail: "reservations@courtyardkitchen.pk",
  },

  /**
   * CLIENT DATA — REPLACE BEFORE PRODUCTION
   * Replace address AND coordinates together. All maps/directions read from here.
   */
  location: {
    street: "123 Main Commercial Road",
    area: "Saddar",
    city: "Rawalpindi",
    region: "Punjab",
    country: "Pakistan",
    postalCode: "46000",
    /**
     * Approximate Saddar / central Rawalpindi point for the demo map.
     * Replace with the client's exact coordinates before launch.
     */
    lat: 33.5939,
    lng: 73.0551,
    mapZoom: 16,
  },

  /**
   * CLIENT DATA — REPLACE BEFORE PRODUCTION
   * Times are 24-hour strings (HH:MM). close "00:00" means midnight.
   * Timezone must match the restaurant's city.
   */
  timezone: "Asia/Karachi",
  hours: {
    monday: { open: "12:00", close: "23:00" },
    tuesday: { open: "12:00", close: "23:00" },
    wednesday: { open: "12:00", close: "23:00" },
    thursday: { open: "12:00", close: "23:00" },
    friday: { open: "13:00", close: "00:00" },
    saturday: { open: "12:00", close: "00:00" },
    sunday: { open: "12:00", close: "23:00" },
  } satisfies OpeningHours,

  /**
   * CLIENT DATA — REPLACE BEFORE PRODUCTION
   * Replace href values with the restaurant's real profiles.
   */
  social: {
    instagram: {
      label: "Instagram",
      handle: "@courtyardkitchen.rwp",
      href: "https://www.instagram.com/",
    },
    facebook: {
      label: "Facebook",
      handle: "The Courtyard Kitchen",
      href: "https://www.facebook.com/",
    },
    tiktok: {
      label: "TikTok",
      handle: "@courtyardkitchen",
      href: "https://www.tiktok.com/",
    },
    whatsapp: {
      label: "WhatsApp",
      handle: "Chat with us",
      href: "https://wa.me/923001234567",
    },
  } satisfies Record<
    SocialPlatform,
    { label: string; handle: string; href: string }
  >,

  /**
   * CLIENT DATA — REPLACE BEFORE PRODUCTION
   * Ordering rules for the demo cart. Wire to a real provider later.
   */
  ordering: {
    enabled: true,
    currency: "PKR",
    currencyLabel: "PKR",
    deliveryFee: 150,
    freeDeliveryOver: 3000,
    minDeliveryOrder: 800,
    estimatedDeliveryMinutes: "40–55",
    estimatedPickupMinutes: "20–30",
    deliveryAreas: ["Saddar", "Committee Chowk", "Bahria Town Phase 1–4", "Chaklala", "Westridge"],
  },

  reservations: {
    enabled: true,
    minGuests: 1,
    maxGuests: 12,
    largeGroupNote:
      "For large groups or private events, please contact us directly.",
    googleReviewsUrl: "https://www.google.com/maps",
  },

  /**
   * CLIENT DATA — REPLACE BEFORE PRODUCTION
   * Brand colours. Injected as CSS variables in the root layout.
   */
  brand: {
    burgundy: "#7B2330",
    burgundyDark: "#5A1A24",
    gold: "#C4A574",
    goldSoft: "#E2D3B5",
    cream: "#F6F0E6",
    parchment: "#FBF7F1",
    charcoal: "#14110F",
    charcoalSoft: "#1C1814",
    ink: "#2A241F",
    muted: "#6F675E",
  },

  seo: {
    title: "The Courtyard Kitchen | Restaurant in Rawalpindi",
    titleTemplate: "%s | The Courtyard Kitchen",
    description:
      "The Courtyard Kitchen is a family restaurant in Rawalpindi serving Pakistani, BBQ, Chinese and continental food. View the menu, reserve a table or order online.",
    keywords: [
      "restaurant in Rawalpindi",
      "best restaurant in Rawalpindi",
      "food in Rawalpindi",
      "family restaurant in Rawalpindi",
      "BBQ restaurant in Rawalpindi",
      "Pakistani restaurant in Rawalpindi",
    ],
    ogImageAlt: "The Courtyard Kitchen — restaurant in Rawalpindi",
    locale: "en_PK",
    siteUrl: "https://courtyardkitchen.pk",
  },

  demo: {
    isPlaceholderContent: true,
    reviewsAreDemo: true,
    notice:
      "Demo content for client presentation. Replace all business data before production.",
  },
} as const;

export const dayOrder: DayKey[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export const dayLabels: Record<DayKey, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

export function getFullAddress() {
  const { street, area, city, region, country } = restaurant.location;
  return `${street}, ${area}, ${city}, ${region}, ${country}`;
}

export function getShortAddress() {
  const { street, city } = restaurant.location;
  return `${street}, ${city}`;
}

export function getMapEmbedUrl() {
  const { lat, lng, mapZoom } = restaurant.location;
  return `https://www.google.com/maps?q=${lat},${lng}&z=${mapZoom}&output=embed`;
}

export function getDirectionsUrl() {
  const { lat, lng } = restaurant.location;
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}

export function getTelHref() {
  return `tel:${restaurant.contact.phoneTel}`;
}

export function getWhatsAppHref(message?: string) {
  const base = `https://wa.me/${restaurant.contact.whatsappE164}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getMailtoHref() {
  return `mailto:${restaurant.contact.email}`;
}
