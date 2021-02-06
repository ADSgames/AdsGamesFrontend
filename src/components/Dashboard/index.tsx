import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Auth } from "aws-amplify";
import { navigate } from "gatsby";

import IndexLayout from "../../layouts";

import ContentHeader from "../ContentHeader";
import Card from "../Card";
import Button from "../Inputs/Button";

import * as ROUTES from "../../constants/routes";

const DashboardPage: React.FC<RouteComponentProps> = () => {
  const logout = async () => {
    await Auth.signOut();
    void navigate(ROUTES.MEMBERS);
  };

  const gotoAddGame = () => {
    void navigate(ROUTES.ADD_GAME);
  };

  return (
    <IndexLayout title="Dashboard">
      <ContentHeader text="Dashboard" />
      <Card padding={16}>
        Welcome!
        <Button onClick={logout}>Logout</Button>
        <Button onClick={gotoAddGame}>Add Game</Button>
      </Card>
    </IndexLayout>
  );
};

export default DashboardPage;
