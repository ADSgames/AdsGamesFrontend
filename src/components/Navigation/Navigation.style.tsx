import styled, { DefaultTheme } from "styled-components";

export const NavContainer = styled.nav<{ theme: DefaultTheme }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${(props): number => props.theme.heights.nav}px;
  background-color: #c32919;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.4);
  z-index: 6;
  display: flex;
  justify-content: center;
  overflow: hidden;

  transition: height 0.1s ease-in;

  &:hover {
    height: 70px;
  }
`;
