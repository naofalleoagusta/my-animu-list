import type { AppProps } from "next/app";
import { EmotionCache } from "@emotion/cache";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { SnackbarProvider } from "notistack";

import Navbar from "@/components/ui_pallette/Navbar";
import Footer from "@/components/ui_pallette/Footer";

import createEmotionCache from "@/config/createEmotionCache";
import theme from "@/config/theme";

import "@/styles/globals.css";

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
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={3000}
          anchorOrigin={{
            horizontal: "right",
            vertical: "bottom",
          }}
        >
          <CssBaseline />
          <Navbar />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </SnackbarProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
