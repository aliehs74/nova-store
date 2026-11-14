import type { TCartItem } from "./index.types";

const isCartItem = (value: unknown): value is TCartItem => {
  if (
    !value ||
    typeof value !== "object" ||
    !("quantity" in value) ||
    !("product" in value)
  )
    return false;
  const product = value.product;
  if (!product || typeof product !== "object") return false;

  return (
    typeof value.quantity === "number" &&
    Number.isSafeInteger(value.quantity) &&
    value.quantity > 0 &&
    "id" in product &&
    typeof product.id === "number" &&
    Number.isSafeInteger(product.id) &&
    product.id > 0 &&
    "title" in product &&
    typeof product.title === "string" &&
    product.title.trim().length > 0 &&
    "price" in product &&
    typeof product.price === "number" &&
    Number.isFinite(product.price) &&
    product.price >= 0 &&
    "category" in product &&
    typeof product.category === "string" &&
    "image" in product &&
    typeof product.image === "string"
  );
};

const readCartItems = (value: unknown): TCartItem[] => {
  if (
    !value ||
    typeof value !== "object" ||
    !("items" in value) ||
    !Array.isArray(value.items)
  )
    return [];
  const items: unknown[] = value.items;
  if (!items.every(isCartItem)) return [];
  if (new Set(items.map((item) => item.product.id)).size !== items.length)
    return [];
  if (
    !Number.isSafeInteger(
      items.reduce((total, item) => total + item.quantity, 0),
    )
  )
    return [];

  return items.map(({ product, quantity }) => ({
    product: {
      id: product.id,
      title: product.title,
      price: product.price,
      category: product.category,
      image: product.image,
    },
    quantity,
  }));
};

export default readCartItems;
