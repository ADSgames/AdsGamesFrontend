/* eslint-disable max-lines-per-function */
import React from "react";
import { FormikHelpers } from "formik";
import { RouteComponentProps } from "@reach/router";
import { DataStore, Storage } from "aws-amplify";
import { v1 } from "uuid";

import IndexLayout from "../../../layouts";

import ContentHeader from "../../ContentHeader";
import Card from "../../Card";
import { Game, GameImage, GameImageType } from "../../../models";
import { GameForm, GameParams } from "./GameForm";

export interface ImageParams {
  type: GameImageType;
  file: File;
}

const AddGamePage: React.FC<RouteComponentProps> = () => {
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

  const addGame = async (
    params: GameParams,
    helpers: FormikHelpers<GameParams>
  ) => {
    try {
      // Create game
      const game = await DataStore.save(
        new Game({
          name: params.name,
          description: params.description,
          featured: params.featured,
          slug: params.slug,
          visible: params.visible,
          source: params.source,
          images: [],
          controls: [],
          files: [],
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

  return (
    <IndexLayout title="Add Game">
      <ContentHeader text="Add Game" />
      <Card padding={16}>
        <GameForm onSubmit={addGame} />
      </Card>
    </IndexLayout>
  );
};

export default AddGamePage;
