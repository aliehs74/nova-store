import { formatDecimal } from "@/utils/numberFormat";
import type { TLocale } from "@/types/locale";

export const priceCurrency = "USD";

export const formatPrice = (price: number, locale: TLocale) =>
  `${formatDecimal(price.toFixed(2), locale)} ${priceCurrency}`;
