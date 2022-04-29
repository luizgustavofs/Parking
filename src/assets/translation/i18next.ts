import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ptBR from './locales/pt-BR.json';

i18n.use(initReactI18next).init({
  lng: 'pt-BR',
  resources: {
    ['pt-BR']: ptBR,
    en,
  },
});
