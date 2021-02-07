import styled from "styled-components";

export const DropzoneContainer = styled.section`
  width: 100%;
  min-height: 40px;
  border: 1px dashed #aaa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  border-radius: 5px;

  &:hover {
    border: 1px dashed #444;
  }

  & p {
    margin: 0;
  }
`;
