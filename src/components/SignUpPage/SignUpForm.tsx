/* eslint-disable max-lines-per-function */
import React from "react";
import { Auth } from "aws-amplify";
import { Form, Formik, Field, FieldProps, FormikHelpers } from "formik";
import { RouteComponentProps } from "@reach/router";
import { navigate } from "gatsby";

import ContentHeader from "../ContentHeader";
import Card from "../Card";
import TextInput from "../Inputs/TextInput";
import Button from "../Inputs/Button";

import * as ROUTES from "../../constants/routes";

interface LoginParams {
  username: string;
  password: string;
}

const SignUpForm: React.FC<RouteComponentProps> = () => {
  const signUp = async (
    params: LoginParams,
    helpers: FormikHelpers<LoginParams>
  ) => {
    try {
      const resp = await Auth.signUp({
        ...params,
        attributes: { email: params.username },
      });

      void navigate(
        `${ROUTES.SIGN_UP_CONFIRM}${resp.codeDeliveryDetails.Destination}`
      );
    } catch (error) {
      helpers.setErrors({ password: (error as Error).message });
    }
  };

  return (
    <>
      <ContentHeader text="Create Account" />
      <Card padding={16}>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={signUp}
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
            <Field name="password">
              {({ field, meta }: FieldProps<string>) => (
                <TextInput
                  label="Password"
                  placeholder="**********"
                  type="password"
                  error={meta.error}
                  {...field}
                />
              )}
            </Field>
            <Button type="submit">Sign Up</Button>
          </Form>
        </Formik>
      </Card>
    </>
  );
};

export default SignUpForm;
