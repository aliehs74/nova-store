"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter, Link } from "@/shared/navigation";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("languageSwitcher");
  const targetLocale = locale === "fa" ? "en" : "fa";

  return (
    <Link
      href={pathname}
      locale={targetLocale}
      lang={targetLocale}
      aria-label={t("label")}
      title={t("label")}
      onClick={(event) => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        router.replace(`${pathname}${window.location.search}${window.location.hash}`, { locale: targetLocale });
      }}
      className="language-switcher"
    >
      <Image src={targetLocale === "fa" ? "/images/flags/iran.svg" : "/images/flags/usa.png"} alt="" width={28} height={28} />
    </Link>
  );
};

export default LanguageSwitcher;
