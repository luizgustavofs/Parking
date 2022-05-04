import styled from 'styled-components';

import { ButtonBackgroundProps, getStyleProps } from './types';

const getStyle = ({
  theme,
  color,
  disabled,
  primary,
  secondary,
  withOutBG,
}: getStyleProps) => {
  if (primary) {
    return `
      background-color: ${disabled ? theme.colors.neutral._70 : color}; 
      h4 {
        color: ${disabled ? theme.colors.neutral._80 : theme.colors.neutral._00}
      }; 
      ${disabled && `cursor: auto;`}
    `;
  }
  if (secondary) {
    return `
    border-style: solid; border-width: 2px; border-color: ${
      disabled ? theme.colors.neutral._80 : color
    }; 
    h4 {
      color: ${disabled ? theme.colors.neutral._80 : color}
    }; 
      ${disabled && `cursor: auto;`}
    `;
  }
  if (withOutBG) {
    return ` 
    background: #fff;
    h4 {
      color: ${disabled ? theme.colors.neutral._80 : color}
    };
    ${disabled && `cursor: auto;`}
  `;
  }
};

export const Container = styled.button<ButtonBackgroundProps>`
  display: flex;
  width: 100%;
  height: 4.188rem;
  border: none;
  border-radius: 4px;

  cursor: pointer;

  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  ${props => getStyle(props)};
`;
