/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import Entry from '../../components/Entry';
import Exit from '../../components/Exit';
import Tab from '../../components/Tab';
import {
  changeCurrentSection,
  changePlate,
} from '../../redux/reducers/session';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Container, TabContainer } from './styles';

const RegisterScreen: React.FC = () => {
  const { session, auth } = useAppSelector(state => state);
  const { plate, currentSection } = session;
  const { user } = auth;

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const checkHasUser = () => {
    if (!user) {
      window.location.replace('/');
    }
  };

  useEffect(() => checkHasUser(), []);

  return (
    <>
      <Container>
        <TabContainer>
          <Tab
            label={t('TAB.ENTRY')}
            active={currentSection === 'entry'}
            onClick={() => dispatch(changeCurrentSection('entry'))}
          />
          <Tab
            label={t('TAB.EXIT')}
            active={currentSection === 'exit'}
            onClick={() => dispatch(changeCurrentSection('exit'))}
          />
        </TabContainer>
        {currentSection === 'entry' && (
          <Entry
            plate={plate}
            setPlate={(newPlate: string) => dispatch(changePlate(newPlate))}
          />
        )}
        {currentSection === 'exit' && (
          <Exit
            plate={plate}
            setPlate={(newPlate: string) => dispatch(changePlate(newPlate))}
          />
        )}
      </Container>
    </>
  );
};

export default RegisterScreen;
