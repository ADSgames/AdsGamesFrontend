import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  transition: opacity 0.25s cubic-bezier(0, 0, 0.07, 0.63);
`;

export const OverlayText = styled.p`
  color: #ffffff;
  text-align: center;
  vertical-align: text-top;
  font-size: 24px;
  margin: 0;
  padding: 5px;
  text-shadow: 0 2px rgba(0, 0, 0, 0.4);
`;

export const StyledGameCard = styled.div`
  position: relative;

  &:hover {
    box-shadow: 0 0 2px 3px rgba(0, 0, 0, 0.2);
    z-index: 1;

    ${Overlay} {
      opacity: 1;
    }
  }
`;
