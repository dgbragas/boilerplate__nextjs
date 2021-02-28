import { GlobalStyle } from '@/styles/global';

export default function App({ Component, pageProps }): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
