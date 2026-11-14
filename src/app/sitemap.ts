import type { MetadataRoute } from "next";
import { locales } from "@/i18n";
import routes from "@/shared/routes";
import siteUrl from "@/shared/site";

const sitemap = (): MetadataRoute.Sitemap => {
  const origin = siteUrl;
  if (!origin) return [];
  const languages = Object.fromEntries(
    locales.map((locale) => [
      locale,
      new URL(routes.home(locale), origin).href,
    ]),
  );
  return locales.map((locale) => ({
    url: new URL(routes.home(locale), origin).href,
    alternates: { languages },
  }));
};

export default sitemap;
