"use client";

import { Send } from "lucide-react";
import IconProvider from "@/utils/iconProvider";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import routes from "@/shared/routes";
import { Footer } from "./index.styles";

const StoreFooter = () => {
  const locale = useLocale() === "fa" ? "fa" : "en";
  const t = useTranslations("common");
  const home = useTranslations("home");
  const footer = useTranslations("footer");

  return (
    <Footer id="store-footer">
      <div>
        <Link href={routes.home(locale)} aria-label={t("home")}>
          <strong dir="ltr">NOVA</strong>
          <IconProvider iconName="novaBag" width={38} height={44} />
        </Link>
        <p>{footer("tagline")}</p>
      </div>
      <nav aria-label={footer("guide")}>
        <h2>{footer("guide")}</h2>
        {(["shipping", "returns", "payment", "faq"] as const).map((key) => (
          <Link key={key} href="#">
            {footer(key)}
          </Link>
        ))}
      </nav>
      <nav aria-label={home("title")}>
        <h2>{footer("information")}</h2>
        <Link href={routes.home(locale)}>{t("home")}</Link>
        <Link href={routes.products(locale)}>{t("products")}</Link>
        <Link href="#">{footer("about")}</Link>
        <Link href="#">{footer("contact")}</Link>
      </nav>
      <aside aria-label={footer("socials")}>
        <Link href="#" aria-label="Telegram">
          <Send aria-hidden="true" size={21} />
        </Link>
        <Link href="#" aria-label="Instagram">
          <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle
              cx="17.5"
              cy="6.5"
              r="1"
              fill="currentColor"
              stroke="none"
            />
          </svg>
        </Link>
        <Link href="#" aria-label="LinkedIn">
          <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 9h4v13H2Zm7 0h4v2c1-2 3-2 4-2 4 0 5 2 5 6v7h-4v-7c0-2-1-3-2-3-2 0-3 1-3 3v7H9Z" />
          </svg>
        </Link>
        <Link href="#" aria-label="Twitter">
          <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M22 5.9a8 8 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.3 8.3 0 0 1-2.6 1 4.2 4.2 0 0 0-7.2 3.8A12 12 0 0 1 3 4.7a4.2 4.2 0 0 0 1.3 5.6 4 4 0 0 1-1.9-.5 4.2 4.2 0 0 0 3.4 4.1 4 4 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2 18.6a11.8 11.8 0 0 0 18.2-10 8 8 0 0 0 1.8-2.7Z" />
          </svg>
        </Link>
      </aside>
      <small>{footer("copyright")}</small>
    </Footer>
  );
};

export default StoreFooter;
