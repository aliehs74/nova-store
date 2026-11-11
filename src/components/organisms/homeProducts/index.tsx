"use client";

import { useTranslations } from "next-intl";
import type { THomeProductsProps } from "./index.types";
import CategorySelector from "@/components/molecules/categorySelector";
import { useCategory } from "@/context/category";
import ProductCard from "@/components/molecules/productCard";
import { SectionHeader, Controls, Grid } from "./index.styles";
import { useSearch } from "@/context/search";

const HomeProducts = ({ products, categories }: THomeProductsProps) => {
  const t = useTranslations("api");
  const productText = useTranslations("products");
  const common = useTranslations("common");
  const { selectedCategory } = useCategory();
  const { searchTerm } = useSearch();
  const normalizedSearch = searchTerm.toLowerCase();
  const visibleProducts = products.success ? products.data.filter((product) =>
    (selectedCategory === null || product.category === selectedCategory)
    && product.title.toLowerCase().includes(normalizedSearch)
  ) : [];

  return (
    <>
      <CategorySelector categories={categories} />
      <section aria-labelledby="products-title">
        <SectionHeader>
          <h2 id="products-title">{productText("title")}</h2>
          <Controls id="product-list-controls">
            {products.success ? <p role="status">{productText("count", { count: visibleProducts.length })}</p> : null}
          </Controls>
        </SectionHeader>
        {!products.success ? <p role="alert">{t(products.error.code)}</p> : visibleProducts.length === 0 ? <p role="status">{products.data.length === 0 ? t("empty") : common("noResults")}</p> : (
          <Grid role="list">
            {visibleProducts.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} customId={`product-${product.id}`} />
              </li>
            ))}
          </Grid>
        )}
      </section>
    </>
  );
};

export default HomeProducts;
