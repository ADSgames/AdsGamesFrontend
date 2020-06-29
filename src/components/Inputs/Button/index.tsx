import React from "react";

import { StyledButton, ButtonText } from "./Button.style";

const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = ({ onClick, disabled, children }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>        
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  )
};

export default Button;
