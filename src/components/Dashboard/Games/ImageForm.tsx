import { Field, FieldProps } from "formik";
import React from "react";

import { TextInput, Button } from "../../Inputs";
import { ImageParams } from "./AddGame";
import { FieldContainer, FormContainer, ImageThumb } from "./ImageForm.style";

const ImageForm: React.FC<{
  image: ImageParams;
  index: number;
  onRemove: (index: number) => void;
}> = ({ index, image, onRemove }) => {
  const name = `images[${index}]`;

  return (
    <FormContainer>
      <ImageThumb src={URL.createObjectURL(image.file)} alt={image.file.name} />
      <FieldContainer>
        <p>
          {image.file.name} ({image.file.size / 1000} KB)
        </p>
        <Field name={`${name}.type`}>
          {({ field, meta }: FieldProps<string>) => (
            <TextInput label="Image Type" error={meta.error} {...field} />
          )}
        </Field>
        <Button onClick={() => onRemove(index)}>Remove</Button>
      </FieldContainer>
    </FormContainer>
  );
};

export default ImageForm;
