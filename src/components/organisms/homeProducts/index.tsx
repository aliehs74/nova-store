"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { THomeProductsProps, TProductSort } from "./index.types";
import Button from "@/components/atoms/button";
import RetryRequest from "@/components/molecules/retryRequest";
import Pagination from "@/components/molecules/pagination";
import CategorySelector from "@/components/molecules/categorySelector";
import { useCategory } from "@/context/category";
import ProductCard from "@/components/molecules/productCard";
import { SectionHeader, Controls, Grid, Feedback, SortControl, EmptyState } from "./index.styles";
import { getFilteredProducts, pageSize, sortOptions } from "./index.utils";
import useAddToCart from "./index.hooks";
import { useSearch } from "@/context/search";

const HomeProducts = ({ products, categories }: THomeProductsProps) => {
  const t = useTranslations("api");
  const productText = useTranslations("products");
  const common = useTranslations("common");
  const locale = useLocale();
  const { selectedCategory, selectCategory } = useCategory();
  const { searchTerm, query, setQuery, setSearchTerm } = useSearch();
  const [sort, setSort] = useState<TProductSort>("default");
  const filterKey = JSON.stringify([searchTerm, selectedCategory, sort]);
  const [pagination, setPagination] = useState({ filterKey, page: 1 });
  if (pagination.filterKey !== filterKey) setPagination({ filterKey, page: 1 });
  const { addToCart, decreaseProduct, items, feedback } = useAddToCart();
  const filteredProducts = products.success
    ? getFilteredProducts(products.data, searchTerm, selectedCategory, sort, locale) : [];
  const pageCount = Math.ceil(filteredProducts.length / pageSize);
  const page = pagination.filterKey === filterKey ? Math.min(pagination.page, Math.max(1, pageCount)) : 1;
  const visibleProducts = filteredProducts.slice((page - 1) * pageSize, page * pageSize);
  const hasFilters = Boolean(query || searchTerm || selectedCategory !== null || sort !== "default");
  const clearFilters = () => {
    setQuery("");
    setSearchTerm("");
    selectCategory(null);
    setSort("default");
    setPagination({ filterKey: JSON.stringify(["", null, "default"]), page: 1 });
  };

  return (
    <>
      <CategorySelector categories={categories} />
      <section aria-labelledby="products-title">
        <SectionHeader>
          <h2 id="products-title">{productText("title")}</h2>
          <Controls id="product-list-controls">
            {products.success ? (
              <>
                <p role="status">{productText("count", { count: filteredProducts.length })}</p>
                <SortControl>
                  <span>{productText("sort.label")}</span>
                  <select value={sort} onChange={(event) => {
                    const option = sortOptions.find((value) => value === event.target.value);
                    if (option) setSort(option);
                  }}>
                    {sortOptions.map((option) => <option key={option} value={option}>{productText(`sort.${option}`)}</option>)}
                  </select>
                </SortControl>
                {hasFilters ? <Button customVariant="secondary" onClick={clearFilters}>{productText("clearFilters")}</Button> : null}
              </>
            ) : null}
          </Controls>
        </SectionHeader>
        {!products.success ? <EmptyState><p role="alert">{t(products.error.code)}</p><RetryRequest /></EmptyState> : visibleProducts.length === 0 ? (
          <EmptyState>
            <p role="status">{products.data.length === 0 ? t("empty") : common("noResults")}</p>
          </EmptyState>
        ) : (
          <Grid role="list">
            {visibleProducts.map((product) => (
              <li key={product.id}>
                <ProductCard
                  product={product}
                  customId={`product-${product.id}`}
                  quantity={items.find((item) => item.product.id === product.id)?.quantity ?? 0}
                  onAddToCart={addToCart}
                  onDecreaseQuantity={decreaseProduct}
                />
              </li>
            ))}
          </Grid>
        )}
        <Pagination
          customId="products-pagination"
          page={page}
          pageCount={pageCount}
          onPageChange={(nextPage) => setPagination({ filterKey, page: nextPage })}
        />
        {pageCount > 0 ? <p role="status">{productText("pagination.summary", { page, pages: pageCount })}</p> : null}
      </section>
      <Feedback role="status" aria-live="polite" aria-atomic="true">
        {feedback ? <span>{productText("addedToCart", { title: feedback.title })}</span> : null}
      </Feedback>
    </>
  );
};

export default HomeProducts;
