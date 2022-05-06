import { fireEvent, waitFor } from '@testing-library/dom';
import { render } from '@testing-library/react';
import AxiosMockAdapter from 'axios-mock-adapter';
import { act, create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import Entry from '.';
import {
  MOCK_HISTORIC_COMPLETE,
  MOCK_HISTORIC_EMPTY,
  MOCK_HISTORIC_WITHOUT_LEFT,
  MOCK_HISTORIC_WITHOUT_PAYMENT,
} from '../../_mock_/mockHistoric';
import { MOCK_REGISTER_OK } from '../../_mock_/mockRegister';
import { api } from '../../api';
import { mockToastError, mockToastSuccess } from '../../tests/setupTests';
import { theme } from '../../theme';

describe('Entry', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly with variants plate and setPlate', () => {
    const { toJSON } = create(
      <ThemeProvider theme={theme}>
        <Entry plate="AAA-0000" setPlate={jest.fn} />
      </ThemeProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should button be disable if not have plate', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Entry plate="" setPlate={jest.fn} />
      </ThemeProvider>,
    );

    const button = getByTestId('button-confirm');

    expect(button).toHaveProperty('disabled', true);
  });

  it('should add plate when button is clicked', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Entry plate="AAA-0000" setPlate={jest.fn} />
      </ThemeProvider>,
    );

    const button = getByTestId('button-confirm');
    fireEvent.click(button);
    expect(button).toHaveBeenCalled;
  });

  it('should add plate and show success toast when everything is ok', async () => {
    var mock = new AxiosMockAdapter(api);

    mock.onGet('/parking/AAA-1112').reply(200, MOCK_HISTORIC_COMPLETE);
    mock.onPost('/parking').reply(200, MOCK_REGISTER_OK);

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Entry plate="AAA-1112" setPlate={jest.fn} />
      </ThemeProvider>,
    );

    const button = getByTestId('button-confirm');
    await fireEvent.click(button);

    await waitFor(() => expect(mockToastSuccess).toBeCalled());
  });

  it('should not add plate and show error toast when plate still not left', async () => {
    var mock = new AxiosMockAdapter(api);

    mock.onGet('/parking/AAA-1112').reply(200, MOCK_HISTORIC_WITHOUT_LEFT);
    mock.onPost('/parking').reply(200, MOCK_REGISTER_OK);

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Entry plate="AAA-1112" setPlate={jest.fn} />
      </ThemeProvider>,
    );

    const button = getByTestId('button-confirm');
    await fireEvent.click(button);

    await waitFor(() => expect(mockToastError).toBeCalled());
  });

  it('should not add plate and show error toast when plate still not paid', async () => {
    var mock = new AxiosMockAdapter(api);

    mock.onGet('/parking/AAA-1112').reply(200, MOCK_HISTORIC_WITHOUT_PAYMENT);
    mock.onPost('/parking').reply(200, MOCK_REGISTER_OK);

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Entry plate="AAA-1112" setPlate={jest.fn} />
      </ThemeProvider>,
    );

    const button = getByTestId('button-confirm');
    await act(async () => {
      await fireEvent.click(button);
    });

    await waitFor(() => expect(mockToastError).toBeCalled());
  });

  it('should add plate and show error toast when plate still not paid', async () => {
    var mock = new AxiosMockAdapter(api);
    jest.useFakeTimers();

    mock.onGet('/parking/AAA-1112').reply(200, MOCK_HISTORIC_EMPTY);
    mock.onPost('/parking').reply(200, MOCK_REGISTER_OK);

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Entry plate="AAA-1112" setPlate={jest.fn} />
      </ThemeProvider>,
    );

    const button = getByTestId('button-confirm');
    await act(async () => {
      await fireEvent.click(button);
    });

    await waitFor(() => expect(mockToastSuccess).toBeCalled());
  });

  it('should add plate and show error toast when plate still not paid', async () => {
    var mock = new AxiosMockAdapter(api);
    jest.useFakeTimers();

    mock.onGet('/parking/AAA-1112').reply(200, MOCK_HISTORIC_EMPTY);
    mock.onPost('/parking').reply(200, {});

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Entry plate="AAA-1112" setPlate={jest.fn} />
      </ThemeProvider>,
    );

    const button = getByTestId('button-confirm');
    await act(async () => {
      await fireEvent.click(button);
    });

    await waitFor(() => expect(mockToastError).toBeCalled());
  });

  it('should change de value input if change plate', () => {
    var mock = new AxiosMockAdapter(api);

    mock.onGet('/parking/AAA-0000').reply(200, MOCK_HISTORIC_COMPLETE);
    mock.onPost('/parking/AAA-0000').reply(200, {});

    const changePlateMock = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Entry plate="AAA-0000" setPlate={changePlateMock} />
      </ThemeProvider>,
    );

    const input = getByTestId('plate-input');
    fireEvent.change(input, { target: { value: 'NEW-0000' } });

    expect(changePlateMock).toHaveBeenCalledWith('NEW-0000');
  });
});
