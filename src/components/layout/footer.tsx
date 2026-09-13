import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Icons } from "@/components/ui/icons";
import {
  dayLabels,
  dayOrder,
  getFullAddress,
  getMailtoHref,
  getTelHref,
  getWhatsAppHref,
  restaurant,
} from "@/data/restaurant";
import { formatDayHours } from "@/lib/hours";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { ...restaurant.social.instagram, icon: Icons.instagram },
  { ...restaurant.social.facebook, icon: Icons.facebook },
  { ...restaurant.social.tiktok, icon: Icons.tiktok },
  { ...restaurant.social.whatsapp, icon: Icons.whatsapp },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
            {restaurant.slogan}
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cream hover:bg-gold hover:text-charcoal"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-cream/75">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Contact
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-cream/75">
            <li>
              <a href={getTelHref()} className="hover:text-gold">
                {restaurant.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={getWhatsAppHref()} className="hover:text-gold">
                WhatsApp {restaurant.contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={getMailtoHref()} className="break-all hover:text-gold">
                {restaurant.contact.email}
              </a>
            </li>
            <li className="max-w-xs">{getFullAddress()}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Opening Hours
          </h2>
          <ul className="mt-5 space-y-2 text-sm text-cream/75">
            {dayOrder.map((day) => (
              <li key={day} className="flex justify-between gap-3">
                <span>{dayLabels[day]}</span>
                <span className="shrink-0 text-right">{formatDayHours(restaurant.hours[day])}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 {restaurant.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold">
              Terms & Conditions
            </Link>
            <Link href="/cookies" className="hover:text-gold">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
