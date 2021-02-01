import * as React from "react";
import { Router } from "@reach/router";

import * as ROUTES from "../constants/routes";

import GamesPage from "../components/GameList/GameList";
import PlayerPage from "../components/Player/Player";

const GameRouter: React.FC = () => (
  <Router>
    <PlayerPage path={`${ROUTES.GAMES}:id`} />
    <GamesPage path={ROUTES.GAMES} />
  </Router>
);

export default GameRouter;
