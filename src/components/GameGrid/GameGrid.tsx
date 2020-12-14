import React from "react";

import { StyledGameGrid } from "./GameGrid.style";
import GameCard from "./GameCard";

import gameImage from "../../images/game.png";

import type { Game } from "../../models";

const GameGrid: React.FC<{
  games: Game[];
}> = ({ games }) => (
  <StyledGameGrid>
    {games.map((game) => (
      <GameCard
        key={game.id}
        title={game.name}
        image={gameImage}
        id={game.id}
      />
    ))}
  </StyledGameGrid>
);

export default GameGrid;
