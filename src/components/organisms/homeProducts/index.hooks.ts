import { useEffect, useState } from "react";
import { useCart } from "@/context/cart";
import type { TProduct } from "@/types/product";

const useAddToCart = () => {
  const addProduct = useCart((state) => state.addProduct);
  const hydrated = useCart((state) => state.hydrated);
  const items = useCart((state) => state.items);
  const decreaseProduct = useCart((state) => state.decreaseProduct);
  const [feedback, setFeedback] = useState<{ title: string } | null>(null);

  useEffect(() => {
    if (!feedback) return;
    const timer = setTimeout(() => setFeedback(null), 2500);

    return () => clearTimeout(timer);
  }, [feedback]);

  const addToCart = (product: TProduct) => {
    if (addProduct(product)) setFeedback({ title: product.title });
  };

  return {
    addToCart: hydrated ? addToCart : undefined,
    decreaseProduct,
    items,
    feedback,
  };
};

export default useAddToCart;
