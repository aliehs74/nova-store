"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "@/context/theme";
import Button from "@/components/atoms/button";

const ThemeSwitcher = () => {
  const { mode, toggleTheme } = useTheme();
  const t = useTranslations("themeSwitcher");
  const label = t(mode === "dark" ? "light" : "dark");

  return (
    <Button customVariant="secondary" aria-label={label} title={label} onClick={toggleTheme}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        {mode === "dark" ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
          </>
        ) : (
          <path d="M20.9 13.1A9 9 0 0 1 10.9 3.1 9 9 0 1 0 20.9 13.1Z" />
        )}
      </svg>
    </Button>
  );
};

export default ThemeSwitcher;
