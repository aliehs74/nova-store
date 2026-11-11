"use client";

import { useLocale, useTranslations } from "next-intl";
import { formatPrice } from "@/shared/price";
import type { THomeProductsProps } from "./index.types";
import CategorySelector from "@/components/molecules/categorySelector";
import { useCategory } from "@/context/category";

const HomeProducts = ({ products, categories }: THomeProductsProps) => {
  const t = useTranslations("api");
  const locale = useLocale() === "fa" ? "fa" : "en";
  const common = useTranslations("common");
  const { selectedCategory } = useCategory();
  const visibleProducts = products.success ? products.data.filter((product) => selectedCategory === null || product.category === selectedCategory) : [];

  return (
    <>
      <CategorySelector categories={categories} />
      <section aria-label={t("products")}>
        <h2>{t("products")}</h2>
        {!products.success ? <p role="alert">{t(products.error.code)}</p> : visibleProducts.length === 0 ? <p role="status">{products.data.length === 0 ? t("empty") : common("noResults")}</p> : (
          <ul>
            {visibleProducts.map((product) => (
              <li key={product.id}>
                <span>{product.title}</span>{" "}
                <bdi dir="ltr">{formatPrice(product.price, locale)}</bdi>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default HomeProducts;
