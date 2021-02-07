import React from "react";
import { Auth } from "aws-amplify";
import { RouteComponentProps } from "@reach/router";
import { navigate } from "gatsby";

import IndexLayout from "../../layouts";

import ContentHeader from "../ContentHeader";
import Card from "../Card";

import * as ROUTES from "../../constants/routes";

const MembersPage: React.FC<RouteComponentProps> = () => {
  React.useEffect(() => {
    const checkLogged = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const session = await Auth.currentAuthenticatedUser();

        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (session) {
          void navigate(ROUTES.DASHBOARD);
        } else {
          void navigate(ROUTES.LOG_IN);
        }
      } catch {
        void navigate(ROUTES.LOG_IN);
      }
    };

    void checkLogged();
  }, []);

  return (
    <IndexLayout title="Members">
      <ContentHeader text="Members" />
      <Card padding={16}>...</Card>
    </IndexLayout>
  );
};

export default MembersPage;
