import React from 'react';

import InputMask from 'react-input-mask';
import { useTheme } from 'styled-components';

import { Container } from './styles';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  placeholderText,
  label,
  color,
  value,
  onChange,
}) => {
  const { colors } = useTheme();

  return (
    <>
      <Container color={color || colors.neutral._80}>
        <h3>{label}</h3>
        <InputMask
          mask="aaa-9*99"
          placeholder={placeholderText}
          onChange={onChange}
          value={value}
        />
      </Container>
    </>
  );
};

export default Input;
