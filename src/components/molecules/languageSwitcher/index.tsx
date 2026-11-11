"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, getPathname } from "@/shared/navigation";
import { Languages, Language } from "./index.styles";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("languageSwitcher");

  return (
    <Languages dir="ltr">
      {(["fa", "en"] as const).map((language, index) => (
        <Language
          key={language}
          href={getPathname({ href: pathname, locale: language })}
          lang={language}
          hrefLang={language}
          aria-label={t(language)}
          aria-current={locale === language ? "page" : undefined}
          onClick={(event) => {
            event.currentTarget.href = `${event.currentTarget.pathname}${window.location.search}${window.location.hash}`;
          }}
        >
          {index === 1 ? <span aria-hidden="true">|</span> : null}
          {t(`${language}Code`)}
        </Language>
      ))}
    </Languages>
  );
};

export default LanguageSwitcher;
