import type { TProduct } from "@/types/product";

export type TProductCardProps = {
  product: TProduct;
  customId: string;
  quantity: number;
  onDecreaseQuantity: (productId: number) => void;
  onAddToCart?: (product: TProduct) => void;
};
