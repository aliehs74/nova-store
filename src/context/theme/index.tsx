"use client";

import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "@/shared/theme";
import type { TThemeContext, TThemeMode } from "./index.types";

const ThemeContext = createContext<TThemeContext | null>(null);
const getSnapshot = (): TThemeMode => document.documentElement.dataset.theme === "dark" ? "dark" : "light";
const getServerSnapshot = (): TThemeMode => "light";

const subscribe = (notify: () => void) => {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== "nova-theme" && event.key !== null) return;
    document.documentElement.dataset.theme = event.newValue === "dark" ? "dark" : "light";
    notify();
  };
  window.addEventListener("nova-theme-change", notify);
  window.addEventListener("storage", onStorage);

  return () => {
    window.removeEventListener("nova-theme-change", notify);
    window.removeEventListener("storage", onStorage);
  };
};

export const useTheme = () => {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme requires ThemeProvider");

  return value;
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const toggleTheme = () => {
    const nextMode = getSnapshot() === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextMode;
    try { localStorage.setItem("nova-theme", nextMode); } catch { /* Keep theme usable when storage is unavailable. */ }
    window.dispatchEvent(new Event("nova-theme-change"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
