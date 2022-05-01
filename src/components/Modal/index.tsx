/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { ModalContent, ImageDiv } from './styles';
import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  const { t, i18n } = useTranslation();
  const [isBrowser, setIsBrowser] = useState(false);

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

  const modalContent = show ? (
    <ModalContent>
      <ImageDiv>
        <img src="/logo_parking.svg" />
        <img src={'/close.svg'} onClick={handleCloseClick} />
      </ImageDiv>
      <div>
        <div onClick={handleCloseClick}>{t('MODAL.ENTRY')}</div>
        <div onClick={handleCloseClick}>{t('MODAL.EXIT')}</div>
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
