"use client";

import { useTranslations } from "next-intl";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme";
import { Switch, Option } from "./index.styles";

const ThemeSwitcher = () => {
  const { mode, toggleTheme } = useTheme();
  const t = useTranslations("themeSwitcher");

  return (
    <Switch dir="ltr">
      <Option
        type="button"
        aria-label={t("dark")}
        title={t("dark")}
        aria-pressed={mode === "dark"}
        onClick={() => {
          if (mode !== "dark") toggleTheme();
        }}
      >
        <Moon
          size={19}
          strokeWidth={1.8}
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        />
      </Option>
      <Option
        type="button"
        aria-label={t("light")}
        title={t("light")}
        aria-pressed={mode === "light"}
        onClick={() => {
          if (mode !== "light") toggleTheme();
        }}
      >
        <Sun size={20} strokeWidth={1.6} aria-hidden="true" focusable="false" />
      </Option>
    </Switch>
  );
};

export default ThemeSwitcher;
