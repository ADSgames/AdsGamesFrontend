import * as React from "react";
import { Router } from "@reach/router";

import * as ROUTES from "../constants/routes";

import GamesPage from "../components/GameList/GameList";
import GamePage from "../components/GamePage/GamePage";

const GameRouter: React.FC = () => (
  <Router>
    <GamePage path={`${ROUTES.GAMES}:id`} />
    <GamesPage path={ROUTES.GAMES} />
  </Router>
);

export default GameRouter;
