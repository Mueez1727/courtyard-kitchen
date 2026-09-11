import type { Metadata } from "next";
import { LegalShell } from "@/components/ui/legal-shell";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms & Conditions">
      <p>
        This website is a client demonstration for {restaurant.name}. Menu prices, offers
        and availability are placeholders and may differ from the restaurant floor.
      </p>
      <p>
        Online orders and reservations submitted through the demo are not transmitted to
        the kitchen. A live integration should be added before taking real bookings or
        payments.
      </p>
      <p>
        Allergen information should be confirmed with staff. Photographs are stock images
        until replaced with the restaurant’s own photography.
      </p>
    </LegalShell>
  );
}
