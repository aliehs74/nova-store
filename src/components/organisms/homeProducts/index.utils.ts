import type { TProduct } from "@/types/product";
import type { TProductSort } from "./index.types";

export const sortOptions = [
  "default",
  "priceAsc",
  "priceDesc",
  "titleAsc",
  "titleDesc",
] as const;
export const pageSize = 6;

export const getFilteredProducts = (
  products: TProduct[],
  searchTerm: string,
  category: string | null,
  sort: TProductSort,
  locale: string,
) => {
  const search = searchTerm.trim().toLocaleLowerCase(locale);
  const filtered = products.filter(
    (product) =>
      (category === null || product.category === category) &&
      product.title.toLocaleLowerCase(locale).includes(search),
  );
  const collator = new Intl.Collator(locale, {
    sensitivity: "base",
    numeric: true,
  });

  return filtered.sort((a, b) => {
    switch (sort) {
      case "priceAsc":
        return a.price - b.price || a.id - b.id;
      case "priceDesc":
        return b.price - a.price || a.id - b.id;
      case "titleAsc":
        return collator.compare(a.title, b.title) || a.id - b.id;
      case "titleDesc":
        return collator.compare(b.title, a.title) || a.id - b.id;
      default:
        return 0;
    }
  });
};
