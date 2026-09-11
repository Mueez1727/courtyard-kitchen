"use client";

import { useMemo, useState } from "react";
import { MenuItemCard } from "@/components/menu/menu-item-card";
import { Icons } from "@/components/ui/icons";
import { menuCategories, menuItems } from "@/data/menu";
import type { MenuCategoryId } from "@/types";

export function MenuGrid() {
  const [category, setCategory] = useState<MenuCategoryId | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menuItems.filter((item) => {
      const inCategory = category === "all" || item.category === category;
      const inSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      return inCategory && inSearch;
    });
  }, [category, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
          <FilterChip
            active={category === "all"}
            onClick={() => setCategory("all")}
          >
            All
          </FilterChip>
          {menuCategories.map((item) => (
            <FilterChip
              key={item.id}
              active={category === item.id}
              onClick={() => setCategory(item.id)}
            >
              {item.name}
            </FilterChip>
          ))}
        </div>
        <label className="relative block w-full lg:max-w-xs">
          <span className="sr-only">Search menu</span>
          <Icons.search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search dishes…"
            className="w-full rounded-full border border-charcoal/10 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-burgundy"
          />
        </label>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 rounded-3xl bg-white px-6 py-16 text-center">
          <p className="font-display text-3xl text-charcoal">No dishes match</p>
          <p className="mt-2 text-muted">Try another category or search term.</p>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
        active ? "bg-burgundy text-cream" : "bg-white text-charcoal hover:bg-cream"
      }`}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}
