import * as React from "react";

import { StyledLabel } from "./Label.style";

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <StyledLabel>{children}</StyledLabel>
);

export default Label;
