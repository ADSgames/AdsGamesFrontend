import { gql } from "@apollo/client";

export const GET_GAME = gql`
  query($id: String!) {
    game(id: $id) {
      name
      shortName
      description
    }
  }
`;

export const GET_GAMES = gql`
  query {
    games {
      name
      shortName
      id
    }
  }
`;

export const GET_FAVORITES = gql`
  query {
    featuredGames {
      gameId
      place
    }
  }
`;
