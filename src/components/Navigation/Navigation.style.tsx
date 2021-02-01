import styled from "styled-components";
import type { DefaultTheme } from "styled-components";
import { Link } from "gatsby";

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
  z-index: 1000;

  transition: height 0.1s ease-in;

  &:hover {
    height: 70px;
  }
`;

export const LogoContainer = styled(Link)<{
  image: string;
  hoverImage: string;
}>`
  align-self: center;
  height: 40px;
  width: 40px;
  background: url(${(props): string => props.image});
  background-size: cover;

  &:hover {
    background: url(${(props): string => props.hoverImage});
    background-size: cover;
  }
`;
