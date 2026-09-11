# The Courtyard Kitchen

Premium restaurant website mockup for a fictional venue in Rawalpindi, Pakistan. Built as a finished client demonstration: replace the data files and it becomes the live site.

## Replace client data

All business information lives in `src/data/`. Look for `CLIENT DATA — REPLACE BEFORE PRODUCTION`.

| File | What to change |
| --- | --- |
| `src/data/restaurant.ts` | Name, phone, WhatsApp, email, address, coordinates, hours, social links, brand colours, SEO |
| `src/data/menu.ts` | Dishes, prices (PKR), photos, categories |
| `src/data/gallery.ts` | Gallery images |
| `src/data/reviews.ts` | **Demo reviews — replace with genuine guest reviews before launch** |
| `src/data/facilities.ts` | Amenities (remove anything the restaurant does not offer) |
| `src/data/content.ts` | Offers, FAQs, events, Instagram preview |

Maps, directions, call buttons and structured data all read from `restaurant.location` and `restaurant.contact`. Do not hardcode a second set of coordinates.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

Next.js (App Router), React, TypeScript, Tailwind CSS v4.

Ordering, reservations and contact forms are frontend mockups. Cart state is stored in `localStorage`. Wire payment, email and POS integrations later without rewriting the UI.
