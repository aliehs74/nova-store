"use client";

import { useTranslations } from "next-intl";
import { LoadingArea } from "./index.styles";

const ProductsLoading = () => {
  const t = useTranslations("common");

  return (
    <LoadingArea role="status" aria-busy="true">{t("loading")}</LoadingArea>
  );
};

export default ProductsLoading;
