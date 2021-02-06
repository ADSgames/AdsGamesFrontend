import React from "react";

import { StyledLinkDescription, LinkText } from "./LinkDescription.style";

export interface DescriptionProps {
  text: string;
}

const LinkDescription: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <StyledLinkDescription>
    <LinkText>{children}</LinkText>
  </StyledLinkDescription>
);

export default LinkDescription;
