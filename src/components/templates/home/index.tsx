import { getTranslations } from "next-intl/server";
import StoreHeader from "@/components/organisms/storeHeader";
import { Suspense } from "react";
import HomeProductsServer from "@/components/organisms/homeProducts/index.server";
import Hero from "@/components/organisms/home/hero";
import CategoryProvider from "@/context/category";
import HeaderCategories from "@/components/organisms/storeHeader/index.categories.server";
import SearchProvider from "@/context/search";

const Home = async () => {
  const common = await getTranslations("common");

  return (
    <CategoryProvider>
      <SearchProvider>
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
      </SearchProvider>
    </CategoryProvider>
  );
};

export default Home;
