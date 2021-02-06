import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import Slider from "../components/Slider";
import { GameGrid } from "../components/GameGrid";

import IndexLayout from "../layouts";
import { ContentLoader, LoadingSpinner } from "../components/Loaders";

import { useListQuery } from "../hooks/useListQuery";
import { Game } from "../models";

const IndexPage: React.FC = () => {
  const [featuredGames, setFeaturedGames] = useState<Game[]>([]);

  const { data: gameData, loading: gameLoading } = useListQuery<Game>(Game);

  useEffect(() => {
    if (!gameData.length) {
      return;
    }

    setFeaturedGames(gameData.filter((game) => game.featured));
  }, [gameData]);

  return (
    <IndexLayout title="Home">
      <Card title="Featured Games">
        <ContentLoader loader={<LoadingSpinner />} loading={gameLoading}>
          <Slider
            slides={featuredGames.map((game, index) => ({
              id: game.id,
              title: game.name,
              description: game.description,
              image:
                game.images?.find((image) => image.type === "WIDE")?.url ?? "",
              index,
            }))}
          />
        </ContentLoader>
      </Card>

      <Card title="Popular Games">
        <ContentLoader loader={<LoadingSpinner />} loading={gameLoading}>
          <GameGrid games={featuredGames} />
        </ContentLoader>
      </Card>

      <Card title="Top Rated Games">
        <ContentLoader loader={<LoadingSpinner />} loading={gameLoading}>
          <GameGrid games={featuredGames} />
        </ContentLoader>
      </Card>
    </IndexLayout>
  );
};

export default IndexPage;
