import { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import { colors } from './colors';
import { fontSizes } from './fontSizes';
import { spaces } from './spaces';

export const theme = {
  colors,
  spaces,
  fontSizes,
};

const ProjectThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme} {...props}>
      {children}
    </ThemeProvider>
  );
};

export { ProjectThemeProvider };
