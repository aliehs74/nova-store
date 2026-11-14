import type { TProduct } from "@/types/product";

export type TCartProduct = Pick<
  TProduct,
  "id" | "title" | "price" | "category" | "image"
>;
export type TCartItem = { product: TCartProduct; quantity: number };
export type TPersistedCart = { items: TCartItem[] };
export type TCartState = TPersistedCart & {
  hydrated: boolean;
  finishHydration: () => void;
  addProduct: (product: TCartProduct) => boolean;
  decreaseProduct: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeProduct: (productId: number) => void;
  clearCart: () => void;
};
