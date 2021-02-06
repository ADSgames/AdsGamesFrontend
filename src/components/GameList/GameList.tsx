import React from "react";
import { RouteComponentProps } from "@reach/router";

import Page from "../Page";
import Card from "../Card";
import ContentHeader from "../ContentHeader";
import { GameGrid } from "../GameGrid";

import IndexLayout from "../../layouts";
import { ContentLoader, LoadingSpinner } from "../Loaders";
import { useListQuery } from "../../hooks/useListQuery";

import { Game } from "../../models";

const GamesPage: React.FC<RouteComponentProps> = () => {
  const { loading, data } = useListQuery<Game>(Game);

  return (
    <IndexLayout>
      <Page>
        <ContentLoader loader={<LoadingSpinner />} loading={loading}>
          <ContentHeader text="Games" sticky />

          <Card title="Online">
            <GameGrid
              games={data.filter(
                (game) =>
                  game.visible &&
                  game.files?.some((file) => file.platform === "WEB")
              )}
            />
          </Card>

          <Card title="Download">
            <GameGrid
              games={data.filter(
                (game) =>
                  game.visible &&
                  game.files?.some((file) =>
                    ["WINDOWS", "MAC", "LINUX"].includes(file.platform)
                  )
              )}
            />
          </Card>
        </ContentLoader>
      </Page>
    </IndexLayout>
  );
};

export default GamesPage;
