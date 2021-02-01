import * as React from "react";
import Label from "../Label";
import { StyledInput } from "./Input.style";

const Button: React.FC<
  React.HTMLProps<HTMLInputElement> & { label: string }
> = ({ label, disabled, required, value, placeholder }) => (
  <>
    <Label>{label}</Label>
    <StyledInput
      value={value}
      disabled={disabled}
      required={required}
      placeholder={placeholder}
    />
  </>
);

export default Button;
