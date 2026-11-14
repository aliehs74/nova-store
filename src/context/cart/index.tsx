"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useStore } from "zustand";
import createCartStore from "@/storage/cart";
import type { TCartState } from "@/storage/cart/index.types";

const CartContext = createContext<ReturnType<typeof createCartStore> | null>(
  null,
);

export const useCart = <T,>(selector: (state: TCartState) => T) => {
  const store = useContext(CartContext);
  if (!store) throw new Error("useCart requires CartProvider");

  return useStore(store, selector);
};

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [store] = useState(createCartStore);

  useEffect(() => {
    const finish = () => store.getState().finishHydration();
    void store.persist.rehydrate().then(finish, finish);
  }, [store]);

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
};

export default CartProvider;
