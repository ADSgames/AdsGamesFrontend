/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from "react";

import Page from "../components/Page";
import Container from "../components/Container";
import Card from "../components/Card";
import Slider from "../components/Slider";
import { GameGrid } from "../components/GameGrid";

import IndexLayout from "../layouts";
import { SEO } from "../components/SEO";
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
    <IndexLayout>
      <SEO title="Home" />
      <Page>
        <Container>
          <Card title="Featured Games">
            <ContentLoader loader={<LoadingSpinner />} loading={gameLoading}>
              <Slider
                slides={featuredGames.map((game, index) => ({
                  id: game.id,
                  title: game.name,
                  description: game.description,
                  image:
                    game.images?.find((image) => image.type === "WIDE")?.url ??
                    "",
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
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default IndexPage;
