// import '../styles/globals.css';
import '../assets/translation/i18next';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import Header from '../components/Header';
import { store, persist } from '../redux/store';
import { GlobalStyle } from '../styles/global';
import { ProjectThemeProvider } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProjectThemeProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
          <GlobalStyle />
          <Header />
          <ToastContainer />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ProjectThemeProvider>
  );
}

export default MyApp;
