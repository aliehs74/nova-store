import type { ComponentPropsWithRef } from "react";

export type TInputProps = ComponentPropsWithRef<"input"> & {
  label: string; // Visible localized label, associated with the input.
};
