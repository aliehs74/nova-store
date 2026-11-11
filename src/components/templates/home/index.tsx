import { getTranslations } from "next-intl/server";
import LanguageSwitcher from "@/components/molecules/languageSwitcher";
import ThemeSwitcher from "@/components/molecules/themeSwitcher";
import Input from "@/components/atoms/input";
import { Suspense } from "react";
import HomeProductsServer from "@/components/organisms/homeProducts/index.server";

const Home = async () => {
  const t = await getTranslations("home");
  const search = await getTranslations("search");
  const common = await getTranslations("common");

  return (
    <main id="storefront">
      <LanguageSwitcher />
      <ThemeSwitcher />
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <Input label={search("label")} placeholder={search("placeholder")} type="search" />
      <Suspense fallback={<p role="status">{common("loading")}</p>}>
        <HomeProductsServer />
      </Suspense>
    </main>
  );
};

export default Home;
