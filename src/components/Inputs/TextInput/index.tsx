import * as React from "react";
import InputError from "../InputError";
import Label from "../Label";
import { StyledInput } from "./Input.style";

const TextInput: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: string;
  }
> = ({ label, ...props }) => (
  <>
    <Label>{label}</Label>
    <StyledInput {...props} />
    <InputError error={props.error} />
  </>
);

export default TextInput;
