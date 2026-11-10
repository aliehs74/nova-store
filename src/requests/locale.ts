import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import * as rootParams from "next/root-params";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";

const dictionaries = {
  fa: () => import("@/dictionary/fa.json").then((module) => module.default),
  en: () => import("@/dictionary/en.json").then((module) => module.default),
};

export default getRequestConfig(async ({ locale }) => {
  const selectedLocale = locale ?? await rootParams.locale();
  if (!hasLocale(locales, selectedLocale)) notFound();

  return { locale: selectedLocale, messages: await dictionaries[selectedLocale]() };
});
