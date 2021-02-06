/* eslint-disable max-lines-per-function */
import React from "react";
import { Auth } from "aws-amplify";
import { Form, Formik, Field, FieldProps, FormikHelpers } from "formik";
import { RouteComponentProps } from "@reach/router";

import IndexLayout from "../../layouts";

import ContentHeader from "../ContentHeader";
import Card from "../Card";
import TextInput from "../Inputs/TextInput";
import Button from "../Inputs/Button";

interface ResetParams {
  username: string;
  password: string;
  code: string;
}

interface ResetError {
  message: string;
  code: string;
}

const ResetPassword: React.FC<RouteComponentProps> = () => {
  const resetPassword = async (
    params: ResetParams,
    helpers: FormikHelpers<ResetParams>
  ) => {
    try {
      await Auth.forgotPasswordSubmit(
        params.username,
        params.code,
        params.password
      );
    } catch (error: unknown) {
      helpers.setErrors({ password: (error as ResetError).message });
    }
  };

  return (
    <IndexLayout title="Reset Password">
      <ContentHeader text="Reset Password" />
      <Card padding={16}>
        <Formik
          initialValues={{ username: "", code: "", password: "" }}
          onSubmit={resetPassword}
        >
          <Form>
            <Field name="username">
              {({ field, meta }: FieldProps<string>) => (
                <TextInput
                  label="Username"
                  placeholder="John Smith"
                  type="email"
                  error={meta.error}
                  {...field}
                />
              )}
            </Field>
            <Field name="code">
              {({ field, meta }: FieldProps<string>) => (
                <TextInput
                  label="Code"
                  placeholder="000000"
                  type="text"
                  error={meta.error}
                  {...field}
                />
              )}
            </Field>
            <Field name="password">
              {({ field, meta }: FieldProps<string>) => (
                <TextInput
                  label="New Password"
                  placeholder="********"
                  type="password"
                  error={meta.error}
                  {...field}
                />
              )}
            </Field>
            <Button type="submit">Reset Password</Button>
          </Form>
        </Formik>
      </Card>
    </IndexLayout>
  );
};

export default ResetPassword;
