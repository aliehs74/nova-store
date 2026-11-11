"use client";

import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { useFormatter, useLocale, useTranslations } from "next-intl";
import Button from "@/components/atoms/button";
import ImageWithFallback from "@/components/atoms/imageWithFallback";
import { useCart } from "@/context/cart";
import { getCartLineTotal, getCartTotal } from "@/shared/cartTotals";
import { formatPrice } from "@/shared/price";
import getProductImage from "@/shared/productImage";
import { Heading, List, Row, Picture, Quantity, IconButton, RemoveButton, LineTotal, Footer, Summary, Empty, ContinueLink } from "./index.styles";

const CartItems = () => {
  const t = useTranslations("cart");
  const products = useTranslations("products");
  const common = useTranslations("common");
  const locale = useLocale() === "fa" ? "fa" : "en";
  const format = useFormatter();
  const items = useCart((state) => state.items);
  const hydrated = useCart((state) => state.hydrated);
  const addProduct = useCart((state) => state.addProduct);
  const decreaseQuantity = useCart((state) => state.decreaseQuantity);
  const removeProduct = useCart((state) => state.removeProduct);
  const clearCart = useCart((state) => state.clearCart);

  return (
    <section aria-labelledby="cart-title" aria-busy={!hydrated}>
      <Heading id="cart-title"><ShoppingCart size={30} aria-hidden="true" />{t("title")}</Heading>
      {!hydrated ? <p role="status">{common("loading")}</p> : items.length === 0 ? (
        <Empty>
          <ShoppingCart size={48} aria-hidden="true" />
          <p role="status">{t("empty")}</p>
          <ContinueLink href="/">{t("continueShopping")}</ContinueLink>
        </Empty>
      ) : (
        <>
          <List aria-label={t("items")}>
            {items.map((item) => (
              <Row key={item.product.id}>
                <Picture><ImageWithFallback src={getProductImage(item.product.image)} alt={item.product.title} sizes="104px" /></Picture>
                <div>
                  <h2 dir="auto">{item.product.title}</h2>
                  <p>{t("unitPrice")} <bdi dir="ltr">{formatPrice(item.product.price, locale)}</bdi></p>
                </div>
                <Quantity role="group" aria-label={products("quantity", { title: item.product.title })}>
                  <IconButton customVariant="secondary" disabled={item.quantity === 1} aria-label={products("decreaseQuantity", { title: item.product.title })} onClick={() => decreaseQuantity(item.product.id)}>
                    <Minus size={18} aria-hidden="true" />
                  </IconButton>
                  <output aria-live="polite" aria-label={products("quantity", { title: item.product.title })}>{format.number(item.quantity)}</output>
                  <IconButton customVariant="secondary" aria-label={products("increaseQuantity", { title: item.product.title })} onClick={() => addProduct(item.product)}>
                    <Plus size={18} aria-hidden="true" />
                  </IconButton>
                </Quantity>
                <LineTotal aria-label={t("lineTotal", { title: item.product.title })}><bdi dir="ltr">{formatPrice(getCartLineTotal(item), locale)}</bdi></LineTotal>
                <RemoveButton customVariant="secondary" aria-label={products("removeFromCart", { title: item.product.title })} onClick={() => removeProduct(item.product.id)}>
                  <Trash2 size={20} aria-hidden="true" />
                </RemoveButton>
              </Row>
            ))}
          </List>
          <Footer>
            <Button customVariant="secondary" onClick={clearCart}><Trash2 size={20} aria-hidden="true" />{t("clear")}</Button>
            <Summary aria-labelledby="cart-total-title">
              <h2 id="cart-total-title">{t("total")}</h2>
              <strong aria-live="polite" aria-atomic="true"><bdi dir="ltr">{formatPrice(getCartTotal(items), locale)}</bdi></strong>
              <Button disabled aria-describedby="cart-checkout-note">{t("checkout")}</Button>
              <p id="cart-checkout-note">{t("checkoutNote")}</p>
            </Summary>
          </Footer>
        </>
      )}
    </section>
  );
};

export default CartItems;
