import React from "react";

import Card from "../Card";
import { BannerBig } from "./GameBanner.style";
import { GameImage } from "../../models";

const GameBanner: React.FC<{ images?: GameImage[] }> = ({ images = [] }) => {
  const largeImage = images.find((image) => image.type === "LARGE");

  if (!largeImage) {
    return null;
  }

  return (
    <Card>
      <BannerBig image={largeImage.url} />
    </Card>
  );
};

export default GameBanner;
