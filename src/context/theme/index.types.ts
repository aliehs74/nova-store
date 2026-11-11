export type TThemeMode = "light" | "dark";

export type TThemeContext = {
  mode: TThemeMode;
  toggleTheme: () => void;
};
