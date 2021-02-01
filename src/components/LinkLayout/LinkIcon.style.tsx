import styled from "styled-components";

export const LinkIconContainer = styled.div<{
  width?: number;
  color?: string;
}>`
  height: 100%;
  max-width: ${(props): string =>
    typeof props.width === "number" ? `{props.width}px` : "auto"};
  min-width: ${(props): string =>
    typeof props.width === "number" ? `{props.width}px` : "auto"};
  background-color: ${(props): string | undefined => props.color};
`;

export const StyledLinkIcon = styled.img`
  width: 100%;
`;
