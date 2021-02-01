import React from "react";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { client } from "./src/apollo";

import { defaultTheme } from "./src/styles/theme.ts";

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ApolloProvider client={client}>{element}</ApolloProvider>
    </ThemeProvider>
  );
};
