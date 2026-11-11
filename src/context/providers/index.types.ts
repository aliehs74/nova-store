import type { ReactNode } from "react";
import type { AbstractIntlMessages } from "next-intl";

export type TAppProvidersProps = {
  children: ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
};

export type THomeProvidersProps = {
  children: ReactNode;
};
