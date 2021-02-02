import React from "react";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

import { StyledButton, ButtonText, ButtonIcon } from "./Button.style";

const Button: React.FC<
  React.HTMLProps<HTMLButtonElement> & { icon?: IconProp }
> = ({ onClick, disabled, children, icon }) => (
  <StyledButton onClick={onClick} disabled={disabled}>
    <ButtonText>{children}</ButtonText>
    {typeof icon !== "undefined" && <ButtonIcon icon={icon} />}
  </StyledButton>
);

export default Button;
