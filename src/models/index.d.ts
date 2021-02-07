import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum GameFilePlatform {
  WINDOWS = "WINDOWS",
  LINUX = "LINUX",
  MAC = "MAC",
  WEB = "WEB"
}

export enum GameImageType {
  WIDE = "WIDE",
  THUMBNAIL = "THUMBNAIL",
  LARGE = "LARGE"
}



export declare class Control {
  readonly id: string;
  readonly type: string;
  readonly description: string;
  readonly gameID: string;
  constructor(init: ModelInit<Control>);
  static copyOf(source: Control, mutator: (draft: MutableModel<Control>) => MutableModel<Control> | void): Control;
}

export declare class GameFile {
  readonly id: string;
  readonly url: string;
  readonly platform: GameFilePlatform | keyof typeof GameFilePlatform;
  readonly gameID: string;
  constructor(init: ModelInit<GameFile>);
  static copyOf(source: GameFile, mutator: (draft: MutableModel<GameFile>) => MutableModel<GameFile> | void): GameFile;
}

export declare class GameImage {
  readonly id: string;
  readonly url: string;
  readonly type: GameImageType | keyof typeof GameImageType;
  readonly gameID: string;
  constructor(init: ModelInit<GameImage>);
  static copyOf(source: GameImage, mutator: (draft: MutableModel<GameImage>) => MutableModel<GameImage> | void): GameImage;
}

export declare class Game {
  readonly id: string;
  readonly slug: string;
  readonly name: string;
  readonly visible: boolean;
  readonly controls?: Control[];
  readonly files?: GameFile[];
  readonly images?: GameImage[];
  readonly featured: boolean;
  readonly description: string;
  readonly source?: string;
  constructor(init: ModelInit<Game>);
  static copyOf(source: Game, mutator: (draft: MutableModel<Game>) => MutableModel<Game> | void): Game;
}