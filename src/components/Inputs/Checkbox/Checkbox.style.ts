import styled from "styled-components";

export const StyledInput = styled.input`
  -webkit-appearance: none;
  background-color: #fafafa;
  border: 1px solid #cacece;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 9px;
  border-radius: 10px;
  display: block;
  position: relative;
  width: 40px;
  height: 20px;
  transition: all 0.3s;
  font-weight: 800;
  font-size: 16px;

  &:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px 1px 3px rgba(0, 0, 0, 0.1);
  }

  &:checked:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px 1px 3px rgba(0, 0, 0, 0.1);
  }

  &:checked {
    background-color: #e9ecee;
    border: 1px solid #adb8c0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
      inset 15px 10px -12px rgba(255, 255, 255, 0.1);
  }

  &:after {
    content: "0";
    position: absolute;
    top: 0px;
    left: 5px;
    color: #ff3333;
  }

  &:checked:after {
    content: "1";
    position: absolute;
    top: 0px;
    left: 22px;
    color: #33ff33;
  }
`;
