/**
 * CLIENT DATA — REPLACE BEFORE PRODUCTION
 *
 * These reviews are DEMO PLACEHOLDERS for the client presentation only.
 * Do not publish them as genuine customer reviews.
 * Replace with real Google / in-house testimonials before launch.
 * Set `reviewsAreDemo` to false in restaurant.ts once real reviews are in.
 */

import type { Review } from "@/types";

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Ayesha Khan",
    rating: 5,
    text: "Great food and a really comfortable atmosphere. The BBQ platter was excellent — we will be back with family.",
    date: "2026-08-12",
    dish: "BBQ Platter",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "r2",
    name: "Hamza Malik",
    rating: 5,
    text: "The chicken karahi tasted like a proper Pindi karahi. Generous portions and the staff were attentive without hovering.",
    date: "2026-07-28",
    dish: "Chicken Karahi",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "r3",
    name: "Sana Riaz",
    rating: 4,
    text: "Came for a birthday dinner. The courtyard seating is lovely in the evening and the pasta was surprisingly good.",
    date: "2026-07-04",
    dish: "Alfredo Pasta",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "r4",
    name: "Usman Ali",
    rating: 5,
    text: "Ordered delivery to Chaklala. Food arrived hot, biryani was fragrant, and the dynamite chicken disappeared first.",
    date: "2026-06-19",
    dish: "Chicken Biryani",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "r5",
    name: "Fatima Noor",
    rating: 5,
    text: "Finally a place in Rawalpindi that works for both elders and kids. Family seating, calm lighting, and solid nihari.",
    date: "2026-06-02",
    dish: "Nihari",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "r6",
    name: "Bilal Ahmed",
    rating: 4,
    text: "Malai boti is the move. Parking was easy on a weeknight and the karak chai at the end was exactly right.",
    date: "2026-05-21",
    dish: "Malai Boti",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
];
