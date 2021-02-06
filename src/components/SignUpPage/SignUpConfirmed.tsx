/* eslint-disable max-lines-per-function */
import React from "react";
import { RouteComponentProps } from "@reach/router";

import ContentHeader from "../ContentHeader";
import Card from "../Card";

const SignUpConfirmed: React.FC<RouteComponentProps<{ email: string }>> = ({
  email,
}) => (
  <>
    <ContentHeader text="Sign up confirmed!" />
    <Card padding={16}>
      An email has been sent to {email ?? ""} with a link to verify your
      account.
    </Card>
  </>
);

export default SignUpConfirmed;
