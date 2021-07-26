import React from "react";

import Card from "../Card";
import { BannerBig } from "./GameBanner.style";
import { GameImage } from "../../models";
import { useListQuery } from "../../hooks/useListQuery";

const GameBanner: React.FC<{ gameID: string }> = ({ gameID }) => {
  const { data: images } = useListQuery<GameImage>(GameImage, (c) =>
    c.gameID("eq", gameID)
  );

  const largeImage = images.find((image) => image.type === "LARGE");

  if (!largeImage) {
    return null;
  }

  return (
    <Card>
      <BannerBig imgKey={largeImage.url} />
    </Card>
  );
};

export default GameBanner;
