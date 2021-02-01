import type { ReactNode } from "react";
import React from "react";

import { StyledLinkTag } from "./LinkTag.style";

const LinkTag: React.FC<{
  children: ReactNode;
}> = ({ children }) => <StyledLinkTag>{children}</StyledLinkTag>;

export default LinkTag;
