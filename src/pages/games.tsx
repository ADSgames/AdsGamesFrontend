import * as React from "react";
import { Router } from "@reach/router";

import * as ROUTES from "../constants/routes";

import GamesPage from "../views/games/games";
import PlayerPage from "../views/games/player";

const GameRouter: React.FC = () => (
  <Router>
    <PlayerPage path={`${ROUTES.GAMES}:id`} />
    <GamesPage path={ROUTES.GAMES} />
  </Router>
);

export default GameRouter;
