import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      brand: string;
      lilac: string;
      accent: string;
      success: string;
      warning: string;
      boxShadow: string;
      ui: {
        bright: string;
        light: string;
        whisper: string;
        input: string;
      };
      code: string;
      gray: {
        dark: string;
        copy: string;
        calm: string;
      };
      text: {
        primary: string;
      };
      white: string;
      black: string;
    };

    widths: {
      md: number;
      lg: number;
      xl: number;
    };

    heights: {
      header: number;
      nav: number;
    };

    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };

    dimensions: {
      fontSize: {
        regular: number;
        large: number;
      };
      radius: {
        input: number;
      };
      headingSizes: {
        h1: number;
        h2: number;
        h3: number;
        h4: number;
      };
      lineHeight: {
        regular: number;
        heading: number;
      };
      containerPadding: number;
    };

    fonts: {
      sansSerif: string;
      serif: string;
      monospace: string;
    };
  }
}
