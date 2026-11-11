import type { TProduct } from "@/types/product";

export type TProductCardProps = {
  product: TProduct;
  customId: string;
  onAddToCart?: (product: TProduct) => void;
};
