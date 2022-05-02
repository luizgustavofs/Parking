import React from 'react';

import { Container } from './styles';
import { TabProps } from './types';

const Tab: React.FC<TabProps> = ({ label, active, onClick }) => {
  return (
    <Container active={active} onClick={onClick}>
      <h3>{label}</h3>
    </Container>
  );
};

export default Tab;
