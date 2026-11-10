import type { TLocale } from "@/types/locale";

const routes = {
  home: (locale: TLocale) => `/${locale}`,
};

export default routes;
