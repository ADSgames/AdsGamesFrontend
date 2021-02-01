import styled from "styled-components";

export const Button = styled.div<{ position: "left" | "right" }>`
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.83);
  position: absolute;
  z-index: 5;
  top: calc(50% - 25px);
  ${({ position }): string => (position === "left" ? "left: 0;" : "right: 0;")};

  &:after {
    display: flex;
    color: #fff;
    font-size: 24px;
    justify-content: center;
    align-items: center;
    ${({ position }): string =>
      position === "left" ? "content: '<';" : "content: '>';"};
  }
`;
