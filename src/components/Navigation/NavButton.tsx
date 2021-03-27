import React, { useState } from "react";

import {
  NavButtonIcon,
  NavButtonStyle,
  NavButtonText,
} from "./NavButton.style";

export interface NavButtonProps {
  text: string;
  icon: string;
  hoverIcon: string;
  route: string;
  hidden: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({
  text,
  icon,
  hoverIcon,
  route,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <NavButtonStyle
      to={route}
      onMouseEnter={(): void => {
        setHover(true);
      }}
      onMouseLeave={(): void => {
        setHover(false);
      }}
    >
      <NavButtonIcon src={hover ? hoverIcon : icon} alt={text} />
      <NavButtonText>{text}</NavButtonText>
    </NavButtonStyle>
  );
};

export default NavButton;
