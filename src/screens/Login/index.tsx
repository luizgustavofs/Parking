/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';

import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import Button from '../../components/Button';
import { setUser } from '../../redux/reducers/auth';
import { useAppDispatch } from '../../redux/store';
import { Container } from './styles';

const Login: NextPage = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    if (username !== '') {
      dispatch(setUser({ name: username }));
      window.location.replace('/register');
      console.log('logado');
    }
  };

  return (
    <Container>
      <div>
        <img src="logo_parking.svg" />
        <input
          placeholder={t('LOGIN.INPUT.USERNAME')}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Button primary color={colors.tertiary} onClick={handleLogin}>
          {t('LOGIN.BUTTON')}
        </Button>
      </div>
    </Container>
  );
};

export default Login;
