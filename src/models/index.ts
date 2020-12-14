export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: unknown;
}

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

export interface Control {
  __typename?: "Control";
  gameId: Scalars["ID"];
  controlId: Scalars["ID"];
  description: Scalars["String"];
  control: ControlType;
}

export interface ControlType {
  __typename?: "ControlType";
  id: Scalars["ID"];
  name: Scalars["String"];
  shortName: Scalars["String"];
  image: Scalars["String"];
}

export interface FeaturedGame {
  __typename?: "FeaturedGame";
  gameId: Scalars["String"];
  place: Scalars["Int"];
}

export interface Game {
  __typename?: "Game";
  id: Scalars["ID"];
  shortName: Scalars["String"];
  name: Scalars["String"];
  description: Scalars["String"];
  typeId: Scalars["ID"];
  source?: Maybe<Scalars["String"]>;
  file?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  version?: Maybe<Scalars["String"]>;
  visible?: Maybe<Scalars["Boolean"]>;
  controller?: Maybe<Scalars["Int"]>;
  type: GameType;
  controls: Control[];
}

export interface GameType {
  __typename?: "GameType";
  id: Scalars["ID"];
  name: Scalars["String"];
  description: Scalars["String"];
}

export interface Query {
  __typename?: "Query";
  controlTypes: ControlType[];
  controlType?: Maybe<ControlType>;
  controls: Control[];
  gameTypes: GameType[];
  gameType?: Maybe<GameType>;
  games: Game[];
  game?: Maybe<Game>;
  featuredGames: FeaturedGame[];
  roles: Role[];
  role?: Maybe<Role>;
  users: User[];
  user?: Maybe<User>;
}

export interface QueryControlTypeArgs {
  id: Scalars["String"];
}

export interface QueryGameTypeArgs {
  id: Scalars["String"];
}

export interface QueryGameArgs {
  id: Scalars["String"];
}

export interface QueryRoleArgs {
  id: Scalars["String"];
}

export interface QueryUserArgs {
  id: Scalars["String"];
}

export interface Role {
  __typename?: "Role";
  id: Scalars["ID"];
  name: Scalars["String"];
  shortName: Scalars["String"];
}

export interface User {
  __typename?: "User";
  id: Scalars["ID"];
  name: Scalars["String"];
  email: Scalars["String"];
  roleId: Scalars["ID"];
  avatar?: Maybe<Scalars["String"]>;
  about?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  role: Role;
}
