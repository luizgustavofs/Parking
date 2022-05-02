import styled from 'styled-components';

import { TabProps } from './types';

export const Container = styled.div<TabProps>`
  display: flex;
  flex: 1;
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  align-items: center;
  justify-content: center;

  h3 {
    color: ${({ active, theme }) =>
      active ? theme.colors.primary : theme.colors.neutral._80};
  }

  background-color: ${({ active }) => (active ? '#fff' : 'transparent')};
  border-bottom-color: ${({ active, theme }) =>
    active ? theme.colors.primary : 'transparent'};
  border-bottom-width: 3px;
`;
