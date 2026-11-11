"use client";

import { Minus, Plus, ShoppingCart, Star, Trash2 } from "lucide-react";
import { useFormatter, useLocale, useTranslations } from "next-intl";
import ImageWithFallback from "@/components/atoms/imageWithFallback";
import { formatPrice } from "@/shared/price";
import getCategoryPresentation from "@/shared/categories";
import getProductImage from "@/shared/productImage";
import { Card, Picture, Content, Category, Rating, Price, AddButton, QuantityControl, QuantityButton } from "./index.styles";
import type { TProductCardProps } from "./index.types";

const ProductCard = ({ product, customId, quantity, onAddToCart, onDecreaseQuantity }: TProductCardProps) => {
  const locale = useLocale() === "fa" ? "fa" : "en";
  const t = useTranslations("products");
  const common = useTranslations("common");
  const categories = useTranslations("categories");
  const format = useFormatter();
  const { label } = getCategoryPresentation(product.category);

  return (
    <Card id={customId} aria-labelledby={`${customId}-title`}>
      <Picture>
        <ImageWithFallback
          src={getProductImage(product.image)}
          alt={product.title}
          sizes="(max-width: 479px) calc(100vw - 32px), (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 390px"
        />
      </Picture>
      <Content>
        <Category>{label ? categories(label) : product.category}</Category>
        <h3 id={`${customId}-title`} dir="auto" title={product.title}>{product.title}</h3>
        <Rating aria-label={t("rating", { rate: product.rating.rate, count: product.rating.count })}>
          <Star size={16} aria-hidden="true" focusable="false" />
          <bdi dir="ltr" aria-hidden="true">
            {format.number(product.rating.rate, { minimumFractionDigits: 1, maximumFractionDigits: 1 })} ({format.number(product.rating.count)})
          </bdi>
        </Rating>
        <Price><bdi dir="ltr">{formatPrice(product.price, locale)}</bdi></Price>
        {quantity > 0 ? (
          <QuantityControl role="group" aria-label={t("quantity", { title: product.title })}>
            <QuantityButton
              customVariant="secondary"
              aria-label={t("increaseQuantity", { title: product.title })}
              disabled={!onAddToCart}
              onClick={() => onAddToCart?.(product)}
            >
              <Plus size={18} aria-hidden="true" focusable="false" />
            </QuantityButton>
            <output aria-live="polite" aria-atomic="true" aria-label={t("quantity", { title: product.title })}>
              {format.number(quantity)}
            </output>
            <QuantityButton
              customVariant="secondary"
              $remove={quantity === 1}
              aria-label={t(quantity === 1 ? "removeFromCart" : "decreaseQuantity", { title: product.title })}
              onClick={() => onDecreaseQuantity(product.id)}
            >
              {quantity === 1 ? <Trash2 size={18} aria-hidden="true" focusable="false" /> : <Minus size={18} aria-hidden="true" focusable="false" />}
            </QuantityButton>
          </QuantityControl>
        ) : <AddButton
          aria-label={t("addToCart", { title: product.title })}
          aria-disabled={!onAddToCart}
          disabled={!onAddToCart}
          onClick={() => onAddToCart?.(product)}
        >
          <ShoppingCart size={18} aria-hidden="true" focusable="false" />
          {common("addToCart")}
        </AddButton>}
      </Content>
    </Card>
  );
};

export default ProductCard;
