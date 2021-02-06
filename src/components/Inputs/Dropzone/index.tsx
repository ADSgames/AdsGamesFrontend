import React from "react";
import Dropzone, { DropzoneProps } from "react-dropzone";

import { DropzoneContainer } from "./Dropzone.style";

const DropZone: React.FC<DropzoneProps> = (props) => (
  <Dropzone {...props}>
    {({ getRootProps, getInputProps, fileRejections }) => (
      <DropzoneContainer {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag Files Here</p>
        {fileRejections.map((file, index) => (
          <p key={index}>
            {file.file.name} - {file.errors.map((error) => error.message)}
          </p>
        ))}
      </DropzoneContainer>
    )}
  </Dropzone>
);

export default DropZone;
