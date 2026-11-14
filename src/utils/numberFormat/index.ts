import type { TLocale } from "@/types/locale";

export const normalizeDigits = (value: string): string =>
  value.replace(/[۰-۹٠-٩]/g, (digit) =>
    String(digit.charCodeAt(0) - (digit >= "۰" ? 0x06f0 : 0x0660)),
  );

export const localizeDigits = (value: string, locale: TLocale): string =>
  locale === "fa"
    ? value.replace(/[0-9]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)])
    : normalizeDigits(value);

export const formatDecimal = (value: string, locale: TLocale): string => {
  if (!/^-?\d+(?:\.\d+)?$/.test(value)) return value;
  const [integer, fraction] = value.split(".");

  return localizeDigits(
    integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
      (fraction === undefined ? "" : `.${fraction}`),
    locale,
  );
};
