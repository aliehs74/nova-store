"use client";

import { useId } from "react";
import { Control, Field } from "./index.styles";
import type { TInputProps } from "./index.types";

const Input = ({ label, id, className, ...props }: TInputProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <Field htmlFor={inputId}>
      {label}
      <Control {...props} id={inputId} dir="auto" className={className} />
    </Field>
  );
};

export default Input;
