import type { ReactNode } from "react";
import React from "react";

import { StyledLinkTagLayout } from "./LinkTagLayout.style";

const LinkTagLayout: React.FC<{
  children: ReactNode;
}> = ({ children }) => <StyledLinkTagLayout>{children}</StyledLinkTagLayout>;

export default LinkTagLayout;
