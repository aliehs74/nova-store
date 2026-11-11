import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import heroImage from "@/assets/images/store-hero-wide.webp";
import { Banner, Content, Media, ProductsLink } from "./index.styles";

const Hero = async () => {
  const t = await getTranslations("hero");
  const common = await getTranslations("common");

  return (
    <Banner id="home-hero" aria-labelledby="hero-title">
      <Content>
        <h1 id="hero-title">{t("title")}</h1>
        <p>{t("description")}</p>
        <ProductsLink href="#home-products">
          {common("viewProducts")}
          <ArrowLeft size={18} aria-hidden="true" focusable="false" />
        </ProductsLink>
      </Content>
      <Media>
        <Image
          src={heroImage}
          alt={t("imageAlt")}
          sizes="(max-width: 767px) 200vw, (max-width: 1199px) 100vw, 1200px"
          preload
          placeholder="blur"
        />
      </Media>
    </Banner>
  );
};

export default Hero;
