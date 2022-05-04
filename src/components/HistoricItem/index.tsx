import React from 'react';

import { useTranslation } from 'react-i18next';

import { Container, Time, Payment } from './styles';
import { HistoricItemProps } from './types';

const HistoricItem: React.FC<HistoricItemProps> = ({
  residenceTime,
  payment,
  onClick,
}) => {
  const { t } = useTranslation();
  return (
    <Container onClick={onClick}>
      <Time>
        <h5>{t('TEMPO ATUAL')}</h5>
        <h2>{residenceTime}</h2>
      </Time>
      <Payment>
        <h5>{t('PAGAMENTO')}</h5>
        <h2>{payment}</h2>
      </Payment>
    </Container>
  );
};

export default HistoricItem;
