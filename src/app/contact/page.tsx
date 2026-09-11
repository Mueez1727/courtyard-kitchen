import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact";
import { Location } from "@/components/sections/location";
import { EventEnquiryForm } from "@/components/forms/event-enquiry-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, WhatsApp or visit The Courtyard Kitchen in Saddar, Rawalpindi. Get directions and opening hours.",
};

export default function ContactPage() {
  return (
    <div className="bg-parchment pt-16">
      <ContactSection />
      <Location />
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-4xl text-charcoal">Enquire About an Event</h2>
          <p className="mt-3 text-muted">
            Birthdays, corporate dinners and catering. This form is a mockup for the demo.
          </p>
          <div className="mt-8 rounded-[2rem] bg-white p-6 sm:p-8">
            <EventEnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
