/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import { useTheme } from 'styled-components';

import {
  getVehicleHistory,
  registerVehicleExit,
  registerVehiclePayment,
} from '../../services/parking';
import Button from '../Button';
import Input from '../Input';
import { ConfirmScreen, Container, DivModal, LoadingScreen } from './styles';
import { ExitProps, ExitState } from './types';

const Exit: React.FC<ExitProps> = ({ plate, setPlate }) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [exitState, setExitState] = useState<ExitState>('default');
  const [residenceTime, setResidenceTime] = useState('');

  const checkCanPay = async () => {
    setExitState('loading');
    const historic = await getVehicleHistory(plate);

    const freeToPay = historic.find(element => element.paid === false);

    if (freeToPay) {
      setResidenceTime(freeToPay.time);
      setExitState('payment');
    } else {
      setExitState('default');
      const hasElementPaid = historic.find(
        element => element.left === false && element.paid === true,
      );
      if (hasElementPaid) {
        toast.success(t('PAYMENT.ALREADY.MADE'));
      } else {
        toast.error(t('PAYMENT.ALREADY.NEED-VEHICLE'));
      }
    }
  };

  const checkCanExit = async () => {
    setExitState('loading');
    const historic = await getVehicleHistory(plate);

    const freeToExit = historic.find(
      element => element.paid === true && element.left === false,
    );

    if (freeToExit) {
      setExitState('exit');
    } else {
      setExitState('default');
      const notPaid = historic.find(
        element => element.left === false && element.paid === false,
      );
      if (notPaid) {
        toast.error(t('EXIT.CHECK.ERROR'));
      } else {
        toast.error(t('EXIT.ALREADY.NEED-PAYMENT'));
      }
    }
  };

  const registerPaymentPlate = async () => {
    setExitState('loading');
    const registerPayment = await registerVehiclePayment(plate);

    if (registerPayment) {
      setExitState('success');
      toast.success(t('EXIT.PAYMENT.SUCCESS'));
      setTimeout(() => setExitState('default'), 2000);
    } else {
      toast.error(t('EXIT.PAYMENT.ERROR'));
      setExitState('default');
    }
  };

  const registerExitPlate = async () => {
    setExitState('loading');
    const registerPayment = await registerVehicleExit(plate);

    if (registerPayment) {
      setExitState('success');
      toast.success(t('EXIT.SUCCESS'));
      setTimeout(() => setExitState('default'), 2000);
    } else {
      setExitState('error');
      toast.error(t('EXIT.ERROR'));
    }
  };

  const handleHistoric = () => {
    window.location.replace(`/historic?plate=${plate}`);
  };

  return (
    <Container>
      {exitState !== 'default' && (
        <DivModal>
          <div>
            {exitState === 'loading' && (
              <LoadingScreen>
                <ReactLoading
                  type={'spokes'}
                  color={colors.primary}
                  height={130}
                  width={130}
                />
                <h4>{t('ENTRY.LOADING')}</h4>
              </LoadingScreen>
            )}
            {exitState === 'success' && (
              <ConfirmScreen>
                <img src={'/round-done-button.svg'} />
                <h4>{t('ENTRY.PAYDOUT')}</h4>
              </ConfirmScreen>
            )}
            {exitState !== 'success' && exitState !== 'loading' && (
              <>
                <h3>
                  {exitState === 'payment'
                    ? t('EXIT.MODAL.LABEL-CONFIRM')
                    : t('EXIT.MODAL.LABEL-EXIT')}
                </h3>
                <h1>{plate}</h1>
                <h3>
                  {t('EXIT.RESIDENCE-TIME')}
                  {residenceTime}
                </h3>
                <Button
                  testID="button-payment-or-exit-success"
                  primary
                  color={colors.quaternary}
                  onClick={
                    exitState === 'payment'
                      ? registerPaymentPlate
                      : registerExitPlate
                  }>
                  {exitState === 'payment'
                    ? t('EXIT.MODAL.CONFIRM')
                    : t('EXIT.MODAL.EXIT')}
                </Button>
                <Button
                  withOutBG
                  color={colors.primary}
                  onClick={() => setExitState('default')}>
                  {t('EXIT.MODAL.RETURN')}
                </Button>
              </>
            )}
          </div>
        </DivModal>
      )}

      <Input
        testID="input-plate"
        label={t('ENTRY.INPUT.LABEL')}
        placeholderText={t('ENTRY.INPUT.PLACEHOLDER')}
        value={plate}
        onChange={value => {
          setPlate(value);
          setExitState('default');
        }}
        color={exitState === 'error' ? colors.error : colors.default}
      />
      <Button
        testID="button-confirm-payment"
        primary
        disabled={plate === '' || plate.includes('_')}
        color={colors.quaternary}
        onClick={checkCanPay}>
        {t('ENTRY.PAYMENT.BUTTON')}
      </Button>
      <Button
        testID="button-confirm-left"
        secondary
        disabled={plate === '' || plate.includes('_')}
        color={colors.quaternary}
        onClick={checkCanExit}>
        {t('ENTRY.EXIT')}
      </Button>
      <Button
        testID="button-open-historic"
        withOutBG
        disabled={plate === '' || plate.includes('_')}
        color={colors.primary}
        onClick={handleHistoric}>
        {t('ENTRY.HISTORIC')}
      </Button>
    </Container>
  );
};

export default Exit;
