"use client";

import type { ReactNode } from "react";
import { CartProvider } from "@/lib/cart";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CartDrawer } from "@/components/layout/cart-drawer";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <Navbar />
      {children}
      <Footer />
      <CartDrawer />
      <MobileActionBar />
    </CartProvider>
  );
}
