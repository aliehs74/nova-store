import { getTranslations } from "next-intl/server";
import Cart from "@/components/templates/cart";

export const generateMetadata = async () => {
  const t = await getTranslations("cart");

  return {
    title: `${t("title")} | NOVA`,
    robots: { index: false, follow: true },
  };
};

const CartPage = () => {
  return <Cart />;
};

export default CartPage;
