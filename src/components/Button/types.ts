import { DefaultTheme } from 'styled-components';

export interface ButtonBackgroundProps {
  primary?: boolean;
  color?: string;
  secondary?: boolean;
  disabled?: boolean;
  withOutBG?: boolean;
}

export interface getStyleProps extends ButtonBackgroundProps {
  theme: DefaultTheme;
}

export interface ButtonProps extends ButtonBackgroundProps {
  children: string;
  onClick?: () => void;
}
``;
