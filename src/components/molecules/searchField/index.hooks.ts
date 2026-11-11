import { useEffect, useRef, useState } from "react";
import { useSearch } from "@/context/search";

const useProductSearch = () => {
  const [query, setQuery] = useState("");
  const [composing, setComposing] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { setSearchTerm } = useSearch();

  useEffect(
    () => {
      if (composing) return;
      timer.current = setTimeout(() => setSearchTerm(query.trim()), 300);

      return () => {
        if (timer.current) clearTimeout(timer.current);
      };
    },
    [query, composing, setSearchTerm],
  );

  const clearSearch = () => {
    if (timer.current) clearTimeout(timer.current);
    setQuery("");
    setSearchTerm("");
  };

  const startComposition = () => {
    if (timer.current) clearTimeout(timer.current);
    setComposing(true);
  };

  return { query, setQuery, clearSearch, startComposition, endComposition: () => setComposing(false) };
};

export default useProductSearch;
