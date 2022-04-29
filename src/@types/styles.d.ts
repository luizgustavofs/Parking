import { theme } from '../theme';

type ProjectType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ProjectType {}
}
