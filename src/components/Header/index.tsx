/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';

import { confirmAlert } from 'react-confirm-alert';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { removeUser } from '../../redux/reducers/auth';
import { removePlate } from '../../redux/reducers/session';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import Modal from '../Modal';
import { Container, MenuButton } from './styles';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = () => {
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const { user } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const changeCurrentLanguage = (toLanguage: any) => {
    i18n.changeLanguage(toLanguage);
  };

  const getNextLanguage = (toUser = false) => {
    if (i18n.language === 'en') {
      return toUser ? '' : 'pt-BR';
    } else {
      return 'en';
    }
  };

  const handleHeader = () => {
    if (user?.name === '') {
      toast.error(t('HEADER.LOG-IN'));
    } else {
      window.location.replace(`/register`);
    }
  };

  const logout = () => {
    window.location.replace(`/`);
    dispatch(removeUser());
    dispatch(removePlate());
  };

  const submit = () => {
    confirmAlert({
      title: t('HEADER.LOGOUT-TITLE'),
      message: t('HEADER.LOGOU-LABEL'),
      buttons: [
        {
          label: t('HEADER.CONFIRM-LOGOUT-YES'),
          onClick: () => logout(),
        },
        {
          label: t('HEADER.CONFIRM-LOGOUT-NO'),
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <Container>
      <img src="/logo_parking.svg" />
      <div className="web">
        <div />
        <span onClick={handleHeader}>{t('MODAL.ENTRY')}</span>
        <span onClick={handleHeader}>{t('MODAL.EXIT')}</span>
        <div />
        <div className="user">
          <h3>{t('HEADER.USER') + user?.name}</h3>
          <img src="/logout.svg" onClick={submit} />
        </div>
        <img
          onClick={() => changeCurrentLanguage(getNextLanguage())}
          src={i18n.language === 'en' ? '/usa.svg' : '/brazil.svg'}
        />
      </div>
      {!showModal && (
        <div className="menuMobile">
          <MenuButton onClick={() => setShowModal(true)}>
            <img src={'/menu.svg'} />
          </MenuButton>
        </div>
      )}
      {showModal && (
        <Modal onClose={() => setShowModal(false)} show={showModal} />
      )}
    </Container>
  );
};

export default Header;

{
}
