"use client";

import { Grid2X2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCategory } from "@/context/category";
import getCategoryPresentation from "@/shared/categories";
import { Choices, Choice } from "./index.styles";
import type { TCategorySelectorProps } from "./index.types";

const CategorySelector = ({ categories, customVariant = "chips" }: TCategorySelectorProps) => {
  const t = useTranslations("categories");
  const api = useTranslations("api");
  const common = useTranslations("common");
  const { selectedCategory, selectCategory } = useCategory();

  return (
    <Choices role="group" aria-label={common("categories")} $variant={customVariant}>
      <Choice type="button" aria-pressed={selectedCategory === null} onClick={() => selectCategory(null)}>
        <Grid2X2 size={20} aria-hidden="true" focusable="false" />
        <span>{t("all")}</span>
      </Choice>
      {categories.success ? categories.data.map((category) => {
        const { label, Icon } = getCategoryPresentation(category);

        return (
          <Choice key={category} type="button" aria-pressed={selectedCategory === category} onClick={() => selectCategory(category)}>
            <Icon size={20} aria-hidden="true" focusable="false" />
            <span>{label ? t(label) : category}</span>
          </Choice>
        );
      }) : <p role="alert">{api(categories.error.code)}</p>}
      {categories.success && categories.data.length === 0 ? <p role="status">{t("empty")}</p> : null}
    </Choices>
  );
};

export default CategorySelector;
