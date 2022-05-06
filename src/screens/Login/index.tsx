/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';

import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useTheme } from 'styled-components';

import Button from '../../components/Button';
import { setUser } from '../../redux/reducers/auth';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Container } from './styles';

const Login: NextPage = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);

  const handleLogin = () => {
    if (username !== '') {
      dispatch(setUser({ name: username }));
      window.location.replace('/register');
    } else {
      toast.error(t('LOGIN.ERROR'));
    }
  };

  const handleIsLogged = () => {
    if (user) {
      window.location.replace('/register');
    }
  };

  useEffect(() => handleIsLogged, []);

  return (
    <Container>
      <div>
        <img src="logo_parking.svg" />
        <input
          data-testid="username-input"
          placeholder={t('LOGIN.INPUT.USERNAME')}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Button
          testID="login-test-button"
          primary
          color={colors.tertiary}
          onClick={handleLogin}>
          {t('LOGIN.BUTTON')}
        </Button>
      </div>
    </Container>
  );
};

export default Login;
