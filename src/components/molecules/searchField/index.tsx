"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Search, X } from "lucide-react";
import { Field, Control, Clear } from "./index.styles";
import useProductSearch from "./index.hooks";

const SearchField = () => {
  const t = useTranslations("search");
  const common = useTranslations("common");
  const { query, setQuery, clearSearch, startComposition, endComposition } =
    useProductSearch();
  const input = useRef<HTMLInputElement>(null);

  return (
    <Field role="search" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="header-product-search" className="sr-only">
        {t("label")}
      </label>
      <Search
        size={19}
        strokeWidth={1.8}
        aria-hidden="true"
        focusable="false"
      />
      <Control
        ref={input}
        id="header-product-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onCompositionStart={startComposition}
        onCompositionEnd={endComposition}
        placeholder={t("placeholder")}
        aria-label={t("label")}
        autoComplete="off"
        dir={query ? "auto" : undefined}
      />
      {query ? (
        <Clear
          type="button"
          aria-label={common("clear")}
          onClick={() => {
            clearSearch();
            input.current?.focus();
          }}
        >
          <X size={16} aria-hidden="true" focusable="false" />
        </Clear>
      ) : null}
    </Field>
  );
};

export default SearchField;
