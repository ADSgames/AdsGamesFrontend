/* eslint-disable max-lines-per-function */
import React from "react";
import { FormikHelpers } from "formik";
import { RouteComponentProps } from "@reach/router";
import { DataStore, Storage } from "aws-amplify";
import { v1 } from "uuid";
import { MenuItem, Select } from "@material-ui/core";

import IndexLayout from "../../../layouts";
import ContentHeader from "../../ContentHeader";
import Card from "../../Card";
import { Game, GameImage, GameImageType } from "../../../models";
import { GameForm, GameParams } from "./GameForm";
import { useListQuery } from "../../../hooks/useListQuery";

export interface ImageParams {
  type: GameImageType;
  file: File;
}

const EditGamePage: React.FC<RouteComponentProps> = () => {
  const { data } = useListQuery<Game>(Game);

  const [selectedGame, setSelectedGame] = React.useState<Game | null>(null);

  const uploadFile = async (image: ImageParams, gameID: string) => {
    const id = `games/images/${v1()}`;

    await Storage.put(id, image.file, {
      contentType: image.file.type,
    });

    await DataStore.save(
      new GameImage({
        gameID,
        type: image.type,
        url: id,
      })
    );
  };

  const editGame = async (
    params: GameParams,
    helpers: FormikHelpers<GameParams>
  ) => {
    if (!selectedGame) {
      return;
    }

    try {
      // Edit game
      const game = await DataStore.save(
        Game.copyOf(selectedGame, (updated) => {
          updated.description = params.description;
          updated.featured = params.featured;
          updated.name = params.name;
          updated.slug = params.slug;
          updated.source = params.source;
          updated.visible = params.visible;
        })
      );

      // Upload images
      if (params.images) {
        await Promise.all(
          params.images.map(async (image) => uploadFile(image, game.id))
        );
      }
    } catch (error) {
      helpers.setErrors({ featured: (error as Error).message });
    }
  };

  const handleChange = (
    event: React.ChangeEvent<{
      value: unknown;
    }>
  ) => {
    const game = data.find((g) => g.id === event.target.value);

    if (game) {
      setSelectedGame(game);
    }
  };

  return (
    <IndexLayout title="Edit Game">
      <ContentHeader text="Edit Game" />
      <Card padding={16}>
        <Select onChange={handleChange}>
          {data.map((game) => (
            <MenuItem key={game.id} value={game.id}>
              {game.name}
            </MenuItem>
          ))}
        </Select>
        {selectedGame !== null && (
          <GameForm
            key={selectedGame.id}
            onSubmit={editGame}
            initialValues={{
              slug: selectedGame.slug,
              name: selectedGame.name,
              visible: selectedGame.visible,
              featured: selectedGame.featured,
              description: selectedGame.description,
              source: selectedGame.source ?? "",
              images: [],
            }}
          />
        )}
      </Card>
    </IndexLayout>
  );
};

export default EditGamePage;
