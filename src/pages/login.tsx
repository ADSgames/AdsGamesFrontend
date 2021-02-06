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

interface LoginError {
  message: string;
  code: string;
}

const LoginPage: React.FC = () => {
  const [canResend, setCanResend] = React.useState(false);
  const [resendEmail, setResendEmail] = React.useState("");
  const [resendSent, setResendSent] = React.useState(false);

  const signIn = async (
    params: LoginParams,
    helpers: FormikHelpers<LoginParams>
  ) => {
    try {
      await Auth.signIn(params.username, params.password);
    } catch (error: unknown) {
      setResendSent(false);
      helpers.setErrors({ password: (error as LoginError).message });

      if ((error as LoginError).code === "UserNotConfirmedException") {
        setCanResend(true);
        setResendEmail(params.username);
      }
    }
  };

  const resendLink = async () => {
    setCanResend(false);
    await Auth.resendSignUp(resendEmail);
    setResendSent(true);
  };

  return (
    <IndexLayout>
      <SEO title="Sign In" />
      <Page>
        <Container>
          <ContentHeader text="Sign In" />
          <Card padding={16}>
            <Formik
              initialValues={{ username: "", password: "" }}
              onSubmit={signIn}
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
                <Button type="submit">Login</Button>
              </Form>
            </Formik>
            {canResend && (
              <Button type="button" onClick={resendLink}>
                Resend Link
              </Button>
            )}
            {resendSent && <p>Link resent to email {resendEmail} </p>}
          </Card>
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default LoginPage;
