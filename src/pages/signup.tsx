/* eslint-disable max-lines-per-function */
import React from "react";
import { Auth } from "aws-amplify";
import { Form, Formik, Field, FieldProps, FormikHelpers } from "formik";

import IndexLayout from "../layouts";

import { SEO } from "../components/SEO";
import Page from "../components/Page";
import Container from "../components/Container";
import ContentHeader from "../components/ContentHeader";
import Card from "../components/Card";
import TextInput from "../components/Inputs/TextInput";
import Button from "../components/Inputs/Button";

interface LoginParams {
  username: string;
  password: string;
}

const SignUpPage: React.FC = () => {
  const signUp = async (
    params: LoginParams,
    helpers: FormikHelpers<LoginParams>
  ) => {
    try {
      await Auth.signUp({ ...params, attributes: { email: params.username } });
    } catch (error) {
      helpers.setErrors({ password: (error as Error).message });
    }
  };

  return (
    <IndexLayout>
      <SEO title="Sign Up" />
      <Page>
        <Container>
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
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default SignUpPage;
