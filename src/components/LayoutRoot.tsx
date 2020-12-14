import * as React from "react";
import styled from "styled-components";

import { Normalize } from "../styles/normalize";

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #111111;
`;

const LayoutRoot: React.FC<{
  className?: string;
}> = ({ children, className }) => (
  <>
    <Normalize />
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
  </>
);

export default LayoutRoot;
