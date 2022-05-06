import { fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/react';
import AxiosMockAdapter from 'axios-mock-adapter';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import Input from '.';
import { MOCK_HISTORIC_COMPLETE } from '../../_mock_/mockHistoric';
import { api } from '../../api';
import { theme } from '../../theme';

describe('Input', () => {
  it('should render correctly with variants', () => {
    const { toJSON } = create(
      <ThemeProvider theme={theme}>
        <Input
          label="teste"
          placeholderText="test"
          onChange={() => {}}
          value="teste"
        />
      </ThemeProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should change de value input if change plate', () => {
    var mock = new AxiosMockAdapter(api);

    mock.onGet('/parking/AAA-0000').reply(200, MOCK_HISTORIC_COMPLETE);
    mock.onPost('/parking/AAA-0000').reply(200, {});

    const changePlateMock = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Input
          label="teste"
          placeholderText="test"
          onChange={changePlateMock}
          value="teste"
        />
      </ThemeProvider>,
    );

    const input = getByTestId('input-test');
    fireEvent.change(input, { target: { value: 'NEW-0000' } });

    expect(changePlateMock).toHaveBeenCalledWith('NEW-0000');
  });
});
