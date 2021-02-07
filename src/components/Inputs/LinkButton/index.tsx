import React from "react";

import {
  StyledLinkButton,
  LinkButtonText,
  StyledLinkButtonContainer,
} from "./LinkButton.style";

export const LinkButton: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
  onClick,
  disabled,
  children,
}) => (
  <StyledLinkButtonContainer>
    <StyledLinkButton onClick={onClick} disabled={disabled}>
      <LinkButtonText>{children}</LinkButtonText>
    </StyledLinkButton>
  </StyledLinkButtonContainer>
);
