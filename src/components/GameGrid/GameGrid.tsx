import React from "react";

import { StyledGameGrid } from "./GameGrid.style";
import GameCard from "./GameCard";
import { Game } from "../../models";

const GameGrid: React.FC<{
  games: Game[];
}> = ({ games }) => (
  <StyledGameGrid>
    {games.map((game) => (
      <GameCard
        key={game.id}
        title={game.name}
        images={game.images}
        id={game.id}
      />
    ))}
  </StyledGameGrid>
);

export default GameGrid;
