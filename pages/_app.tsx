import type { AppProps } from "next/app";
import { EmotionCache } from "@emotion/cache";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";

import Navbar from "../components/ui_pallette/Navbar";

import createEmotionCache from "../config/createEmotionCache";
import theme from "../config/theme";

import "../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
