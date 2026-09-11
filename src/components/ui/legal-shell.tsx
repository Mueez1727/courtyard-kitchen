import type { ReactNode } from "react";

export function LegalShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-parchment pt-28 pb-20">
      <article className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="font-display text-5xl text-charcoal">{title}</h1>
        <div className="mt-8 space-y-4 leading-relaxed text-muted">{children}</div>
      </article>
    </div>
  );
}
