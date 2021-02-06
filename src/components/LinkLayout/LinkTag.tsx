import React from "react";

import { StyledLinkTag } from "./LinkTag.style";

const LinkTag: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => <StyledLinkTag>{children}</StyledLinkTag>;

export default LinkTag;
