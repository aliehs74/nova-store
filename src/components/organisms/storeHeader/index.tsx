"use client";

import { useRef, useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import { Link } from "@/shared/navigation";
import Logo from "@/components/atoms/logo";
import SearchField from "@/components/molecules/searchField";
import LanguageSwitcher from "@/components/molecules/languageSwitcher";
import ThemeSwitcher from "@/components/molecules/themeSwitcher";
import { Header, Inner, Actions, Preferences, Search, Navigation, MenuButton, Cart, Badge } from "./index.styles";
import type { TStoreHeaderProps } from "./index.types";
import { useCart } from "@/context/cart";

const StoreHeader = ({ children }: TStoreHeaderProps) => {
  const t = useTranslations("header");
  const common = useTranslations("common");
  const format = useFormatter();
  const cartCount = useCart((state) => state.items.reduce((total, item) => total + item.quantity, 0));
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const categoryMenu = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => setOpen(false);

  return (
    <Header
      id="store-header"
      onKeyDown={(event) => {
        if (event.key !== "Escape") return;
        if (categoryMenu.current?.open) {
          categoryMenu.current.open = false;
          categoryMenu.current.querySelector("summary")?.focus();
        } else if (open) { closeMenu(); trigger.current?.focus(); }
      }}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) closeMenu(); }}
    >
      <Inner>
        <Logo />
        <Actions>
          <Cart role="img" aria-label={t("cartCount", { count: cartCount })} title={t("cartCount", { count: cartCount })}>
            <ShoppingCart size={23} strokeWidth={1.8} aria-hidden="true" focusable="false" />
            <Badge aria-hidden="true">{format.number(cartCount)}</Badge>
          </Cart>
          <Preferences>
            <LanguageSwitcher />
            <ThemeSwitcher />
          </Preferences>
          <MenuButton ref={trigger} type="button" aria-expanded={open} aria-controls="store-navigation" aria-label={t(open ? "closeMenu" : "openMenu")} onClick={() => setOpen(!open)}>
            {open ? <X size={21} strokeWidth={1.8} aria-hidden="true" focusable="false" /> : <Menu size={21} strokeWidth={1.8} aria-hidden="true" focusable="false" />}
          </MenuButton>
        </Actions>
        <Search><SearchField /></Search>
        <Navigation id="store-navigation" aria-label={t("navigation")} $open={open}>
          <Link href="/" onClick={closeMenu}>{common("home")}</Link>
          <a href="#home-products" onClick={closeMenu}>{common("products")}</a>
          <details ref={categoryMenu} id="header-categories">
            <summary>{common("categories")}</summary>
            <div onClick={(event) => {
              if (!(event.target instanceof Element) || !event.target.closest("button")) return;
              if (categoryMenu.current) categoryMenu.current.open = false;
              if (window.matchMedia("(min-width: 1024px)").matches) categoryMenu.current?.querySelector("summary")?.focus();
              else { closeMenu(); trigger.current?.focus(); }
              document.getElementById("home-products")?.scrollIntoView();
            }}>
              {children}
            </div>
          </details>
        </Navigation>
      </Inner>
    </Header>
  );
};

export default StoreHeader;
