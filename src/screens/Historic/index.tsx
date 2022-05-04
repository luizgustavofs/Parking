/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import HistoricItem from '../../components/HistoricItem';
import { useAppSelector } from '../../redux/store';
import { getVehicleHistory } from '../../services/parking';
import { Historic } from '../../types/app/historic';
import { Container, HistoricDiv, ItemHistoricModal } from './styles';

const HistoricScreen: React.FC = () => {
  const { t } = useTranslation();
  const [stateHistoricModal, setStateHistoricModal] = useState(false);
  const [historicPlate, setHistoricPlate] = useState<Historic[]>([]);
  const [selectedRegister, setSelectedRegister] = useState<Historic>();

  const { plate } = useAppSelector(state => state.session);
  useEffect(() => console.log(plate), [plate]);

  const getTime = async (plate: string) => {
    const historic = await getVehicleHistory(plate);
    setHistoricPlate(historic.reverse());
  };

  const handleHistoric = () => {
    window.location.replace(`/register`);
  };

  useEffect(() => {
    getTime(plate);
  }, []);

  return (
    <Container>
      <HistoricDiv>
        <div>
          <img src={'/arrow_left.svg'} onClick={handleHistoric} />
          <h1>{plate}</h1>
        </div>
        {historicPlate.map(register => (
          <HistoricItem
            residenceTime={register.time}
            payment={register.paid ? t('HISTORIC.PAID') : '-'}
            key={register.reservation}
            onClick={() => {
              setStateHistoricModal(true);
              setSelectedRegister(register);
            }}
          />
        ))}
      </HistoricDiv>
      {stateHistoricModal && (
        <ItemHistoricModal>
          <img
            src={'/arrow_left.svg'}
            onClick={() => setStateHistoricModal(false)}
          />
          <h3>{t('LICENSE-PLATE')}</h3>
          <h1>{selectedRegister?.plate}</h1>
          <h3>{t('STATUS')}</h3>
          <h2>
            {selectedRegister?.paid || selectedRegister?.left === false
              ? t('HISTORIC.PARKED')
              : t('HISTORIC.RELEASED')}
          </h2>
          <h3>
            {selectedRegister?.left
              ? t('HISTORIC.TOTAL-TIME')
              : t('TEMPO ATUAL')}
          </h3>
          <h2>{selectedRegister?.time}</h2>
          <h3>{t('PAGAMENTO')}</h3>
          <h2>{selectedRegister?.paid ? t('HISTORIC.PAID') : '-'}</h2>
        </ItemHistoricModal>
      )}
    </Container>
  );
};

export default HistoricScreen;
