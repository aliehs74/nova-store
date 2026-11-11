"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { TCategory } from "@/types/product";
import type { TCategoryContext } from "./index.types";

const CategoryContext = createContext<TCategoryContext | null>(null);

export const useCategory = () => {
  const value = useContext(CategoryContext);
  if (!value) throw new Error("useCategory requires CategoryProvider");

  return value;
};

const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategory, selectCategory] = useState<TCategory | null>(null);

  return (
    <CategoryContext.Provider value={{ selectedCategory, selectCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
