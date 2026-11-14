"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useFormatter, useLocale, useTranslations } from "next-intl";
import routes from "@/shared/routes";
import { Link } from "@/shared/navigation";
import Logo from "@/components/atoms/logo";
import SearchField from "@/components/molecules/searchField";
import LanguageSwitcher from "@/components/molecules/languageSwitcher";
import ThemeSwitcher from "@/components/molecules/themeSwitcher";
import {
  Header,
  Inner,
  Actions,
  Preferences,
  Search,
  Navigation,
  MenuButton,
  Cart,
  Badge,
  Sidebar,
  SidebarLanguage,
  DesktopLanguage,
  CloseButton,
} from "./index.styles";
import type { TStoreHeaderProps } from "./index.types";
import { useCart } from "@/context/cart";

const StoreHeader = ({
  children,
  customVariant = "home",
}: TStoreHeaderProps) => {
  const locale = useLocale() === "fa" ? "fa" : "en";
  const t = useTranslations("header");
  const common = useTranslations("common");
  const format = useFormatter();
  const cartCount = useCart((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0),
  );
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const categoryMenu = useRef<HTMLDetailsElement>(null);
  const sidebar = useRef<HTMLDialogElement>(null);
  const closeMenu = () => {
    sidebar.current?.close();
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) {
        sidebar.current?.close();
        setOpen(false);
      }
    };
    desktop.addEventListener("change", closeOnDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <Header
      id="store-header"
      onKeyDown={(event) => {
        if (event.key !== "Escape") return;
        if (categoryMenu.current?.open) {
          event.preventDefault();
          categoryMenu.current.open = false;
          categoryMenu.current.querySelector("summary")?.focus();
        } else if (open) {
          closeMenu();
          trigger.current?.focus();
        }
      }}
    >
      <Inner>
        <MenuButton
          ref={trigger}
          type="button"
          aria-expanded={open}
          aria-controls="store-sidebar"
          aria-label={t("openMenu")}
          onClick={() => {
            sidebar.current?.showModal();
            setOpen(true);
          }}
        >
          <Menu
            size={23}
            strokeWidth={1.8}
            aria-hidden="true"
            focusable="false"
          />
        </MenuButton>
        <Logo />
        <Actions>
          <Cart
            href={routes.cart(locale)}
            aria-current={customVariant === "cart" ? "page" : undefined}
            aria-label={t("cartCount", { count: cartCount })}
            title={t("cartCount", { count: cartCount })}
          >
            <ShoppingCart
              size={23}
              strokeWidth={1.8}
              aria-hidden="true"
              focusable="false"
            />
            <Badge aria-hidden="true">{format.number(cartCount)}</Badge>
          </Cart>
          <Preferences>
            <DesktopLanguage>
              <LanguageSwitcher />
            </DesktopLanguage>
            <ThemeSwitcher />
          </Preferences>
        </Actions>
        <Sidebar
          ref={sidebar}
          id="store-sidebar"
          role={open ? "dialog" : "presentation"}
          aria-modal={open || undefined}
          aria-label={t("navigation")}
          onClose={() => setOpen(false)}
          onCancel={closeMenu}
          onClick={(event) => {
            if (event.target !== event.currentTarget) return;
            const bounds = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < bounds.left ||
              event.clientX > bounds.right ||
              event.clientY < bounds.top ||
              event.clientY > bounds.bottom
            )
              closeMenu();
          }}
        >
          <CloseButton
            type="button"
            aria-label={t("closeMenu")}
            onClick={closeMenu}
          >
            <X size={22} aria-hidden="true" focusable="false" />
          </CloseButton>
          {customVariant === "home" ? (
            <Search>
              <SearchField />
            </Search>
          ) : null}
          <Navigation id="store-navigation" aria-label={t("navigation")}>
            <Link href="/" onClick={closeMenu}>
              {common("home")}
            </Link>
            <a
              href={
                customVariant === "home"
                  ? "#home-products"
                  : routes.products(locale)
              }
              onClick={closeMenu}
            >
              {common("products")}
            </a>
            {customVariant === "cart" ? (
              <Cart
                href={routes.cart(locale)}
                aria-current="page"
                onClick={closeMenu}
              >
                {common("cart")}
              </Cart>
            ) : null}
            {children ? (
              <details ref={categoryMenu} id="header-categories">
                <summary>{common("categories")}</summary>
                <div
                  onClick={(event) => {
                    if (
                      !(event.target instanceof Element) ||
                      !event.target.closest("button")
                    )
                      return;
                    if (categoryMenu.current) categoryMenu.current.open = false;
                    if (window.matchMedia("(min-width: 1024px)").matches)
                      categoryMenu.current?.querySelector("summary")?.focus();
                    else {
                      closeMenu();
                      trigger.current?.focus();
                    }
                    document.getElementById("home-products")?.scrollIntoView();
                  }}
                >
                  {children}
                </div>
              </details>
            ) : null}
          </Navigation>
          <SidebarLanguage
            onClick={(event) => {
              if (event.target instanceof Element && event.target.closest("a"))
                closeMenu();
            }}
          >
            <LanguageSwitcher />
          </SidebarLanguage>
        </Sidebar>
      </Inner>
    </Header>
  );
};

export default StoreHeader;
