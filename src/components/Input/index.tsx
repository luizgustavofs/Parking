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
    <Container color={color || colors.neutral._80}>
      <h3>{label}</h3>
      <InputMask
        color={color}
        mask="aaa-9999"
        placeholder={placeholderText}
        onChange={e => onChange(e?.target?.value?.toUpperCase() || '')}
        value={value}
      />
    </Container>
  );
};

export default Input;
