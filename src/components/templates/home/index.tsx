import { getTranslations } from "next-intl/server";
import StoreHeader from "@/components/organisms/storeHeader";
import { Suspense } from "react";
import HomeProductsServer from "@/components/organisms/homeProducts/index.server";
import Hero from "@/components/organisms/home/hero";
import { HomeProviders } from "@/context/providers";
import HeaderCategories from "@/components/organisms/storeHeader/index.categories.server";

const Home = async () => {
  const common = await getTranslations("common");

  return (
    <HomeProviders>
      <StoreHeader>

        <Suspense fallback={<p role="status">{common("loading")}</p>}>
          <HeaderCategories />
        </Suspense>
      </StoreHeader>

      <main id="storefront">

        <Hero />

        <div id="home-products">
          <Suspense fallback={<p role="status">{common("loading")}</p>}>
            <HomeProductsServer />
          </Suspense>
        </div>

      </main>
    </HomeProviders>
  );
};

export default Home;
