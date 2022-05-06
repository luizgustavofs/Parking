import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import HistoricItem from '.';
import { theme } from '../../theme';

describe('HistoricItem', () => {
  it('should render correctly with variants', () => {
    const { toJSON } = create(
      <ThemeProvider theme={theme}>
        <HistoricItem residenceTime="test" payment="true" onClick={jest.fn} />
      </ThemeProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
