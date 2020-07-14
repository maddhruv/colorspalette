import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import TitleBar from "../components/TitleBar";

import theme from "../config/theme";
import META from "../config/meta";
import { Credit } from "../components/common";
import { track } from "../lib/analytics";

const GlobalStyles = createGlobalStyle`
  ${reset};
  body {
    font-family: 'Work Sans', sans-serif;
    background: #f8f8f8;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{META.title}</title>
      </Head>
      <GlobalStyles />
      <TitleBar />
      <Component {...pageProps} />
      <Credit>
        <a
          href="https://maddhruv.github.io/?ref=colorspalette"
          onClick={() =>
            track({
              action: "click-profile",
              category: "homepage",
              label: "none",
            })
          }
        >
          Created with care by Dhruv Jain
        </a>
      </Credit>
    </ThemeProvider>
  );
};

export default App;
