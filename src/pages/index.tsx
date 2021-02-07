import React from "react";

import Card from "../components/Card";
import Slider from "../components/Slider";
import { GameGrid } from "../components/GameGrid";

import IndexLayout from "../layouts";
import { ContentLoader, LoadingSpinner } from "../components/Loaders";

import { useListQuery } from "../hooks/useListQuery";
import { Game, GameImage } from "../models";

const IndexPage: React.FC = () => {
  const { data: gameData, loading: gameLoading } = useListQuery<Game>(Game);
  const { data: images } = useListQuery<GameImage>(GameImage);

  return (
    <IndexLayout title="Home">
      <Card title="Featured Games">
        <ContentLoader loader={<LoadingSpinner />} loading={gameLoading}>
          <Slider
            slides={gameData
              .filter((game) => game.featured)
              .map((game, index) => ({
                id: game.id,
                title: game.name,
                description: game.description,
                image:
                  images.find(
                    (image) => image.gameID === game.id && image.type === "WIDE"
                  )?.url ?? "",
                index,
              }))}
          />
        </ContentLoader>
      </Card>

      <Card title="Popular Games">
        <ContentLoader loader={<LoadingSpinner />} loading={gameLoading}>
          <GameGrid games={gameData} />
        </ContentLoader>
      </Card>

      <Card title="Top Rated Games">
        <ContentLoader loader={<LoadingSpinner />} loading={gameLoading}>
          <GameGrid games={gameData} />
        </ContentLoader>
      </Card>
    </IndexLayout>
  );
};

export default IndexPage;
