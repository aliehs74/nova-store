import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import font from "@/shared/font";
import StyleRegistry from "@/shared/styleRegistry";
import ThemeProvider from "@/context/theme";
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
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"} suppressHydrationWarning className={font.variable}>
      <body>
        <StyleRegistry>
        <ThemeProvider>
        <NextIntlClientProvider locale={locale} messages={{ languageSwitcher: messages.languageSwitcher, themeSwitcher: messages.themeSwitcher, api: messages.api, header: messages.header, common: messages.common, search: messages.search, categories: messages.categories, products: messages.products }}>
          {children}
        </NextIntlClientProvider>
        </ThemeProvider>
        </StyleRegistry>
      </body>
    </html>
  );
};

export default LocaleLayout;
