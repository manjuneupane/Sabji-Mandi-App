import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: [],

  addToCart: (item) => {
    const existing = get().cart.find((p) => p.id === item.id);

    if (existing) {
      set({
        cart: get().cart.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        ),
      });
    } else {
      set({
        cart: [...get().cart, { ...item, qty: 1 }],
      });
    }
  },

  removeFromCart: (id) => {
    set({
      cart: get().cart.filter((item) => item.id !== id),
    });
  },

  increaseQty: (id) => {
    set({
      cart: get().cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      ),
    });
  },

  decreaseQty: (id) => {
    set({
      cart: get().cart
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0),
    });
  },
}));