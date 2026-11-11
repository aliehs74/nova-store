import StoreHeader from "@/components/organisms/storeHeader";
import CartItems from "@/components/organisms/cartItems";

const Cart = () => {

  return (
    <>
      <StoreHeader customVariant="cart" />
      <main id="shopping-cart"><CartItems /></main>
    </>
  );
};

export default Cart;
