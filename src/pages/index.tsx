import '../assets/translation/i18next';
import type { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import Button from '../components/Button';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <Button withOutBG color={colors.primary}>
      {t('ENTRY.INPUT.PLACEHOLDER')}
    </Button>
  );
};

export default Home;
