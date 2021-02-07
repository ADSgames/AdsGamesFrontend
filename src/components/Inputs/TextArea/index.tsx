import * as React from "react";

import { InputError } from "../InputError";
import { InputLabel } from "../InputLabel";
import { StyledInput } from "./TextArea.style";

export const TextArea: React.FC<
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
    error?: string;
  }
> = ({ label, error, ...props }) => (
  <>
    <InputLabel>{label}</InputLabel>
    <StyledInput {...props} />
    <InputError>{error}</InputError>
  </>
);
