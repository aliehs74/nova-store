"use client";

import { Control } from "./index.styles";
import type { TButtonProps } from "./index.types";

const Button = ({ customVariant = "primary", type = "button", className, ...props }: TButtonProps) => {

  return (
    <Control {...props} type={type} $variant={customVariant} className={className} />
  );
};

export default Button;
