import * as React from "react";
import { Router } from "@reach/router";

import * as ROUTES from "../constants/routes";

import SignUpConfirmed from "../components/Login/SignUpConfirmed";
import SignUpForm from "../components/Login/SignUpForm";
import LoginPage from "../components/Login/Login";
import DashboardPage from "../components/Dashboard";
import MembersPage from "../components/Login/Members";
import ForgotPassword from "../components/Login/ForgotPassword";
import ResetPassword from "../components/Login/ResetPassword";
import AddGamePage from "../components/Dashboard/Games/AddGame";
import EditGamePage from "../components/Dashboard/Games/EditGame";

const MembersRouter: React.FC = () => (
  <Router>
    <SignUpForm path={ROUTES.SIGN_UP} />
    <SignUpConfirmed path={`${ROUTES.SIGN_UP_CONFIRM}:email`} />
    <LoginPage path={ROUTES.LOG_IN} />
    <DashboardPage path={ROUTES.DASHBOARD} />
    <MembersPage path={ROUTES.MEMBERS} />
    <ForgotPassword path={ROUTES.FORGOT_PASSWORD} />
    <ResetPassword path={ROUTES.RESET_PASSWORD} />
    <AddGamePage path={ROUTES.ADD_GAME} />
    <EditGamePage path={ROUTES.EDIT_GAME} />
  </Router>
);

export default MembersRouter;
