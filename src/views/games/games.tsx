import { useQuery } from "@apollo/client";
import React from "react";

import Page from "../../components/Page";
import Container from "../../components/Container";
import Card from "../../components/Card";
import ContentHeader from "../../components/ContentHeader";
import { GameGrid } from "../../components/GameGrid";

import type { Game } from "../../models";
import IndexLayout from "../../layouts";
import { GET_GAMES } from "../../queries/games";
import { ContentLoader, LoadingSpinner } from "../../components/Loaders";

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
                  <GameGrid games={data.games} />
                </Card>

                <Card title="Download">
                  <GameGrid games={data.games} />
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
