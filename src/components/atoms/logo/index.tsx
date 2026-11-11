"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import routes from "@/shared/routes";
import { Brand, Bag } from "./index.styles";

const Logo = () => {
  const locale = useLocale() === "fa" ? "fa" : "en";
  const t = useTranslations("header");

  return (
    <Brand as={Link} href={routes.home(locale)} aria-label={t("homeLabel")} dir="ltr">
      <span>NOVA</span>
      <Bag iconName="novaBag" />
    </Brand>
  );
};

export default Logo;
