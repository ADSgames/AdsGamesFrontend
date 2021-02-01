import * as React from "react";

import Navigation from "../Navigation";

import { StyledHeader, HeaderInner, HomepageLink, Logo } from "./Header.style";

const Header: React.FC = () => (
  <StyledHeader>
    <Navigation />
    <HeaderInner>
      <HomepageLink to="/">
        <Logo />
      </HomepageLink>
    </HeaderInner>
  </StyledHeader>
);

export default Header;
