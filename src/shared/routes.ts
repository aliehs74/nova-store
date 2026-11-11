import type { TLocale } from "@/types/locale";

const routes = {
  home: (locale: TLocale) => `/${locale}`,
  cart: (locale: TLocale) => `/${locale}/cart`,
  products: (locale: TLocale) => `/${locale}#home-products`,
};

export default routes;
