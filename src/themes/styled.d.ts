import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      neutral: string;
      background: string;
      border: string;
      text: string;
      link: string;
      linkHover: string;
      primary: string;
      secondary: string;
      tertiary: string;
    };
    breakpoints: {
      tabletSmall: string;
      tablet: string;
      desktop: string;
      desktopLarge: string;
    };
    fonts: {
      typefaces: {
        primary: string;
        secondary: string;
        monospace: string;
      };
      variants: {
        thin: number;
        regular: number;
        medium: number;
        semiBold: number;
        bold: number;
      };
      sizes: {
        xxsmall: string;
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
      };
    };
  }
}
