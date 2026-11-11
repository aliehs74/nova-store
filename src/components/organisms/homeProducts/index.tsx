"use client";

import { useLocale, useTranslations } from "next-intl";
import { formatPrice } from "@/shared/price";
import type { THomeProductsProps } from "./index.types";

const HomeProducts = ({ products, categories }: THomeProductsProps) => {
  const t = useTranslations("api");
  const locale = useLocale() === "fa" ? "fa" : "en";

  return (
    <section aria-label={t("products")}>
      <h2>{t("products")}</h2>
      {!categories.success ? <p role="alert">{t(categories.error.code)}</p> : null}
      {!products.success ? <p role="alert">{t(products.error.code)}</p> : products.data.length === 0 ? <p>{t("empty")}</p> : (
        <ul>
          {products.data.map((product) => (
            <li key={product.id}>
              <span>{product.title}</span>{" "}
              <bdi dir="ltr">{formatPrice(product.price, locale)}</bdi>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default HomeProducts;
