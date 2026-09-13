import type { CSSProperties, ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Providers } from "@/components/layout/providers";
import { JsonLd } from "@/lib/schema";
import { restaurant } from "@/data/restaurant";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const { seo, brand, name } = restaurant;

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.title,
    template: seo.titleTemplate,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  applicationName: name,
  authors: [{ name }],
  openGraph: {
    type: "website",
    locale: seo.locale,
    url: seo.siteUrl,
    siteName: name,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: brand.charcoal,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const brandVars = {
    "--burgundy": brand.burgundy,
    "--burgundy-dark": brand.burgundyDark,
    "--gold": brand.gold,
    "--gold-soft": brand.goldSoft,
    "--cream": brand.cream,
    "--parchment": brand.parchment,
    "--charcoal": brand.charcoal,
    "--charcoal-soft": brand.charcoalSoft,
    "--ink": brand.ink,
    "--muted": brand.muted,
  } as CSSProperties;

  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
      style={brandVars}
    >
      <body className="min-h-full max-w-full overflow-x-clip bg-parchment font-sans text-ink">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd />
        <Providers>
          <main id="main" className="flex-1 pb-[calc(5.25rem+env(safe-area-inset-bottom))] md:pb-0">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
