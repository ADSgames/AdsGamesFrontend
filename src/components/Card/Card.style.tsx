import styled from "styled-components";

export const StyledCard = styled.div<{ padding?: number }>`
  background-color: #e4e4e4;
  display: flex;
  overflow: hidden;
  border-bottom: 3px solid #bbb;
  border-radius: 5px;
  width: 95%;
  position: relative;
  margin: 15px auto;
  padding: ${(props): number => props.padding ?? 0}px;
`;

export const CardTitle = styled.h3`
  color: #fff;
  position: absolute;
  top: 50%;
  left: 30px;
  margin: 0;
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
`;

export const CardTitleContainer = styled.div`
  background-color: #e43f00 !important;
  width: 50px;
  order: 0;
  padding: 2px;
  width: 60px;
  min-height: 120px;
`;

export const CardContent = styled.div`
  flex: 6;
  order: 1;
  box-sizing: border-box;
`;
