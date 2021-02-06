import * as React from "react";
import InputError from "../InputError";
import Label from "../Label";
import { StyledInput } from "./Checkbox.style";

const Checkbox: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: string;
  }
> = ({ label, ...props }) => (
  <>
    <Label>{label}</Label>
    <StyledInput type="checkbox" {...props} />
    <InputError error={props.error} />
  </>
);

export default Checkbox;
