import * as React from "react";

import { StyledFooter, FooterIcons, FooterText } from "./Footer.style";

const Footer: React.FC = () => (
  <StyledFooter>
    <FooterText>Copyright © {new Date().getFullYear()} A.D.S. Games</FooterText>
    <FooterIcons />
  </StyledFooter>
);

export default Footer;
