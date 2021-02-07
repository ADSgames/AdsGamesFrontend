import * as React from "react";

import { InputError } from "../InputError";
import { InputLabel } from "../InputLabel";
import { StyledInput } from "./TextInput.style";

export const TextInput: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: string;
  }
> = ({ label, ...props }) => (
  <>
    <InputLabel>{label}</InputLabel>
    <StyledInput {...props} />
    <InputError error={props.error} />
  </>
);
