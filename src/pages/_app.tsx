// import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { store } from '../redux/store';
import { GlobalStyle } from '../styles/global';
import { ProjectThemeProvider } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProjectThemeProvider>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </ProjectThemeProvider>
  );
}

export default MyApp;
