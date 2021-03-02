import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/styles/global';
import initialTheme from '@/styles/themes/initial';

export default function App({ Component, pageProps }): JSX.Element {
  return (
    <ThemeProvider theme={initialTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
