import React from "react";

import { StyledLinkLayout } from "./LinkLayout.style";

const LinkLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => <StyledLinkLayout>{children}</StyledLinkLayout>;

export default LinkLayout;
