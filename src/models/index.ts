export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };

export type ControlType = {
  id: string;
  name: string;
  short_name: string;
  image: string;
};

export type Control = {
  game_id: string;
  description: string;
  type: string;
};

export type GameType = {
  id: string;
  name: string;
  description: string;
};

export type GameImage = {
  game_id: string;
  type: string;
  url: string;
};

export type Game = {
  id: string;
  short_name: string;
  name: string;
  description: string;
  type_id: string;
  source?: Maybe<string>;
  file?: Maybe<string>;
  width?: Maybe<number>;
  height?: Maybe<number>;
  version?: Maybe<string>;
  visible?: Maybe<boolean>;
  controller?: Maybe<number>;
  type: GameType;
  controls: Array<Control>;
  images: Array<GameImage>;
};

export type FeaturedGame = {
  game_id: string;
  place: number;
};

export type Role = {
  id: string;
  name: string;
  short_name: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role_id: string;
  avatar?: Maybe<string>;
  about?: Maybe<string>;
  website?: Maybe<string>;
  location?: Maybe<string>;
  role: Role;
};
