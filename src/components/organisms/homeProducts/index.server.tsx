import { connection } from "next/server";
import { getProducts, getCategories } from "@/requests/products";
import HomeProducts from "./index";

const HomeProductsServer = async () => {
  await connection();
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);

  return (
    <HomeProducts products={products} categories={categories} />
  );
};

export default HomeProductsServer;
