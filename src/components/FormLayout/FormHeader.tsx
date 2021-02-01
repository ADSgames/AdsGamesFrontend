import React from "react";
import type { ReactNode } from "react";
import { StyledFormHeader, FormHeaderText } from "./FormHeader.style";

export interface DescriptionProps {
  text: string;
}

const FormHeader: React.FC<{
  children: ReactNode;
}> = ({ children }) => (
  <StyledFormHeader>
    <FormHeaderText>{children}</FormHeaderText>
  </StyledFormHeader>
);

export default FormHeader;
