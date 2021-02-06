/* eslint-disable max-lines-per-function */
import React from "react";
import { RouteComponentProps } from "@reach/router";

import ContentHeader from "../ContentHeader";
import Card from "../Card";
import IndexLayout from "../../layouts";

const SignUpConfirmed: React.FC<RouteComponentProps<{ email: string }>> = ({
  email,
}) => (
  <IndexLayout title="Sign up confirmed">
    <ContentHeader text="Sign up confirmed!" />
    <Card padding={16}>
      An email has been sent to {email ?? ""} with a link to verify your
      account.
    </Card>
  </IndexLayout>
);

export default SignUpConfirmed;
