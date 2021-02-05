import React from "react";
import { ThemeProvider } from "styled-components";
import Amplify from "aws-amplify";
import awsconfig from "./src/aws-exports";
Amplify.configure(awsconfig);

import { defaultTheme } from "./src/styles/theme.ts";

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={defaultTheme}>{element}</ThemeProvider>;
};
