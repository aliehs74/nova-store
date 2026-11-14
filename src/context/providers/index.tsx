import { NextIntlClientProvider } from "next-intl";
import CartProvider from "@/context/cart";
import CategoryProvider from "@/context/category";
import SearchProvider from "@/context/search";
import ThemeProvider from "@/context/theme";
import StyleRegistry from "@/shared/styleRegistry";
import type { TAppProvidersProps, THomeProvidersProps } from "./index.types";

export const AppProviders = ({
  children,
  locale,
  messages,
}: TAppProvidersProps) => {
  return (
    <StyleRegistry>
      <ThemeProvider>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CartProvider>{children}</CartProvider>
        </NextIntlClientProvider>
      </ThemeProvider>
    </StyleRegistry>
  );
};

export const HomeProviders = ({ children }: THomeProvidersProps) => {
  return (
    <CategoryProvider>
      <SearchProvider>{children}</SearchProvider>
    </CategoryProvider>
  );
};
