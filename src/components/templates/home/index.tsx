import { getTranslations } from "next-intl/server";
import StoreHeader from "@/components/organisms/storeHeader";
import { Suspense } from "react";
import HomeProductsServer from "@/components/organisms/homeProducts/index.server";

const Home = async () => {
  const t = await getTranslations("home");
  const common = await getTranslations("common");

  return (
    <>
    <StoreHeader />
    <main id="storefront">
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <Suspense fallback={<p role="status">{common("loading")}</p>}>
        <HomeProductsServer />
      </Suspense>
    </main>
    </>
  );
};

export default Home;
