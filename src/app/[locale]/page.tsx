import Home from "@/components/templates/home";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import routes from "@/shared/routes";
import siteUrl from "@/shared/site";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  if (locale !== "fa" && locale !== "en") notFound();
  const title = locale === "fa" ? "فروشگاه نوا | NOVA" : "NOVA Store";
  const description =
    locale === "fa"
      ? "محصولات فروشگاه نوا را مشاهده، جستجو و مقایسه کنید و به سبد خرید خود اضافه کنید."
      : "Browse, search and compare NOVA products and add your favorites to your cart.";

  return {
    title,
    description,
    robots: { index: Boolean(siteUrl), follow: true },
    ...(siteUrl ? { metadataBase: siteUrl } : {}),
    alternates: {
      canonical: routes.home(locale),
      languages: Object.fromEntries(
        locales.map((language) => [language, routes.home(language)]),
      ),
    },
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "NOVA",
      url: routes.home(locale),
      locale: locale === "fa" ? "fa_IR" : "en_US",
      alternateLocale: locale === "fa" ? "en_US" : "fa_IR",
    },
  };
};

const HomePage = () => {
  return <Home />;
};

export default HomePage;
