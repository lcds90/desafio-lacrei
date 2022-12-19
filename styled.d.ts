import { ITheme } from "interfaces";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {
    colors: {
      base: string;
      primary: string;
      secondary: string;
      light: string;
      lighter: string;
      gray: string;
      white: string;
    };
    font: {
      small: string;
      default: string;
      large: string;
      big: string;
      bigger: string;
      family: string;
    };
    spacing: {
      small: string;
      default: string;
      big: string;
      bigger: string;
    };
  }
}
