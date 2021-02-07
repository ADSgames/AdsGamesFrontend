import styled from "styled-components";

export const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: 400;
  color: ${(props): string => props.theme.colors.text.primary};
`;
