import React from "react";
import type { GameImage } from "../../models";

import Card from "../Card";
import { BannerBig } from "./GameBanner.style";

const GameBanner: React.FC<{ images?: GameImage[] }> = ({ images = [] }) => {
  const largeImage = images.find((image) => image.type === "large");

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
