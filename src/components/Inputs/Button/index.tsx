import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { StyledButton, ButtonText, ButtonIcon } from "./Button.style";

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { icon?: IconProp }
> = ({ children, icon, ...props }) => (
  <StyledButton {...props}>
    <ButtonText>{children}</ButtonText>
    {typeof icon !== "undefined" && <ButtonIcon icon={icon} />}
  </StyledButton>
);

export default Button;
