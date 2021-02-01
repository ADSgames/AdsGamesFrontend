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
import Controls from "../GameControls/GameControls";
import GameBanner from "../GameBanner/GameBanner";
import HtmlPlayer from "./HtmlPlayer";
import Downloads from "./Downloads";

const Player: React.FC<{ id?: string; path?: string }> = ({ id = "" }) => {
  const { loading, error, data } = useQuery<{ game: Game }>(GET_GAME, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error :(</p>;

  return (
    <IndexLayout>
      <Page>
        <Container>
          <ContentHeader text={data.game.name} />
        </Container>
        <Container>
          <GameBanner images={data.game.images} />
          <HtmlPlayer files={data.game.files} />
          <Downloads files={data.game.files} />
          <Card title="About">
            <LinkDescription>{data.game.description}</LinkDescription>
          </Card>
          <Controls controls={data.game.controls} />
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default Player;
