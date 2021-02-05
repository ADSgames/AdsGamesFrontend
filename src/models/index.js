// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const GameFilePlatform = {
  "WINDOWS": "WINDOWS",
  "LINUX": "LINUX",
  "MAC": "MAC",
  "WEB": "WEB",
  "SOURCE": "SOURCE"
};

const GameImageType = {
  "WIDE": "WIDE",
  "THUMBNAIL": "THUMBNAIL",
  "LARGE": "LARGE"
};

const { Control, GameFile, GameImage, Game } = initSchema(schema);

export {
  Control,
  GameFile,
  GameImage,
  Game,
  GameFilePlatform,
  GameImageType
};