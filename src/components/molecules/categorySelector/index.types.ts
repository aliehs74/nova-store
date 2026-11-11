import type { TApiResult } from "@/types/api";
import type { TCategory } from "@/types/product";

export type TCategorySelectorProps = {
  categories: TApiResult<TCategory[]>;
  customVariant?: "chips" | "menu";
};
