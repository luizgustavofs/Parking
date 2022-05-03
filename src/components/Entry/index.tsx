/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import { useTheme } from 'styled-components';

import {
  getVehicleHistory,
  registerVehicleEntry,
} from '../../services/parking';
import Button from '../Button';
import Input from '../Input';
import { Container } from './styles';
import { EntryProps, EntryState } from './types';

const Entry: React.FC<EntryProps> = ({ plate, setPlate }) => {
  const { colors } = useTheme();
  const [entryState, setEntryState] = useState<EntryState>('default');
  const { t } = useTranslation();

  const registerPlate = async () => {
    setEntryState('loading');
    const register = await registerVehicleEntry(plate);
    const historic = await getVehicleHistory(plate);

    const checkIsLeft = historic.find(
      element => element.left === false && element.paid === false,
    );

    if (checkIsLeft) {
      if (register.entered_at) {
        setEntryState('success');
        toast.success(t('ENTRY.SUCCESS'));
        setTimeout(() => setEntryState('default'), 2000);
      } else {
        setEntryState('error');
        toast.error(t('ENTRY.ERROR-NEW-VEHICLE'));
      }
    } else {
      toast.error(t('ENTRY.ERROR-NEW-VEHICLE'));
    }
  };

  return (
    <Container>
      {entryState === 'loading' && (
        <>
          <ReactLoading
            type={'spokes'}
            color={colors.primary}
            height={130}
            width={130}
          />
          <h4>{t('ENTRY.LOADING')}</h4>
        </>
      )}
      {entryState === 'success' && (
        <>
          <img src={'/round-done-button.svg'} alt="Ícone de sucesso" />
          <h4>{t('ENTRY.REGISTER')}</h4>
        </>
      )}
      {(entryState === 'default' || entryState === 'error') && (
        <>
          <Input
            label={t('ENTRY.INPUT.LABEL')}
            placeholderText={t('ENTRY.INPUT.PLACEHOLDER')}
            value={plate}
            onChange={value => {
              setPlate(value);
              setEntryState('default');
            }}
            color={entryState === 'error' ? colors.error : colors.default}
          />
          <Button
            primary
            disabled={plate === '' || plate.includes('_')}
            onClick={registerPlate}>
            {t('ENTRY.CONFIRM')}
          </Button>
        </>
      )}
    </Container>
  );
};

export default Entry;