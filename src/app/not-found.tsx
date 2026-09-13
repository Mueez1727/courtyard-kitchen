import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-parchment px-4 pt-28 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-burgundy">404</p>
      <h1 className="mt-3 font-display text-4xl text-charcoal sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">
        That table isn’t set. Head back to the menu or the courtyard homepage.
      </p>
      <div className="mt-8 flex gap-3">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/menu" variant="outline">
          Menu
        </ButtonLink>
      </div>
    </div>
  );
}
