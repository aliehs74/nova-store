import { Gem, Laptop, Shirt, Tag, type LucideIcon } from "lucide-react";

const categoryPresentation: Record<
  string,
  { label: string; Icon: LucideIcon }
> = {
  electronics: { label: "electronics", Icon: Laptop },
  jewelery: { label: "jewelery", Icon: Gem },
  "men's clothing": { label: "men", Icon: Shirt },
  "women's clothing": { label: "women", Icon: Shirt },
};

const getCategoryPresentation = (category: string) =>
  Object.hasOwn(categoryPresentation, category)
    ? categoryPresentation[category]
    : { label: null, Icon: Tag };

export default getCategoryPresentation;
