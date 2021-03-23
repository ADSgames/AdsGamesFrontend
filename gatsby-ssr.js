import React from "react";
import { ThemeProvider as ScThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core";

import { defaultTheme } from "./src/styles/theme.ts";
import { theme } from "./src/styles/mui-theme.ts";

export const wrapRootElement = ({ element }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <ScThemeProvider theme={defaultTheme}>{element}</ScThemeProvider>
    </MuiThemeProvider>
  );
};
