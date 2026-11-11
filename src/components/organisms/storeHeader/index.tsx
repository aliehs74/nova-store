"use client";

import { useRef, useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import { Link } from "@/shared/navigation";
import Logo from "@/components/atoms/logo";
import SearchField from "@/components/molecules/searchField";
import LanguageSwitcher from "@/components/molecules/languageSwitcher";
import ThemeSwitcher from "@/components/molecules/themeSwitcher";
import { Header, Inner, Actions, Search, Navigation, MenuButton, Cart, Badge } from "./index.styles";

const StoreHeader = () => {
  const t = useTranslations("header");
  const common = useTranslations("common");
  const format = useFormatter();
  const categories = useTranslations("categories");
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeMenu = () => setOpen(false);

  return (
    <Header
      id="store-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) { closeMenu(); trigger.current?.focus(); }
      }}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) closeMenu(); }}
    >
      <Inner>
        <Logo />
        <Actions>
          <Cart role="img" aria-label={t("cartCount", { count: 0 })} title={t("cartCount", { count: 0 })}>
            <ShoppingCart size={23} strokeWidth={1.8} aria-hidden="true" focusable="false" />
            <Badge aria-hidden="true">{format.number(0)}</Badge>
          </Cart>
          <LanguageSwitcher />
          <ThemeSwitcher />
          <MenuButton ref={trigger} type="button" aria-expanded={open} aria-controls="store-navigation" aria-label={t(open ? "closeMenu" : "openMenu")} onClick={() => setOpen(!open)}>
            {open ? <X size={21} strokeWidth={1.8} aria-hidden="true" focusable="false" /> : <Menu size={21} strokeWidth={1.8} aria-hidden="true" focusable="false" />}
          </MenuButton>
        </Actions>
        <Search><SearchField /></Search>
        <Navigation id="store-navigation" aria-label={t("navigation")} $open={open}>
          <Link href="/" onClick={closeMenu}>{common("home")}</Link>
          <a href="#home-products" onClick={closeMenu}>{common("products")}</a>
          <details id="header-categories">
            <summary>{common("categories")}</summary>
            <div>
              {["electronics", "jewelery", "men", "women"].map((category) => (
                <a key={category} href="#home-products" onClick={closeMenu}>{categories(category)}</a>
              ))}
            </div>
          </details>
        </Navigation>
      </Inner>
    </Header>
  );
};

export default StoreHeader;
