"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { count, toggleCart } = useCart();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const transparent = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "border-b border-charcoal/8 bg-parchment/95 shadow-sm backdrop-blur-md",
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Logo light={transparent} />

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm tracking-wide transition-colors",
                    transparent
                      ? active
                        ? "text-gold"
                        : "text-cream/85 hover:text-gold"
                      : active
                        ? "text-burgundy"
                        : "text-ink/80 hover:text-burgundy",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleCart}
            className={cn(
              "relative flex h-11 w-11 items-center justify-center rounded-full border transition-colors",
              transparent
                ? "border-cream/25 text-cream hover:border-gold hover:text-gold"
                : "border-charcoal/10 text-charcoal hover:border-burgundy hover:text-burgundy",
            )}
            aria-label={`Open cart, ${count} items`}
          >
            <Icons.cart size={18} />
            {count > 0 ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-burgundy px-1 text-[10px] font-bold text-cream">
                {count}
              </span>
            ) : null}
          </button>
          <ButtonLink
            href="/order"
            className="hidden sm:inline-flex"
            variant={transparent ? "gold" : "primary"}
          >
            Order Online
          </ButtonLink>
          <button
            type="button"
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border lg:hidden",
              transparent
                ? "border-cream/25 text-cream"
                : "border-charcoal/10 text-charcoal",
            )}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <Icons.close /> : <Icons.menu />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={cn(
          "lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="border-t border-charcoal/8 bg-parchment px-4 py-6">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-2xl px-4 py-3 text-base",
                    pathname === link.href
                      ? "bg-burgundy text-cream"
                      : "text-charcoal hover:bg-cream",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink href="/order" className="mt-4 w-full">
            Order Online
          </ButtonLink>
          <ButtonLink href="/reservations" variant="outline" className="mt-2 w-full">
            Book a Table
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
