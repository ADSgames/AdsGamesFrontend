import type { ReactNode } from "react";
import React from "react";

import { StyledLinkLayout } from "./LinkLayout.style";

const LinkLayout: React.FC<{
  children: ReactNode;
}> = ({ children }) => <StyledLinkLayout>{children}</StyledLinkLayout>;

export default LinkLayout;
