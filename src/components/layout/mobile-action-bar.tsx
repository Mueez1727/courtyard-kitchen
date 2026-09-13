"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/ui/icons";
import { getTelHref, getWhatsAppHref } from "@/data/restaurant";
import { cn } from "@/lib/utils";

const actions = [
  { href: getTelHref(), label: "Call", icon: Icons.phone, external: true },
  { href: getWhatsAppHref("Hello, I would like to order from The Courtyard Kitchen."), label: "WhatsApp", icon: Icons.whatsapp, external: true },
  { href: "/menu", label: "Menu", icon: Icons.utensils, external: false },
  { href: "/order", label: "Order", icon: Icons.bag, external: false },
];

export function MobileActionBar() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/8 bg-parchment/95 px-3 py-2.5 pb-[max(0.7rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="grid grid-cols-4 gap-2">
        {actions.map((action) => {
          const active = !action.external && pathname.startsWith(action.href);
          const className = cn(
            "flex flex-col items-center gap-1.5 rounded-2xl px-2 py-2.5 text-[11px] font-medium",
            active ? "bg-burgundy text-cream" : "bg-cream text-charcoal",
          );
          const content = (
            <>
              <action.icon size={18} />
              {action.label}
            </>
          );

          if (action.external) {
            return (
              <a key={action.label} href={action.href} className={className}>
                {content}
              </a>
            );
          }

          return (
            <Link key={action.label} href={action.href} className={className}>
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
