import React from "react";

import Page from "../Page";
import Container from "../Container";
import Card from "../Card";
import ContentHeader from "../ContentHeader";
import { GameGrid } from "../GameGrid";

import IndexLayout from "../../layouts";
import { ContentLoader, LoadingSpinner } from "../Loaders";
import { useListQuery } from "../../hooks/useListQuery";

import { Game } from "../../models";

const GamesPage: React.FC<{ path?: string }> = () => {
  const { loading, error, data } = useListQuery<Game>(Game);

  return (
    <IndexLayout>
      <Page>
        <ContentLoader loader={<LoadingSpinner />} loading={loading}>
          <Container>
            <ContentHeader text="Games" sticky />
            {error && <p>Error :( </p>}
            {data && (
              <>
                <Card title="Online">
                  <GameGrid
                    games={
                      data.filter(
                        (game) =>
                          game.visible &&
                          game.files?.some(
                            (file) => file && file.platform === "WEB"
                          )
                      ) ?? []
                    }
                  />
                </Card>

                <Card title="Download">
                  <GameGrid
                    games={
                      data.filter(
                        (game) =>
                          game &&
                          game.visible &&
                          game.files?.some(
                            (file) =>
                              file &&
                              ["WINDOWS", "MAC", "LINUX"].includes(
                                file.platform
                              )
                          )
                      ) ?? []
                    }
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
