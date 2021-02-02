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
      files {
        url
        platform
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
      files {
        url
        platform
      }
      visible
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
