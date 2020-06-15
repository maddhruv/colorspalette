import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import TitleBar from "../components/TitleBar";
import { Container } from "../components/common";

import theme from "../config/theme";

const GlobalStyles = createGlobalStyle`
  ${reset};
  body {
    font-family: 'Work Sans', sans-serif;
    background: #f8f8f8;
  }
  a {
    color: inherit;
  }
`;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Colors Palette</title>
      </Head>
      <GlobalStyles />
      <TitleBar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
