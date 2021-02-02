import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { fetch } from "cross-fetch";

const httpLink = createHttpLink({
  fetch,
  uri: process.env.GATSBY_GRAPHQL_ENDPOINT,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});
