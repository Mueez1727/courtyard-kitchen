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

    const iconBtn = cn(
    "relative flex h-11 w-11 items-center justify-center rounded-full transition-colors",
    "bg-burgundy/[0.08] text-burgundy hover:bg-burgundy/15",
    transparent && "lg:bg-white/15 lg:text-cream lg:hover:bg-white/25",
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        "bg-parchment/95 shadow-sm backdrop-blur-md",
        transparent && "lg:bg-transparent lg:shadow-none",
      )}
    >
      <nav
        className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[4.75rem] lg:px-8"
        aria-label="Primary"
      >
        <Logo overlay={transparent} />

        <ul className="hidden items-center gap-8 lg:flex">
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

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggleCart}
            className={iconBtn}
            aria-label={`Open cart, ${count} items`}
          >
            <Icons.cart size={18} />
            {count > 0 ? (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-burgundy px-1 text-[10px] font-bold text-cream">
                {count}
              </span>
            ) : null}
          </button>
          <ButtonLink
            href="/order"
            className="hidden md:inline-flex"
            variant={transparent ? "gold" : "primary"}
          >
            Order Online
          </ButtonLink>
          <button
            type="button"
            className={cn(iconBtn, "lg:hidden")}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <Icons.close size={18} /> : <Icons.menu size={18} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="lg:hidden" id="mobile-nav">
          <button
            type="button"
            className="fixed inset-0 top-[4.25rem] bg-charcoal/40"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div className="relative border-t border-charcoal/5 bg-parchment px-5 pb-8 pt-4 shadow-lg">
            <ul className="flex flex-col gap-1.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-2xl px-5 py-3.5 text-base font-medium",
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
            <div className="mt-5 grid gap-3">
              <ButtonLink href="/order" className="w-full">
                Order Online
              </ButtonLink>
              <ButtonLink href="/reservations" variant="outline" className="w-full">
                Book a Table
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
