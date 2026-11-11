export type TThemeMode = "light" | "dark";

export type TThemeContext = {
  mode: TThemeMode; // Active browser theme.
  toggleTheme: () => void; // Switch and persist the theme.
};
