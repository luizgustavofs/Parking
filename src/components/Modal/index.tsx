/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import { confirmAlert } from 'react-confirm-alert';
import { useTranslation } from 'react-i18next';

import { removeUser } from '../../redux/reducers/auth';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { ModalContent, ImageDiv } from './styles';
import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  const { t, i18n } = useTranslation();
  const [isBrowser, setIsBrowser] = useState(false);
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

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const logout = () => {
    window.location.replace(`/`);
    dispatch(removeUser());
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

  const modalContent = show ? (
    <ModalContent>
      <ImageDiv>
        <img src="/logo_parking.svg" />
        <img src={'/close.svg'} onClick={handleCloseClick} />
      </ImageDiv>
      <div>
        <div onClick={handleCloseClick}>{t('MODAL.ENTRY')}</div>
        <div onClick={handleCloseClick}>{t('MODAL.EXIT')}</div>
        <div className="user">
          <span>{t('HEADER.USER') + user?.name}</span>
          <img src="/logout.svg" onClick={submit} />
        </div>
        <div onClick={() => changeCurrentLanguage(getNextLanguage())}>
          {t('MODAL.LANGUAGE')} ({t('LANGUAGE')})
        </div>
      </div>
    </ModalContent>
  ) : null;

  if (isBrowser) {
    return modalContent;
  } else {
    return null;
  }
};

export default Modal;
