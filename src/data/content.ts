/**
 * CLIENT DATA — REPLACE BEFORE PRODUCTION
 * Toggle `active` to hide an offer without deleting it.
 */

import type { FaqItem, InstagramPost, Offer, WhyChooseItem, EventType } from "@/types";

export const offers: Offer[] = [
  {
    id: "weekend-family",
    title: "Weekend Family Deal",
    subtitle: "Saturday & Sunday",
    description:
      "A family BBQ platter with two sides, four drinks and naan — built for a table of four.",
    originalPrice: 4200,
    salePrice: 3490,
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Family BBQ platter with grilled meats and sides",
    badge: "Save PKR 710",
    active: true,
    validDays: ["saturday", "sunday"],
    ctaHref: "/order?offer=weekend-family",
  },
  {
    id: "weekday-lunch",
    title: "Weekday Lunch Karahi",
    subtitle: "Monday to Thursday · 12:00–4:00 PM",
    description:
      "Half chicken karahi with two naan and a drink. Dine-in or takeaway.",
    originalPrice: 1450,
    salePrice: 1190,
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Chicken karahi lunch special",
    badge: "Lunch special",
    active: true,
    validDays: ["monday", "tuesday", "wednesday", "thursday"],
    ctaHref: "/order?offer=weekday-lunch",
  },
];

export const whyChooseUs: WhyChooseItem[] = [
  {
    id: "fresh",
    title: "Fresh Ingredients",
    description: "We use quality ingredients prepared fresh for every order.",
    icon: "leaf",
  },
  {
    id: "authentic",
    title: "Authentic Flavors",
    description: "Traditional recipes with carefully selected spices.",
    icon: "flame",
  },
  {
    id: "atmosphere",
    title: "Great Atmosphere",
    description: "A comfortable space for family, friends and celebrations.",
    icon: "home",
  },
  {
    id: "service",
    title: "Fast Service",
    description: "Friendly service focused on making every visit enjoyable.",
    icon: "clock",
  },
];

export const eventTypes: EventType[] = [
  {
    id: "birthday",
    title: "Birthday events",
    description: "Cakes, reserved tables and a set menu for the table of honour.",
    icon: "gift",
  },
  {
    id: "family",
    title: "Family gatherings",
    description: "Long tables, sharing platters and a quieter corner of the courtyard.",
    icon: "users",
  },
  {
    id: "corporate",
    title: "Corporate dinners",
    description: "Set menus and invoice-friendly bookings for teams.",
    icon: "briefcase",
  },
  {
    id: "private",
    title: "Private events",
    description: "Part of the dining room can be held for a closed gathering.",
    icon: "sparkle",
  },
  {
    id: "wedding",
    title: "Wedding & event catering",
    description: "BBQ and Pakistani menus delivered to your hall or home.",
    icon: "chef",
  },
];

export const faqs: FaqItem[] = [
  {
    id: "reservations",
    question: "Do you accept reservations?",
    answer:
      "Yes. You can request a table online or call us. For groups larger than 12, please phone so we can arrange seating.",
  },
  {
    id: "delivery",
    question: "Do you offer home delivery?",
    answer:
      "Yes, we deliver to selected areas of Rawalpindi including Saddar, Chaklala, Westridge and parts of Bahria Town. Delivery charges and minimum order apply.",
  },
  {
    id: "takeaway",
    question: "Is takeaway available?",
    answer:
      "Takeaway is available throughout opening hours. Place an order online or call ahead so the kitchen can time it for collection.",
  },
  {
    id: "family",
    question: "Do you offer family seating?",
    answer:
      "Yes. We have larger tables indoors and in the courtyard, suitable for families and mixed-age groups.",
  },
  {
    id: "catering",
    question: "Do you provide catering?",
    answer:
      "We cater birthdays, corporate dinners and wedding events. Send an enquiry with your date, guest count and menu preference.",
  },
  {
    id: "parking",
    question: "Do you have parking?",
    answer:
      "On-site parking is available for diners. Weekend evenings fill quickly — arrive a little early or use nearby street parking.",
  },
  {
    id: "payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, debit/credit cards and selected online payments. The website checkout is a demo until a payment provider is connected.",
  },
  {
    id: "groups",
    question: "Do you accommodate large groups?",
    answer:
      "Yes, with notice. Groups over 12 should call or email so we can hold the right room and pace the kitchen.",
  },
  {
    id: "hours",
    question: "What are your opening hours?",
    answer:
      "We are open daily from 12:00 PM. Most weekdays we close at 11:00 PM; Friday and Saturday we stay open until midnight. Friday service begins at 1:00 PM.",
  },
];

export const instagramPosts: InstagramPost[] = [
  {
    id: "ig1",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80",
    alt: "Grilled meats on Instagram",
    href: "https://www.instagram.com/",
  },
  {
    id: "ig2",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=80",
    alt: "Biryani on Instagram",
    href: "https://www.instagram.com/",
  },
  {
    id: "ig3",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=700&q=80",
    alt: "Pasta on Instagram",
    href: "https://www.instagram.com/",
  },
  {
    id: "ig4",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80",
    alt: "Dining room on Instagram",
    href: "https://www.instagram.com/",
  },
  {
    id: "ig5",
    image:
      "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=700&q=80",
    alt: "Wings on Instagram",
    href: "https://www.instagram.com/",
  },
  {
    id: "ig6",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80",
    alt: "Dessert on Instagram",
    href: "https://www.instagram.com/",
  },
];
