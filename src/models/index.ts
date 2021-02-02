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

export type GameImage = {
  game_id: string;
  type: "large" | "thumbnail" | "wide";
  url: string;
};

export type GameFilePlatform = "linux" | "mac" | "source" | "web" | "windows";

export type GameFile = {
  game_id: string;
  platform: GameFilePlatform;
  url: string;
};

export type Game = {
  id: string;
  short_name: string;
  name: string;
  description: string;
  visible: boolean;
  controls: Array<Control>;
  images: Array<GameImage>;
  files: Array<GameFile>;
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
  avatar?: string | null;
  about?: string | null;
  website?: string | null;
  location?: string | null;
  role: Role;
};
