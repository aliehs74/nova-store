import StoreHeader from "@/components/organisms/storeHeader";
import CartItems from "@/components/organisms/cartItems";
import StoreFooter from "@/components/organisms/storeFooter";

const Cart = () => {
  return (
    <>
      <StoreHeader customVariant="cart" />
      <main id="shopping-cart">
        <CartItems />
      </main>
      <StoreFooter />
    </>
  );
};

export default Cart;
