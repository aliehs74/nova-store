"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useFormatter, useLocale, useTranslations } from "next-intl";
import { Navigation, PageButton } from "./index.styles";
import type { TPaginationProps } from "./index.types";

const Pagination = ({
  page,
  pageCount,
  onPageChange,
  customId,
}: TPaginationProps) => {
  const t = useTranslations("products.pagination");
  const format = useFormatter();
  const rtl = useLocale() === "fa";
  const PreviousIcon = rtl ? ChevronRight : ChevronLeft;
  const NextIcon = rtl ? ChevronLeft : ChevronRight;
  if (pageCount < 2) return null;

  return (
    <Navigation id={customId} aria-label={t("label")}>
      <ul>
        <li>
          <PageButton
            customVariant="secondary"
            disabled={page === 1}
            aria-label={t("previous")}
            onClick={() => onPageChange(page - 1)}
          >
            <PreviousIcon size={18} aria-hidden="true" focusable="false" />
          </PageButton>
        </li>
        {Array.from({ length: pageCount }, (_, index) => index + 1).map(
          (number) => (
            <li key={number}>
              <PageButton
                customVariant="secondary"
                aria-label={t("page", { page: number })}
                aria-current={number === page ? "page" : undefined}
                onClick={() => onPageChange(number)}
              >
                {format.number(number)}
              </PageButton>
            </li>
          ),
        )}
        <li>
          <PageButton
            customVariant="secondary"
            disabled={page === pageCount}
            aria-label={t("next")}
            onClick={() => onPageChange(page + 1)}
          >
            <NextIcon size={18} aria-hidden="true" focusable="false" />
          </PageButton>
        </li>
      </ul>
    </Navigation>
  );
};

export default Pagination;
