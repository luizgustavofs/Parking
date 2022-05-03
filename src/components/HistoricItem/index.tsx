import React from 'react';

import { Container, Time, Payment } from './styles';
import { HistoricItemProps } from './types';

const HistoricItem: React.FC<HistoricItemProps> = ({
  residenceTime,
  payment,
  onClick,
}) => {
  return (
    <Container onClick={onClick}>
      <Time>
        <h5>TEMPO ATUAL</h5>
        <h2>{residenceTime}</h2>
      </Time>
      <Payment>
        <h5>PAGAMENTO</h5>
        <h2>{payment}</h2>
      </Payment>
    </Container>
  );
};

export default HistoricItem;
