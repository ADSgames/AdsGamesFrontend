import * as React from "react";
import styled from "styled-components";
import type { DefaultTheme } from "styled-components";

const StyledLayoutMain = styled.main<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: ${(props): number => props.theme.heights.nav}px;
`;

const LayoutMain: React.FC<{
  className?: string;
}> = ({ children, className }) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
);

export default LayoutMain;
