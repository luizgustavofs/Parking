import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Tab from '../../components/Tab';
import { theme } from '../../theme';
import { Container, TabContainer, RegisterContent } from './styles';

const RegisterScreen: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('entry');
  const [plate, setPlate] = useState('');

  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Container>
        <TabContainer>
          <Tab
            label={t('TAB.ENTRY')}
            active={currentSection === 'entry'}
            onClick={() => setCurrentSection('entry')}
          />
          <Tab
            label={t('TAB.EXIT')}
            active={currentSection === 'exit'}
            onClick={() => setCurrentSection('exit')}
          />
        </TabContainer>
        <RegisterContent>
          <Input
            label={t('ENTRY.INPUT.LABEL')}
            placeholderText={t('ENTRY.INPUT.PLACEHOLDER')}
            value={plate}
            onChange={value => setPlate(value)}
          />
          {currentSection === 'entry' && (
            <Button primary disabled={plate === '' || plate.includes('_')}>
              {t('ENTRY.CONFIRM')}
            </Button>
          )}
          {currentSection === 'exit' && (
            <>
              <Button
                primary
                disabled={plate === '' || plate.includes('_')}
                color={theme.colors.quaternary}>
                {t('ENTRY.PAYMENT')}
              </Button>
              <Button
                secondary
                disabled={plate === '' || plate.includes('_')}
                color={theme.colors.quaternary}>
                {t('ENTRY.EXIT')}
              </Button>
              <Button withOutBG color={theme.colors.primary}>
                {t('ENTRY.HISTORIC')}
              </Button>
            </>
          )}
        </RegisterContent>
      </Container>
    </>
  );
};

export default RegisterScreen;
