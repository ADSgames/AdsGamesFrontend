import { transparentize } from "polished";
import { Link } from "gatsby";
import styled from "styled-components";
import type { DefaultTheme } from "styled-components";

import Container from "../Container";

import logoShadow from "../../images/logo-shadow.svg";

export const StyledHeader = styled.header<{ theme: DefaultTheme }>`
  height: ${(props): number => props.theme.heights.header}px;
  padding: 0 ${(props): number => props.theme.dimensions.containerPadding}rem;
  background-color: ${(props): string => props.theme.colors.brand};
  color: ${transparentize(0.5, "#FFFFFF")};
`;

export const Logo = styled.div`
  background: url(${logoShadow});
  background-size: 100% 100%;
  height: 80px;
  width: 380px;
  image-rendering: optimizeSpeed;
`;

export const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

export const HomepageLink = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;
