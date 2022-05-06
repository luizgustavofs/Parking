import { fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import Login from '../../pages/index';
import { store } from '../../redux/store';
import { replaceMock } from '../../tests/setupTests';
import { theme } from '../../theme';

describe('HistoricScreen', () => {
  it('should render correctly', () => {
    const { toJSON } = create(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Login />
        </ThemeProvider>
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should change screen if user add username', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Login />
        </ThemeProvider>
      </Provider>,
    );

    const input = getByTestId('username-input');
    fireEvent.change(input, { target: { value: 'gustavo' } });

    const button = getByTestId('login-test-button');
    fireEvent.click(button);

    expect(replaceMock).toHaveBeenCalledWith('/register');
  });

  it('should useEffect handle correctly', () => {
    const {} = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Login />
        </ThemeProvider>
      </Provider>,
    );

    useEffect: jest.fn(), expect(replaceMock).not.toHaveBeenCalled();
  });
});
