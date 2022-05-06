import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import Tab from '.';
import { theme } from '../../theme';

describe('Tab', () => {
  it('should render correctly with variants', () => {
    const { toJSON } = create(
      <ThemeProvider theme={theme}>
        <Tab onClick={jest.fn} />
      </ThemeProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
