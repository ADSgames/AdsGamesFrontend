import styled from "styled-components";

export const BannerBig = styled.div<{ image: string }>`
  width: 100%;
  height: 400px;
  background: url(${(props): string => props.image});
  background-size: cover;
  background-repeat: none;
`;
