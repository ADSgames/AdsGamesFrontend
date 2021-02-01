import React from "react";
import { Link } from "gatsby";

import { StyledGameCard, Image, Overlay, OverlayText } from "./GameCard.style";
import defaultImage from "../../images/game.png";

import * as ROUTES from "../../constants/routes";

import type { GameImage } from "../../models";

export interface GameCardProps {
  title: string;
  images: GameImage[];
  id: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, images, id }) => {
  const image = images.find((i) => i.type === "thumbnail");
  return (
    <StyledGameCard>
      <Link to={`${ROUTES.GAMES}${id}`}>
        <Image
          width="300"
          height="225"
          src={image?.url ?? defaultImage}
          alt={title}
        />
        <Overlay>
          <OverlayText>{title}</OverlayText>
        </Overlay>
      </Link>
    </StyledGameCard>
  );
};

export default GameCard;
