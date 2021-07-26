import * as React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faWindows,
  faApple,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import "@fontsource/press-start-2p";

import { Normalize } from "../styles/normalize";

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #111111;
`;

library.add(faGithub, faWindows, faApple, faLinux);

const LayoutRoot: React.FC<{
  className?: string;
}> = ({ children, className }) => (
  <>
    <Normalize />
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
  </>
);

export default LayoutRoot;
