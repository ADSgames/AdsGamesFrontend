import styled from "styled-components";

export const StyledContentHeader = styled.h1<{ sticky: boolean }>`
  background-color: #f77d11;
  clear: both;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.8);
  font-size: 36px;
  padding: 20px 20px 20px 20px;
  color: #fff;
  margin: 0;
  text-align: center;
  text-shadow: 0 2px rgba(0, 0, 0, 0.4);
  ${(props: { sticky: boolean }): string =>
    props.sticky ? "top: 50px;z-index: 10;position:sticky;" : ""}
`;
