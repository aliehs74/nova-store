import type { TCategory } from "@/types/product";

export type TCategoryContext = {
  selectedCategory: TCategory | null;
  selectCategory: (category: TCategory | null) => void;
};
