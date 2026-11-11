import type { TApiResult } from "@/types/api";
import type { TCategory, TProduct } from "@/types/product";

export type THomeProductsProps = {
  products: TApiResult<TProduct[]>;
  categories: TApiResult<TCategory[]>;
};
