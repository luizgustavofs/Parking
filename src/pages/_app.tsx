import type { AppProps } from 'next/app';
import '../styles/globals.css';

import { ProjectThemeProvider } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProjectThemeProvider>
      <Component {...pageProps} />
    </ProjectThemeProvider>
  );
}

export default MyApp;
