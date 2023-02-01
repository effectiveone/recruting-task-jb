import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Box from '@mui/material/Box';
import Head from 'next/head';
import React from 'react';

config.autoAddCss = false;

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
      </Head>
      <ThemeProvider theme={theme}>
        <Box height='100vh' display='flex' flexDirection='column'>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
