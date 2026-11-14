export const locales = ["fa", "en"] as const;

export const defaultLocale = "fa";
import { defineRouting } from "next-intl/routing";

const routing = defineRouting({
  locales,
  defaultLocale,
  localeDetection: false,
});

export default routing;
