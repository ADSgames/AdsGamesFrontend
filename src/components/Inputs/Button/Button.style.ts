import { darken } from "polished";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledButton = styled.button<{ fullWidth: boolean }>`
  color: #34495e;
  text-decoration: none;
  display: flex;
  align-items: center;
  min-height: 30px;
  min-width: ${({ fullWidth }): string => (fullWidth ? "100%" : "30px")};
  background-color: ${(props): string => props.theme.colors.ui.input};
  font-weight: 600;
  font-size: ${(props): number => props.theme.dimensions.fontSize.regular}px;
  margin: 10px 0;
  padding: 5px;
  border-radius: ${(props): number => props.theme.dimensions.radius.input}px;
  border-left: 0;
  border-right: 0;
  border-bottom: 3px solid
    ${(props): string => darken(0.1, props.theme.colors.ui.input)};
  border-top: 0px solid transparent;
  box-shadow: 0 1px 1px 0 ${(props): string => props.theme.colors.boxShadow};
  transition: all 0.1s ease-in;

  &:hover {
    border-bottom: 2px solid
      ${(props): string => darken(0.1, props.theme.colors.ui.input)};
    border-top: 1px solid transparent;
    box-shadow: 0 0.5px 1px 0 ${(props): string => props.theme.colors.boxShadow};
  }

  &:active {
    border-bottom: 0px solid transparent;
    border-top: 3px solid
      ${(props): string => darken(0.4, props.theme.colors.ui.input)};
    box-shadow: inset 0 1px 8px -1px ${(props): string => props.theme.colors.boxShadow};
  }
`;

export const ButtonText = styled.p`
  text-align: center;
  vertical-align: text-top;
  font-size: 20px;
  margin: 0;
  padding: 3px;
  text-decoration: none;
  font-weight: 700;
  width: 100%;
`;

export const ButtonIcon = styled(FontAwesomeIcon)`
  padding-right: 6px;
  padding-left: 6px;
  font-size: 20px;
  box-sizing: border-box;
  min-width: 34px;
`;
