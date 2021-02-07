import * as React from "react";
import { InputError } from "../InputError";
import { InputLabel } from "../InputLabel";
import { StyledInput } from "./Checkbox.style";

export const Checkbox: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: string;
  }
> = ({ label, ...props }) => (
  <>
    <InputLabel>{label}</InputLabel>
    <StyledInput type="checkbox" {...props} />
    <InputError error={props.error} />
  </>
);
