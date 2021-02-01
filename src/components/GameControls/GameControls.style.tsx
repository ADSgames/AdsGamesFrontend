import styled from "styled-components";

export const ControlItem = styled.div`
  padding: 0;
  float: left;
  margin: 5px;
  border-radius: 5px;
  background-color: #ddd;
  display: block;
  height: 50px;
`;

export const ControlImage = styled.img`
  border: 0 solid #000000;
  height: 40px;
  float: left;
  display: inline-block;
  margin: 5px 5px;
`;

export const ControlText = styled.p`
  text-align: left;
  padding: 0;
  display: inline-block;
  line-height: 40px;
  margin: 5px 5px;
  font-size: calc(15px + 0.5vw);
`;
