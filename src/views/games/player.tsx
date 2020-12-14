import { useQuery } from "@apollo/client";
import React from "react";

import Page from "../../components/Page";
import Container from "../../components/Container";
import ContentHeader from "../../components/ContentHeader";
import Card from "../../components/Card";

import IndexLayout from "../../layouts";
import { LinkDescription } from "../../components/LinkLayout";
import { GET_GAME } from "../../queries/games";

import type { Game } from "../../models";

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
          <Card title="About">
            <LinkDescription>{data.game.description}</LinkDescription>
          </Card>
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default Player;
