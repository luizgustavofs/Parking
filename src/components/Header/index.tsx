/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import Modal from '../Modal';
import { Container, MenuButton } from './styles';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = () => {
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);

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

  return (
    <Container>
      <img src="/logo_parking.svg" />
      <div className="web">
        <div />
        <span>{t('MODAL.ENTRY')}</span>
        <span>{t('MODAL.EXIT')}</span>
        <div />
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
