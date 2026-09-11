import type { Metadata } from "next";
import { LegalShell } from "@/components/ui/legal-shell";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy">
      <p>
        This demonstration website for {restaurant.name} stores only what you type into
        forms in your browser for the duration of the session. No personal data is sent to
        a server in this demo.
      </p>
      <p>
        When the live restaurant site is launched, this page should explain what data is
        collected (reservations, orders, contact forms), why it is used, and how guests
        can request deletion.
      </p>
      <p>
        Contact:{" "}
        <a className="text-burgundy" href={`mailto:${restaurant.contact.email}`}>
          {restaurant.contact.email}
        </a>
      </p>
    </LegalShell>
  );
}
