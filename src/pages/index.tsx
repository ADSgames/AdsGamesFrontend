/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import Page from "../components/Page";
import Container from "../components/Container";
import Card from "../components/Card";
import Slider from "../components/Slider";
import { GameGrid } from "../components/GameGrid";

import IndexLayout from "../layouts";
import { SEO } from "../components/SEO";
import { GET_GAMES, GET_FAVORITES } from "../queries/games";
import type { Game, FeaturedGame } from "../models";
import { ContentLoader, LoadingSpinner } from "../components/Loaders";

const mapFeaturedGames = (
  featuredGames: FeaturedGame[],
  games: Game[]
): Game[] =>
  featuredGames
    .map(({ place, gameId }) => ({
      place,
      game: games.find((game) => game.id === gameId),
    }))
    .sort((gameA, gameB) => gameA.place - gameB.place)
    .flatMap(({ game }) => (game ? [game] : []));

const IndexPage: React.FC = () => {
  const [featuredGames, setFeaturedGames] = useState<Game[]>([]);

  const { data: gameData, loading: gameLoading } = useQuery<{ games: Game[] }>(
    GET_GAMES
  );
  const { data: featuredData, loading: featuredLoading } = useQuery<{
    featuredGames: FeaturedGame[];
  }>(GET_FAVORITES);

  useEffect(() => {
    if (!featuredData?.featuredGames || !gameData?.games) {
      return;
    }

    setFeaturedGames(
      mapFeaturedGames(featuredData.featuredGames, gameData.games)
    );
  }, [featuredData, gameData]);

  return (
    <IndexLayout>
      <SEO title="Home" />
      <Page>
        <Container>
          <Card title="Featured Games">
            <ContentLoader
              loader={<LoadingSpinner />}
              loading={featuredLoading || gameLoading}
            >
              {gameData && featuredData && (
                <Slider
                  slides={featuredGames.map((game) => ({
                    id: game.id,
                    title: game.name,
                    description: game.description,
                    image: "",
                  }))}
                />
              )}
            </ContentLoader>
          </Card>

          <Card title="Popular Games">
            <ContentLoader
              loader={<LoadingSpinner />}
              loading={featuredLoading || gameLoading}
            >
              {gameData && featuredData && (
                <GameGrid
                  games={mapFeaturedGames(
                    featuredData.featuredGames,
                    gameData.games
                  )}
                />
              )}
            </ContentLoader>
          </Card>

          <Card title="Top Rated Games">
            <ContentLoader
              loader={<LoadingSpinner />}
              loading={featuredLoading || gameLoading}
            >
              {gameData && featuredData && (
                <GameGrid
                  games={mapFeaturedGames(
                    featuredData.featuredGames,
                    gameData.games
                  )}
                />
              )}
            </ContentLoader>
          </Card>
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default IndexPage;
