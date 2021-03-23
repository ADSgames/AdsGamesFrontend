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
import * as Yup from "yup";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@material-ui/core";

import { DropZone } from "../../Inputs";
import { GameImageType } from "../../../models";
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
  source: Yup.string().url().required(),
});

export type GameParams = Yup.InferType<typeof GameSchema>;

export const GameForm: React.FC<
  RouteComponentProps & {
    initialValues?: GameParams;
    onSubmit: (values: GameParams, helpers: FormikHelpers<GameParams>) => void;
  }
> = ({
  initialValues = {
    slug: "",
    name: "",
    visible: false,
    featured: false,
    description: "",
    source: "",
    images: [],
  },
  onSubmit,
}) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={GameSchema}
    validateOnChange={false}
  >
    {({ values }) => (
      <Form>
        <Typography variant="h5">Basic Information</Typography>
        <Field name="name">
          {({ field, meta }: FieldProps<string>) => (
            <TextField
              fullWidth
              label="Name"
              error={Boolean(meta.error) && meta.touched}
              helperText={meta.error}
              {...field}
            />
          )}
        </Field>
        <Field name="slug">
          {({ field, meta }: FieldProps<string>) => (
            <TextField
              fullWidth
              label="Slug"
              error={Boolean(meta.error) && meta.touched}
              helperText={meta.error}
              {...field}
            />
          )}
        </Field>
        <Field name="description">
          {({ field, meta }: FieldProps<string>) => (
            <TextField
              fullWidth
              label="Description"
              error={Boolean(meta.error) && meta.touched}
              helperText={meta.error}
              {...field}
            />
          )}
        </Field>
        <Field name="source">
          {({ field, meta }: FieldProps<string>) => (
            <TextField
              fullWidth
              label="Source"
              error={Boolean(meta.error) && meta.touched}
              helperText={meta.error}
              {...field}
            />
          )}
        </Field>
        <Field name="visible">
          {({ field }: FieldProps<string>) => (
            <FormControlLabel
              control={<Checkbox {...field} />}
              label="Visible"
            />
          )}
        </Field>
        <Field name="featured">
          {({ field }: FieldProps<string>) => (
            <FormControlLabel
              control={<Checkbox {...field} />}
              label="Featured"
            />
          )}
        </Field>

        <Typography variant="h5">Images</Typography>
        <FieldArray name="images">
          {(arrayHelpers: ArrayHelpers) => (
            <>
              <DropZone
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

        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </Form>
    )}
  </Formik>
);
