import type { TCartItem } from "@/storage/cart/index.types";

export const getCartLineTotal = (item: TCartItem) =>
  (Math.round(item.product.price * 100) * item.quantity) / 100;

export const getCartTotal = (items: TCartItem[]) =>
  items.reduce(
    (total, item) =>
      total + Math.round(item.product.price * 100) * item.quantity,
    0,
  ) / 100;
