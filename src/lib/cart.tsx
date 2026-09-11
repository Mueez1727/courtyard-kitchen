"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { restaurant } from "@/data/restaurant";
import { getMenuItem } from "@/data/menu";
import type { CartItem } from "@/types";

const STORAGE_KEY = "courtyard-kitchen-cart";

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (id: string, quantity?: number) => void;
  setQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  count: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
};

const CartContext = createContext<CartContextValue | null>(null);

function loadCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(loadCart());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((open) => !open), []);

  const addItem = useCallback((id: string, quantity = 1) => {
    const menuItem = getMenuItem(id);
    if (!menuItem) return;
    setItems((current) => {
      const existing = current.find((item) => item.id === id);
      if (existing) {
        return current.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item,
        );
      }
      return [
        ...current,
        {
          id: menuItem.id,
          name: menuItem.name,
          price: menuItem.price,
          quantity,
          image: menuItem.image,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const setQuantity = useCallback((id: string, quantity: number) => {
    setItems((current) => {
      if (quantity <= 0) return current.filter((item) => item.id !== id);
      return current.map((item) => (item.id === id ? { ...item, quantity } : item));
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );

  const deliveryFee = useMemo(() => {
    if (items.length === 0) return 0;
    if (subtotal >= restaurant.ordering.freeDeliveryOver) return 0;
    return restaurant.ordering.deliveryFee;
  }, [items.length, subtotal]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      setQuantity,
      removeItem,
      clearCart,
      count: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal,
      deliveryFee,
      total: subtotal + deliveryFee,
    }),
    [items, isOpen, openCart, closeCart, toggleCart, addItem, setQuantity, removeItem, clearCart, subtotal, deliveryFee],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
