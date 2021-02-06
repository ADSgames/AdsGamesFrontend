import React from "react";

import { StyledLinkTagLayout } from "./LinkTagLayout.style";

const LinkTagLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => <StyledLinkTagLayout>{children}</StyledLinkTagLayout>;

export default LinkTagLayout;
