import { fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/react';
import AxiosMockAdapter from 'axios-mock-adapter';
import { act, create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import Exit from '.';
import {
  MOCK_HISTORIC_COMPLETE,
  MOCK_HISTORIC_WITHOUT_LEFT,
  MOCK_HISTORIC_WITHOUT_PAYMENT,
} from '../../_mock_/mockHistoric';
import { api } from '../../api';
import {
  mockToastError,
  mockToastSuccess,
  replaceMock,
} from '../../tests/setupTests';
import { theme } from '../../theme';

describe('Exit', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly with variants plate and setPlate', () => {
    const { toJSON } = create(
      <ThemeProvider theme={theme}>
        <Exit plate="AAA-0000" setPlate={jest.fn} />
      </ThemeProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should button be disable if not have plate', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Exit plate="" setPlate={jest.fn} />
      </ThemeProvider>,
    );

    const button = getByTestId('button-confirm-payment');

    expect(button).toHaveProperty('disabled', true);
  });

  it('should make the payment of the plate when the button is clicked', async () => {
    var mock = new AxiosMockAdapter(api);

    mock.onGet('/parking/AAA-0000').reply(200, MOCK_HISTORIC_WITHOUT_PAYMENT);
    mock.onPost('/parking/AAA-0000/pay').reply(200, {});

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Exit plate="AAA-0000" setPlate={jest.fn} />
      </ThemeProvider>,
    );

    const button = getByTestId('button-confirm-payment');
    await act(async () => {
      await fireEvent.click(button);
    });

    const buttonPay = getByTestId('button-payment-or-exit-success');
    await act(async () => {
      await fireEvent.click(buttonPay);
    });

    expect(mockToastSuccess).toHaveBeenCalled();
  });

  it('should not make the payment of the plate when the button is clicked', async () => {
    var mock = new AxiosMockAdapter(api);

    mock.onGet('/parking/AAA-0000').reply(200, MOCK_HISTORIC_COMPLETE);
    mock.onPost('/parking/AAA-0000/pay').reply(200, {});

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Exit plate="AAA-0000" setPlate={jest.fn} />
      </ThemeProvider>,
    );

    const button = getByTestId('button-confirm-payment');
    await act(async () => {
      await fireEvent.click(button);
    });

    expect(mockToastError).toHaveBeenCalled();
  });

  it('should perform the left of the plate when the button is clicked', async () => {
    var mock = new AxiosMockAdapter(api);

    mock.onGet('/parking/AAA-0000').reply(200, MOCK_HISTORIC_WITHOUT_LEFT);
    mock.onPost('/parking/AAA-0000/out').reply(200, {});

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Exit plate="AAA-0000" setPlate={jest.fn} />
      </ThemeProvider>,
    );

    const button = getByTestId('button-confirm-left');
    await act(async () => {
      await fireEvent.click(button);
    });

    const buttonExit = getByTestId('button-payment-or-exit-success');
    await act(async () => {
      await fireEvent.click(buttonExit);
    });

    expect(mockToastSuccess).toHaveBeenCalled();
  });

  it('should not perform the lef of the plate when the button is clicked', async () => {
    var mock = new AxiosMockAdapter(api);

    mock.onGet('/parking/AAA-0000').reply(200, MOCK_HISTORIC_COMPLETE);
    mock.onPost('/parking/AAA-0000/out').reply(200, {});

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Exit plate="AAA-0000" setPlate={jest.fn} />
      </ThemeProvider>,
    );

    const button = getByTestId('button-confirm-left');
    await act(async () => {
      await fireEvent.click(button);
    });

    expect(mockToastError).toHaveBeenCalled();
  });

  it('should open the historic of the plate when the button is clicked', () => {
    var mock = new AxiosMockAdapter(api);

    mock.onGet('/parking/AAA-0000').reply(200, MOCK_HISTORIC_COMPLETE);
    mock.onPost('/parking/AAA-0000').reply(200, {});

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Exit plate="AAA-0000" setPlate={jest.fn} />
      </ThemeProvider>,
    );

    const button = getByTestId('button-open-historic');
    fireEvent.click(button);

    expect(replaceMock).toHaveBeenCalledWith('/historic?plate=AAA-0000');
  });

  it('should change de value input if change plate', () => {
    var mock = new AxiosMockAdapter(api);

    mock.onGet('/parking/AAA-0000').reply(200, MOCK_HISTORIC_COMPLETE);
    mock.onPost('/parking/AAA-0000').reply(200, {});

    const changePlateMock = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Exit plate="AAA-0000" setPlate={changePlateMock} />
      </ThemeProvider>,
    );

    const input = getByTestId('input-plate');
    fireEvent.change(input, { target: { value: 'NEW-0000' } });

    expect(changePlateMock).toHaveBeenCalledWith('NEW-0000');
  });
});
