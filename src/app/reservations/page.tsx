import type { Metadata } from "next";
import { ReservationForm } from "@/components/forms/reservation-form";
import { restaurant } from "@/data/restaurant";
import { getTelHref, getWhatsAppHref } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Reserve a table at The Courtyard Kitchen in Rawalpindi. Book for dinners, family gatherings and celebrations.",
};

export default function ReservationsPage() {
  return (
    <div className="bg-parchment pt-28 pb-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-burgundy">
            Book a table
          </p>
          <h1 className="mt-3 font-display text-5xl text-charcoal">Reserve a Table</h1>
          <p className="mt-4 text-muted">
            Tell us when you would like to dine. Requests are confirmed by phone.{" "}
            {restaurant.reservations.largeGroupNote}
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <p>
              Call{" "}
              <a className="text-burgundy" href={getTelHref()}>
                {restaurant.contact.phoneDisplay}
              </a>
            </p>
            <p>
              WhatsApp{" "}
              <a className="text-burgundy" href={getWhatsAppHref()}>
                {restaurant.contact.whatsappDisplay}
              </a>
            </p>
          </div>
        </div>
        <div className="rounded-[2rem] bg-white p-6 sm:p-8">
          <ReservationForm />
        </div>
      </div>
    </div>
  );
}
