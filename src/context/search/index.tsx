"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { TSearchContext } from "./index.types";

const SearchContext = createContext<TSearchContext | null>(null);

export const useSearch = () => {
  const value = useContext(SearchContext);
  if (!value) throw new Error("useSearch requires SearchProvider");

  return value;
};

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, query, setQuery }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
