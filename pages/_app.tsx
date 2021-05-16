/**
 * Author : ppsea
 * Date : 2021-05-16
 * Desc : global app configuration
 */

import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@lib/styles/global';
import theme from '@lib/styles/theme';

const myApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default myApp;
