import styled from "styled-components";

export const StyledFrame = styled.iframe<{ visible: boolean }>`
  border: 0;
`;

export const GameLoaderText = styled.p`
  color: #fff;
  padding-top: 10px;
`;

export const GameLoader = styled.div`
  height: 100%;
  width: 100%;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
`;

export const FullScreenButton = styled.div`
  width: 100%;
  background-color: #000;
  padding: 10px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
