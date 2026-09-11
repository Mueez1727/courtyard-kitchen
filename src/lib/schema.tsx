import { getFullAddress, restaurant } from "@/data/restaurant";
import { menuCategories, menuItems } from "@/data/menu";

export function getRestaurantJsonLd() {
  const { location, contact, seo, hours } = restaurant;

  return {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    name: restaurant.name,
    image: restaurant.about.image,
    url: seo.siteUrl,
    telephone: contact.phoneDisplay,
    email: contact.email,
    priceRange: restaurant.priceRangeSchema,
    servesCuisine: [...restaurant.cuisine],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${location.street}, ${location.area}`,
      addressLocality: location.city,
      addressRegion: location.region,
      postalCode: location.postalCode,
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.lat,
      longitude: location.lng,
    },
    hasMap: `https://www.google.com/maps?q=${location.lat},${location.lng}`,
    openingHoursSpecification: Object.entries(hours).map(([day, value]) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${day.charAt(0).toUpperCase()}${day.slice(1)}`,
      opens: "closed" in value && value.closed ? undefined : value.open,
      closes:
        "closed" in value && value.closed
          ? undefined
          : value.close === "00:00"
            ? "24:00"
            : value.close,
    })),
    menu: `${seo.siteUrl}/menu`,
    acceptsReservations: "True",
    description: seo.description,
    sameAs: [
      restaurant.social.instagram.href,
      restaurant.social.facebook.href,
      restaurant.social.tiktok.href,
    ],
  };
}

export function getMenuJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${restaurant.name} Menu`,
    hasMenuSection: menuCategories.map((category) => ({
      "@type": "MenuSection",
      name: category.name,
      description: category.description,
      hasMenuItem: menuItems
        .filter((item) => item.category === category.id)
        .map((item) => ({
          "@type": "MenuItem",
          name: item.name,
          description: item.description,
          image: item.image,
          offers: {
            "@type": "Offer",
            price: item.price,
            priceCurrency: "PKR",
            availability: "https://schema.org/InStock",
          },
        })),
    })),
  };
}

export function JsonLd() {
  const payload = [getRestaurantJsonLd(), getMenuJsonLd()];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

export function getAddressLine() {
  return getFullAddress();
}
