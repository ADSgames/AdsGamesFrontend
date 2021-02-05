import React from "react";

import Page from "../Page";
import Container from "../Container";
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

const Player: React.FC<{ id?: string; path?: string }> = ({ id = "" }) => {
  const { loading, error, data } = useItemQuery<Game>(Game, id);

  return (
    <IndexLayout>
      <Page>
        <ContentLoader loader={<LoadingSpinner />} loading={loading}>
          {error && <p>Error :(</p>}
          {data && (
            <>
              <Container>
                <ContentHeader text={data.name} />
              </Container>
              <Container>
                <GameBanner images={data.images} />
                <HtmlPlayer files={data.files} />
                <GameControls controls={data.controls} />
                <Card title="About">
                  <LinkDescription>{data.description}</LinkDescription>
                </Card>
                <GameDownloads files={data.files} />
                <GameSource files={data.files} />
              </Container>
            </>
          )}
        </ContentLoader>
      </Page>
    </IndexLayout>
  );
};

export default Player;
