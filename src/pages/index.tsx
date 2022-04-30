import '../assets/translation/i18next';
import type { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="bold">{t('bem vindo')}</h2>
    </div>
  );
};

export default Home;
