import React from "react";
import { Auth } from "aws-amplify";
import { Form, Formik, Field, FieldProps, FormikHelpers } from "formik";
import { RouteComponentProps } from "@reach/router";
import { navigate } from "gatsby";

import IndexLayout from "../../layouts";

import ContentHeader from "../ContentHeader";
import Card from "../Card";
import { TextInput, Button } from "../Inputs";

import * as ROUTES from "../../constants/routes";

interface ForgotParams {
  username: string;
}

interface ForgotError {
  message: string;
  code: string;
}

const ForgotPassword: React.FC<RouteComponentProps> = () => {
  const forgotPassword = async (
    params: ForgotParams,
    helpers: FormikHelpers<ForgotParams>
  ) => {
    try {
      await Auth.forgotPassword(params.username);
      void navigate(ROUTES.RESET_PASSWORD);
    } catch (error: unknown) {
      helpers.setErrors({ username: (error as ForgotError).message });
    }
  };

  return (
    <IndexLayout title="Forgot Password">
      <ContentHeader text="Forgot Password" />
      <Card padding={16}>
        <Formik initialValues={{ username: "" }} onSubmit={forgotPassword}>
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
            <Button type="submit">Send Email</Button>
          </Form>
        </Formik>
      </Card>
    </IndexLayout>
  );
};

export default ForgotPassword;
