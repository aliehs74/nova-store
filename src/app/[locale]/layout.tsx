import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "NOVA",
};

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

const LocaleLayout = async ({ children, params }: LayoutProps<"/[locale]">) => {
  const { locale } = await params;

  if (!locales.some((supportedLocale) => supportedLocale === locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <body>{children}</body>
    </html>
  );
};

export default LocaleLayout;
