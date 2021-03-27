import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { StyledButton, ButtonText, ButtonIcon } from "./Button.style";

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: IconProp;
    fullWidth?: boolean;
  }
> = ({ children, icon, fullWidth = false, ...props }) => (
  <StyledButton {...props} fullWidth={fullWidth}>
    <ButtonText>{children}</ButtonText>
    {typeof icon !== "undefined" && <ButtonIcon icon={icon} />}
  </StyledButton>
);
