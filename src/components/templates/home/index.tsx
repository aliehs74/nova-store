import { getTranslations } from "next-intl/server";
import StoreHeader from "@/components/organisms/storeHeader";
import { Suspense } from "react";
import HomeProductsServer from "@/components/organisms/homeProducts/index.server";
import Hero from "@/components/organisms/home/hero";
import { HomeProviders } from "@/context/providers";
import HeaderCategories from "@/components/organisms/storeHeader/index.categories.server";
import StoreFooter from "@/components/organisms/storeFooter";
import ProductsLoading from "@/components/organisms/homeProducts/index.loading";

const Home = async () => {
  const common = await getTranslations("common");

  return (
    <HomeProviders>
      <StoreHeader>
        <Suspense
          fallback={
            <p role="status" style={{ minHeight: "15rem" }}>
              {common("loading")}
            </p>
          }
        >
          <HeaderCategories />
        </Suspense>
      </StoreHeader>

      <main id="storefront">
        <Hero />

        <div id="home-products">
          <Suspense fallback={<ProductsLoading />}>
            <HomeProductsServer />
          </Suspense>
        </div>
      </main>
      <StoreFooter />
    </HomeProviders>
  );
};

export default Home;
