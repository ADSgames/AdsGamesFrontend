import * as React from "react";

import { StyledLabel } from "./InputLabel.style";

export const InputLabel: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <StyledLabel>{children}</StyledLabel>;
