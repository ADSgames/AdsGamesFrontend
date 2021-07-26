import React from "react";
import { Link } from "gatsby";

import { StyledGameCard, Image, Overlay, OverlayText } from "./GameCard.style";
import defaultImage from "../../images/game.png";

import * as ROUTES from "../../constants/routes";
import { GameImage } from "../../models";
import { useListQuery } from "../../hooks/useListQuery";

export interface GameCardProps {
  title: string;
  images?: GameImage[];
  id: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, id }) => {
  const { data: images } = useListQuery<GameImage>(GameImage, (c) =>
    c.gameID("eq", id)
  );

  const image = images.find((i) => i.type === "THUMBNAIL");

  return (
    <StyledGameCard>
      <Link to={`${ROUTES.GAMES}${id}`}>
        <Image imgKey={image?.url ?? defaultImage} />
        <Overlay>
          <OverlayText>{title}</OverlayText>
        </Overlay>
      </Link>
    </StyledGameCard>
  );
};

export default GameCard;
