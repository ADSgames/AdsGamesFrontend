import { useQuery } from "@apollo/client";
import React from "react";

import Page from "../Page";
import Container from "../Container";
import ContentHeader from "../ContentHeader";
import Card from "../Card";

import IndexLayout from "../../layouts";
import { LinkDescription } from "../LinkLayout";
import { GET_GAME } from "../../queries/games";

import type { Game } from "../../models";
import GameControls from "../GameControls/GameControls";
import GameBanner from "../GameBanner/GameBanner";
import HtmlPlayer from "../HtmlPlayer/HtmlPlayer";
import GameDownloads from "../GameDownloads/GameDownloads";
import GameSource from "../GameSource/GameSource";
import { ContentLoader, LoadingSpinner } from "../Loaders";

const Player: React.FC<{ id?: string; path?: string }> = ({ id = "" }) => {
  const { loading, error, data } = useQuery<{ game: Game }>(GET_GAME, {
    variables: { id },
  });

  return (
    <IndexLayout>
      <Page>
        <ContentLoader loader={<LoadingSpinner />} loading={loading}>
          {error && <p>Error :(</p>}
          {data && (
            <>
              <Container>
                <ContentHeader text={data.game.name} />
              </Container>
              <Container>
                <GameBanner images={data.game.images} />
                <HtmlPlayer files={data.game.files} />
                <GameControls controls={data.game.controls} />
                <Card title="About">
                  <LinkDescription>{data.game.description}</LinkDescription>
                </Card>
                <GameDownloads files={data.game.files} />
                <GameSource files={data.game.files} />
              </Container>
            </>
          )}
        </ContentLoader>
      </Page>
    </IndexLayout>
  );
};

export default Player;
