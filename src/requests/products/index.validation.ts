import type { TProduct } from "@/types/product";

export const isProduct = (value: unknown): value is TProduct => {
  if (!value || typeof value !== "object") return false;
  const product = value as Record<string, unknown>;
  const rating = product.rating;
  if (!rating || typeof rating !== "object") return false;
  const score = rating as Record<string, unknown>;

  return (
    typeof product.id === "number" &&
    Number.isInteger(product.id) &&
    product.id > 0 &&
    typeof product.title === "string" &&
    typeof product.description === "string" &&
    typeof product.category === "string" &&
    typeof product.image === "string" &&
    typeof product.price === "number" &&
    Number.isFinite(product.price) &&
    product.price >= 0 &&
    typeof score.rate === "number" &&
    Number.isFinite(score.rate) &&
    score.rate >= 0 &&
    score.rate <= 5 &&
    typeof score.count === "number" &&
    Number.isInteger(score.count) &&
    score.count >= 0
  );
};
