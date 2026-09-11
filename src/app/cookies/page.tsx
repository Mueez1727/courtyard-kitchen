import type { Metadata } from "next";
import { LegalShell } from "@/components/ui/legal-shell";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Cookie Policy",
};

export default function CookiesPage() {
  return (
    <LegalShell title="Cookie Policy">
      <p>
        The demo storefront uses the browser’s local storage to remember your cart
        ({restaurant.name} order mockup). No advertising cookies are set.
      </p>
      <p>
        A production launch may add analytics. Update this page with the actual vendors
        and a consent banner if required.
      </p>
    </LegalShell>
  );
}
