import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import HistoricScreen from '../../pages/historic';
import { store } from '../../redux/store';
import { replaceMock } from '../../tests/setupTests';
import { theme } from '../../theme';

describe('HistoricScreen', () => {
  it('should render correctly', () => {
    const { toJSON } = create(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HistoricScreen />
        </ThemeProvider>
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should realize useEffect to check has plate', () => {
    const {} = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HistoricScreen />
        </ThemeProvider>
      </Provider>,
    );

    useEffect: jest.fn(), expect(replaceMock).toHaveBeenCalled();
  });
});
