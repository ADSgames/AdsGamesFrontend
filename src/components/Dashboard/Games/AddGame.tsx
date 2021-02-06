/* eslint-disable max-lines-per-function */
import React from "react";
import {
  Form,
  Formik,
  Field,
  FieldProps,
  FormikHelpers,
  FieldArray,
  ArrayHelpers,
} from "formik";
import { RouteComponentProps } from "@reach/router";
import { Auth, DataStore, Storage } from "aws-amplify";
import * as Yup from "yup";
import { v1 } from "uuid";

import IndexLayout from "../../../layouts";

import ContentHeader from "../../ContentHeader";
import Card from "../../Card";
import TextInput from "../../Inputs/TextInput";
import Button from "../../Inputs/Button";
import CheckBox from "../../Inputs/Checkbox";
import { Game, GameImage, GameImageType } from "../../../models";
import Dropzone from "../../Inputs/Dropzone";
import ImageForm from "./ImageForm";

const GameSchema = Yup.object({
  slug: Yup.string()
    .min(4)
    .max(30)
    .matches(/^[a-z-]*$/u, "Must be only lowercase with dashes")
    .required(),
  name: Yup.string().min(4).max(30).required(),
  visible: Yup.boolean().required(),
  featured: Yup.boolean().required(),
  description: Yup.string().min(10).max(1000).required(),
  images: Yup.array().of(
    Yup.object({
      type: Yup.mixed<GameImageType>()
        .oneOf(Object.values(GameImageType))
        .required(),
      file: Yup.mixed<File>().required(),
    }).required()
  ),
});

type AddGameParams = Yup.InferType<typeof GameSchema>;

export interface ImageParams {
  type: GameImageType;
  file: File;
}

const AddGamePage: React.FC<RouteComponentProps> = () => {
  const uploadFile = async (image: ImageParams, gameID: string) => {
    try {
      const id = `images/${v1()}`;

      await Storage.put(id, image.file, { contentType: image.file.type });

      return await DataStore.save(
        new GameImage({
          gameID,
          type: image.type,
          url: id,
        })
      );
    } catch (error) {
      return null;
    }
  };

  const addGame = async (
    params: AddGameParams,
    helpers: FormikHelpers<AddGameParams>
  ) => {
    try {
      // Create game
      const game = await DataStore.save(
        new Game({
          name: params.name,
          description: params.description,
          featured: params.featured,
          slug: params.slug,
          visible: params.visible,
        })
      );

      // Upload images
      if (params.images) {
        await Promise.all(
          params.images.map(async (image) => uploadFile(image, game.id))
        );
      }
    } catch (error) {
      helpers.setErrors({ featured: (error as Error).message });
    }
  };

  const initialValues: AddGameParams = {
    slug: "",
    name: "",
    visible: false,
    featured: false,
    description: "",
    images: [],
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  void Auth.currentAuthenticatedUser().then((creds) => console.log(creds));

  return (
    <IndexLayout title="Add Game">
      <ContentHeader text="Add Game" />
      <Card padding={16}>
        <Formik
          initialValues={initialValues}
          onSubmit={addGame}
          validationSchema={GameSchema}
          validateOnChange={false}
        >
          {({ values }) => (
            <Form>
              <h3>Basic Information</h3>
              <hr />
              <Field name="name">
                {({ field, meta }: FieldProps<string>) => (
                  <TextInput label="Name" error={meta.error} {...field} />
                )}
              </Field>
              <Field name="slug">
                {({ field, meta }: FieldProps<string>) => (
                  <TextInput label="Slug" error={meta.error} {...field} />
                )}
              </Field>
              <Field name="description">
                {({ field, meta }: FieldProps<string>) => (
                  <TextInput
                    label="Description"
                    error={meta.error}
                    {...field}
                  />
                )}
              </Field>
              <Field name="visible">
                {({ field, meta }: FieldProps<string>) => (
                  <CheckBox label="Visible" error={meta.error} {...field} />
                )}
              </Field>
              <Field name="featured">
                {({ field, meta }: FieldProps<string>) => (
                  <CheckBox label="Featured" error={meta.error} {...field} />
                )}
              </Field>

              <h3>Images</h3>
              <hr />

              <FieldArray name="images">
                {(arrayHelpers: ArrayHelpers) => (
                  <>
                    <Dropzone
                      accept={["image/jpeg", "image/png"]}
                      maxSize={1000000}
                      onDrop={(files) =>
                        files.forEach((file) =>
                          arrayHelpers.push({
                            type: "",
                            file,
                          })
                        )
                      }
                    />
                    {values.images?.map((image, index) => (
                      <ImageForm
                        key={index}
                        image={image}
                        index={index}
                        onRemove={(i) => arrayHelpers.remove(i)}
                      />
                    ))}
                  </>
                )}
              </FieldArray>

              <Button type="submit">Add Game</Button>
            </Form>
          )}
        </Formik>
      </Card>
    </IndexLayout>
  );
};

export default AddGamePage;
