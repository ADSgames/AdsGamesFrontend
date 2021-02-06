import React from "react";
import { RouteComponentProps } from "@reach/router";

import Page from "../Page";
import ContentHeader from "../ContentHeader";
import Card from "../Card";

import IndexLayout from "../../layouts";
import { LinkDescription } from "../LinkLayout";

import GameControls from "../GameControls/GameControls";
import GameBanner from "../GameBanner/GameBanner";
import HtmlPlayer from "../HtmlPlayer/HtmlPlayer";
import GameDownloads from "../GameDownloads/GameDownloads";
import GameSource from "../GameSource/GameSource";
import { ContentLoader, LoadingSpinner } from "../Loaders";

import { useItemQuery } from "../../hooks/useItemQuery";
import { Game } from "../../models";

const Player: React.FC<RouteComponentProps<{ id: string }>> = ({ id = "" }) => {
  const { loading, error, data } = useItemQuery<Game>(Game, id);

  return (
    <IndexLayout>
      <Page>
        <ContentLoader loader={<LoadingSpinner />} loading={loading}>
          {error && <p>Error :(</p>}
          {data && (
            <>
              <ContentHeader text={data.name} />

              <GameBanner images={data.images} />
              <HtmlPlayer files={data.files} />
              <GameControls controls={data.controls} />
              <Card title="About">
                <LinkDescription>{data.description}</LinkDescription>
              </Card>
              <GameDownloads files={data.files} />
              <GameSource files={data.files} />
            </>
          )}
        </ContentLoader>
      </Page>
    </IndexLayout>
  );
};

export default Player;
