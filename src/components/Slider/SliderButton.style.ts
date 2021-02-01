import styled from "styled-components";

export const Button = styled.div<{ position: "left" | "right" }>`
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  position: absolute;
  ${(props): string => (props.position === "left" ? "left: 0;" : "right: 0;")};
`;
