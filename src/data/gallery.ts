/**
 * CLIENT DATA — REPLACE BEFORE PRODUCTION
 * Gallery images are Unsplash placeholders. Replace `src` with client photos.
 */

import type { GalleryCategory, GalleryImage } from "@/types";

export const galleryCategories: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "food", label: "Food" },
  { id: "interior", label: "Interior" },
  { id: "outdoor", label: "Outdoor" },
  { id: "events", label: "Events" },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    alt: "Plated restaurant dish with sauce",
    category: "food",
    width: 1200,
    height: 800,
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Dining room interior with warm lighting",
    category: "interior",
    width: 1200,
    height: 800,
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
    alt: "Outdoor restaurant seating",
    category: "outdoor",
    width: 900,
    height: 1200,
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1529193591184-b1d5fdd91c84?auto=format&fit=crop&w=1200&q=80",
    alt: "Grilled BBQ platter",
    category: "food",
    width: 1200,
    height: 900,
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
    alt: "Restaurant table setting",
    category: "interior",
    width: 900,
    height: 1200,
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
    alt: "Private dining event",
    category: "events",
    width: 1200,
    height: 800,
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1563379091339-03b9d44c903c?auto=format&fit=crop&w=1200&q=80",
    alt: "Biryani served at the table",
    category: "food",
    width: 1200,
    height: 800,
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80",
    alt: "Courtyard terrace at dusk",
    category: "outdoor",
    width: 900,
    height: 1100,
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    alt: "Chef plating a dish",
    category: "food",
    width: 900,
    height: 1100,
  },
  {
    id: "g10",
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    alt: "Bar and dining interior",
    category: "interior",
    width: 1200,
    height: 800,
  },
  {
    id: "g11",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    alt: "Birthday celebration table",
    category: "events",
    width: 1200,
    height: 900,
  },
  {
    id: "g12",
    src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80",
    alt: "Steak and sides on a dark plate",
    category: "food",
    width: 1200,
    height: 800,
  },
];
