import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { fetch } from "cross-fetch";

const httpLink = createHttpLink({
  fetch,
  uri: "http://localhost:4000",
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
