import React from "react";

import { StyledButton } from "./Button.style";

const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
  onClick,
  disabled,
}) => <StyledButton onClick={onClick} disabled={disabled} />;

export default Button;
