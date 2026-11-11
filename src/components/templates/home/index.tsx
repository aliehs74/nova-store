import { getTranslations } from "next-intl/server";
import StoreHeader from "@/components/organisms/storeHeader";
import { Suspense } from "react";
import HomeProductsServer from "@/components/organisms/homeProducts/index.server";
import Hero from "@/components/organisms/home/hero";

const Home = async () => {
  const common = await getTranslations("common");

  return (
    <>
      <StoreHeader />
      <main id="storefront">
        <Hero />
        <div id="home-products">
          <Suspense fallback={<p role="status">{common("loading")}</p>}>
            <HomeProductsServer />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Home;
