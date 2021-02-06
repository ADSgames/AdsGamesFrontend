import * as React from "react";
import { Router } from "@reach/router";

import * as ROUTES from "../constants/routes";

import SignUpConfirmed from "../components/SignUpPage/SignUpConfirmed";
import SignUpForm from "../components/SignUpPage/SignUpForm";
import IndexLayout from "../layouts";
import { SEO } from "../components/SEO";
import Page from "../components/Page";
import Container from "../components/Container";

const SignUpRouter: React.FC = () => (
  <IndexLayout>
    <SEO title="Sign Up" />
    <Page>
      <Container>
        <Router>
          <SignUpForm path={ROUTES.SIGN_UP} />
          <SignUpConfirmed path={`${ROUTES.SIGN_UP_CONFIRM}:email`} />
        </Router>
      </Container>
    </Page>
  </IndexLayout>
);

export default SignUpRouter;
