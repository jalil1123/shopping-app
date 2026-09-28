"use client";

import { create } from "zustand";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartStore = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  clear: () => void;
  totalItems: () => number;
  totalPrice: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (item) => {
    set((state) => {
      const existing = state.items.find((entry) => entry.id === item.id);

      if (existing) {
        return {
          items: state.items.map((entry) =>
            entry.id === item.id
              ? { ...entry, quantity: entry.quantity + 1 }
              : entry
          )
        };
      }

      return {
        items: [...state.items, { ...item, quantity: 1 }]
      };
    });
  },
  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id)
    }));
  },
  updateQuantity: (id, delta) => {
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    }));
  },
  clear: () => set({ items: [] }),
  totalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
  totalPrice: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}));
