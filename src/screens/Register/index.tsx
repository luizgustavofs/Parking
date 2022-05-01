import React from 'react';

import { useTranslation } from 'react-i18next';

import Header from '../../components/Header';
import Input from '../../components/Input';
import { Container } from './styles';

const RegisterScreen: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Header />
      <Input
        label={t('ENTRY.INPUT.LABEL')}
        placeholderText={t('ENTRY.INPUT.PLACEHOLDER')}
      />
    </Container>
  );
};

export default RegisterScreen;
