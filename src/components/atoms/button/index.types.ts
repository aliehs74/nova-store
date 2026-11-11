import type { ComponentPropsWithRef } from "react";

export type TButtonProps = ComponentPropsWithRef<"button"> & {
  customVariant?: "primary" | "secondary"; // Visual action emphasis.
};
