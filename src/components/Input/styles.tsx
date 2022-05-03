import styled from 'styled-components';

import { InputPlaceholderProps } from './types';

export const Container = styled.div<InputPlaceholderProps>`
  width: 100%;
  flex-direction: column;

  h3 {
    color: ${({ theme }) => theme.colors.neutral._80};
    margin-bottom: 7px;
  }

  input {
    height: 67px;
    width: 100%;
    text-align: center;
    background: ${({ theme }) => theme.colors.baseColor};
    border: solid 1px ${({ theme }) => theme.colors.neutral._70};
    color: ${({ color }) => color};
    margin-bottom: 13px;
  }
`;
