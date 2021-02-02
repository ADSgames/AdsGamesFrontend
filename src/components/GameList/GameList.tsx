import { useQuery } from "@apollo/client";
import React from "react";

import Page from "../Page";
import Container from "../Container";
import Card from "../Card";
import ContentHeader from "../ContentHeader";
import { GameGrid } from "../GameGrid";

import type { Game } from "../../models";
import IndexLayout from "../../layouts";
import { GET_GAMES } from "../../queries/games";
import { ContentLoader, LoadingSpinner } from "../Loaders";

const GamesPage: React.FC<{ path?: string }> = () => {
  const { loading, error, data } = useQuery<{ games: Game[] }>(GET_GAMES);

  return (
    <IndexLayout>
      <Page>
        <ContentLoader loader={<LoadingSpinner />} loading={loading}>
          <Container>
            <ContentHeader text="Games" sticky />
            {error && <p>Error :( </p>}
            {typeof data !== "undefined" && (
              <>
                <Card title="Online">
                  <GameGrid
                    games={data.games.filter(
                      (game) =>
                        game.visible &&
                        game.files.some((file) => file.platform === "web")
                    )}
                  />
                </Card>

                <Card title="Download">
                  <GameGrid
                    games={data.games.filter(
                      (game) =>
                        game.visible &&
                        game.files.some((file) =>
                          ["windows", "mac", "linux"].includes(file.platform)
                        )
                    )}
                  />
                </Card>
              </>
            )}
          </Container>
        </ContentLoader>
      </Page>
    </IndexLayout>
  );
};

export default GamesPage;
