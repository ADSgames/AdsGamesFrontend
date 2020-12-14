import React from "react";
import { Link } from "gatsby";

import {
  StyledGameCard,
  GameImage,
  Overlay,
  OverlayText,
} from "./GameCard.style";

import * as ROUTES from "../../constants/routes";

export interface GameCardProps {
  title: string;
  image: string;
  id: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, image, id }) => (
  <StyledGameCard>
    <Link to={`${ROUTES.GAMES}${id}`}>
      <GameImage width="300" height="225" src={image} alt={title} />
      <Overlay>
        <OverlayText>{title}</OverlayText>
      </Overlay>
    </Link>
  </StyledGameCard>
);

export default GameCard;
