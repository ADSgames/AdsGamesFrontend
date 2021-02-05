import React from "react";
import { withAuthenticator, AmplifySignIn } from "@aws-amplify/ui-react";

const LoginPage: React.FC = () => <AmplifySignIn />;

export default withAuthenticator(LoginPage);
