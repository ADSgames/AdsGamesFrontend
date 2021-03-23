import React from "react";
import { Grid } from "@material-ui/core";

import GameCard from "./GameCard";
import { Game } from "../../models";

const GameGrid: React.FC<{
  games: Game[];
}> = ({ games }) => (
  <Grid container spacing={0}>
    {games.map((game) => (
      <Grid item key={game.id} xs={6} sm={4} md={4} lg={3}>
        <GameCard key={game.id} title={game.name} id={game.id} />
      </Grid>
    ))}
  </Grid>
);

export default GameGrid;
