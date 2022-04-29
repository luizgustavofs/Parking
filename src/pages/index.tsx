import '../assets/translation/i18next';
import type { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('bem vindo')}</h1>
    </div>
  );
};

export default Home;
