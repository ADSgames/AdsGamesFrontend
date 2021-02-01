import { gql } from "@apollo/client";

export const GET_GAME = gql`
  query($id: String!) {
    game(id: $id) {
      name
      short_name
      description
      controls {
        description
        type
      }
      images {
        url
        type
      }
      type {
        name
        description
      }
      files {
        url
        type
      }
    }
  }
`;

export const GET_GAMES = gql`
  query {
    games {
      name
      short_name
      id
      description
      images {
        url
        type
      }
      type {
        name
        description
      }
    }
  }
`;

export const GET_FAVORITES = gql`
  query {
    featuredGames {
      game_id
      place
    }
  }
`;
