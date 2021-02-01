import { Link } from "gatsby";
import styled from "styled-components";

export const SlideContainer = styled(Link)`
  width: 100%;
  background-color: #000;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  color: #fff;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ToolTip = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.83);
`;

export const ToolTipHead = styled.div`
  font-size: 20px;
  color: #fff;
  padding: 10px;
  margin: 0;
  text-align: center;
`;

export const ToolTipBody = styled.div`
  color: #ffffff;
  font-weight: normal;
  min-height: 80px;
  text-align: center;
  padding: 10px;
`;
