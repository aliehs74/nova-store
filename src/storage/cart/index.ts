import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";
import cartStorage from "./index.storage";
import type { TCartState } from "./index.types";

const createCartStore = () => createStore<TCartState>()(
  persist(
    (set, get) => ({
      items: [],
      hydrated: false,
      finishHydration: () => set({ hydrated: true }),
      decreaseQuantity: (productId) => {
        const state = get();
        if (!state.hydrated) return;
        set({ items: state.items.map((item) => item.product.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item) });
      },
      removeProduct: (productId) => {
        if (!get().hydrated) return;
        set({ items: get().items.filter((item) => item.product.id !== productId) });
      },
      clearCart: () => {
        if (get().hydrated) set({ items: [] });
      },
      decreaseProduct: (productId) => {
        const state = get();
        if (!state.hydrated) return;
        set({
          items: state.items.flatMap((item) => item.product.id !== productId
            ? [item]
            : item.quantity > 1 ? [{ ...item, quantity: item.quantity - 1 }] : []),
        });
      },
      addProduct: (product) => {
        const state = get();
        if (!state.hydrated || !Number.isSafeInteger(state.items.reduce((total, item) => total + item.quantity, 1))) return false;
        const existing = state.items.find((item) => item.product.id === product.id);
        const cartProduct = { id: product.id, title: product.title, price: product.price, category: product.category, image: product.image };
        set({
          items: existing
            ? state.items.map((item) => item.product.id === product.id ? { product: cartProduct, quantity: item.quantity + 1 } : item)
            : [...state.items, { product: cartProduct, quantity: 1 }],
        });

        return true;
      },
    }),
    {
      name: "nova-cart",
      version: 1,
      storage: cartStorage,
      partialize: ({ items }) => ({ items }),
      skipHydration: true,
    },
  ),
);

export default createCartStore;
