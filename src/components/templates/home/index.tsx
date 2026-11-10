import { getTranslations } from "next-intl/server";
import LanguageSwitcher from "@/components/molecules/languageSwitcher";

const Home = async () => {
  const t = await getTranslations("home");

  return (
    <main id="storefront">
      <LanguageSwitcher />
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </main>
  );
};

export default Home;
