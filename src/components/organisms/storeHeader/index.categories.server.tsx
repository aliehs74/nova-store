import { connection } from "next/server";
import { getCategories } from "@/requests/products";
import CategorySelector from "@/components/molecules/categorySelector";

const HeaderCategories = async () => {
  await connection();
  const categories = await getCategories();

  return <CategorySelector categories={categories} customVariant="menu" />;
};

export default HeaderCategories;
