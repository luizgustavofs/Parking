import React from 'react';

import { useTheme } from 'styled-components';

import { Container } from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  primary,
  secondary,
  withOutBG,
  disabled,
  onClick,
}) => {
  const { colors } = useTheme();

  return (
    <Container
      onClick={onClick}
      withOutBG={withOutBG}
      disabled={disabled}
      primary={primary}
      secondary={secondary}
      color={color || colors.tertiary}>
      <h4>{children}</h4>
    </Container>
  );
};

export default Button;
