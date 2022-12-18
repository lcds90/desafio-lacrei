import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../components/globalstyles";
import Head from "next/head";

export interface AppTheme {
  colors: {
    primary: string;
    secondary: string;
    header: string;
    white: string;
  };
  font: {
    small: string;
    default: string;
    big: string;
    bigger: string;
    family: string;
  };
}

const theme: AppTheme = {
  colors: {
    primary: "#018762",
    secondary: "#1F1F1F",
    header: "#EEEEEE",
    white: "#FFFFFF",
  },
  font: {
    small: "0.5rem",
    default: "1rem",
    big: "2rem",
    bigger: "3rem",
    family: "'Nunito', 'sans-serif'",
  },
};

/**
 * Home: The Landing page of the web app
 * @return {JSX.Element} The JSX Code for the Home Page
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Desafio Lacrei 🏳️‍🌈</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
