/**
 * CLIENT DATA — REPLACE BEFORE PRODUCTION
 * Confirm each facility with the restaurant owner before launch.
 * Remove any amenity the venue does not actually offer.
 */

import type { Facility } from "@/types";

export const facilities: Facility[] = [
  {
    id: "indoor",
    name: "Indoor Dining",
    description: "Climate-controlled dining rooms for family meals and evenings out.",
    icon: "utensils",
  },
  {
    id: "outdoor",
    name: "Outdoor Seating",
    description: "Courtyard tables for cooler Rawalpindi nights.",
    icon: "sun",
  },
  {
    id: "family",
    name: "Family Seating",
    description: "Larger tables and a layout that works for all ages.",
    icon: "users",
  },
  {
    id: "ac",
    name: "Air Conditioning",
    description: "Comfortable indoor seating through summer and monsoon.",
    icon: "snowflake",
  },
  {
    id: "wifi",
    name: "Free Wi-Fi",
    description: "Complimentary wireless internet for guests.",
    icon: "wifi",
  },
  {
    id: "parking",
    name: "Parking",
    description: "On-site parking for diners. Confirm availability for large groups.",
    icon: "parking",
  },
  {
    id: "takeaway",
    name: "Takeaway",
    description: "Call ahead or order online and collect from the counter.",
    icon: "bag",
  },
  {
    id: "delivery",
    name: "Delivery",
    description: "Home delivery across selected Rawalpindi neighbourhoods.",
    icon: "bike",
  },
  {
    id: "accessible",
    name: "Wheelchair Accessible",
    description: "Step-free access to the main dining area. Please call ahead.",
    icon: "accessible",
  },
  {
    id: "private",
    name: "Private Events",
    description: "Reserved areas for birthdays, dinners and small gatherings.",
    icon: "sparkle",
  },
  {
    id: "catering",
    name: "Catering",
    description: "BBQ and Pakistani menus for events at your venue.",
    icon: "chef",
  },
];
