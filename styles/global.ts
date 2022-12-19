import { createGlobalStyle } from "styled-components";
import { IThemeParam } from "interfaces";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }: IThemeParam) => theme.colors.primary};
    font-family: ${({ theme }: IThemeParam) => theme.font.family};
    font-weight: 400;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 700;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }
`;

export default GlobalStyle;
