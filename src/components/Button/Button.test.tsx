import { fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import Button from '.';
import { theme } from '../../theme';

describe('Button', () => {
  it('should render correctly with variant primary', () => {
    const { toJSON } = create(
      <ThemeProvider theme={theme}>
        <Button primary>test</Button>
      </ThemeProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render correctly with variant secondary', () => {
    const { toJSON } = create(
      <ThemeProvider theme={theme}>
        <Button secondary>test</Button>
      </ThemeProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should call onClick prop when clicked', () => {
    const buttonTestId = 'button';
    const mockFunction = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button onClick={mockFunction} testID={buttonTestId}>
          test
        </Button>
      </ThemeProvider>,
    );

    const button = getByTestId(buttonTestId);
    fireEvent.click(button);
    expect(mockFunction).toHaveBeenCalled();
  });

  it('should not call onClick when disabled', () => {
    const buttonTestId = 'button';
    const mockFunction = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button disabled onClick={mockFunction} testID={buttonTestId}>
          test
        </Button>
      </ThemeProvider>,
    );

    const button = getByTestId(buttonTestId);
    fireEvent.click(button);
    expect(mockFunction).not.toHaveBeenCalled();
  });

  it('should change color when its passed by props', () => {
    const buttonTestId = 'button';
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button
          primary
          color="#3a3bbb"
          onClick={() => {}}
          testID={buttonTestId}>
          test
        </Button>
      </ThemeProvider>,
    );

    const button = getByTestId(buttonTestId);
    expect(button).toHaveStyle({ backgroundColor: '#3a3bbb' });
  });

  it('should ignore the color props when disabled and show with disabled color', () => {
    const buttonTestId = 'button';
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button
          primary
          color="#3a3bbb"
          disabled
          onClick={() => {}}
          testID={buttonTestId}>
          test
        </Button>
      </ThemeProvider>,
    );

    const button = getByTestId(buttonTestId);
    expect(button).toHaveStyle({ backgroundColor: theme.colors.neutral._70 });
  });

  it('should not have background color with secondary variant', () => {
    const buttonTestId = 'button';
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button
          secondary
          color="#3a3bbb"
          onClick={() => {}}
          testID={buttonTestId}>
          test
        </Button>
      </ThemeProvider>,
    );

    const button = getByTestId(buttonTestId);
    expect(button).toHaveStyle({ backgroundColor: 'none' });
  });

  it('should not have background and border color with prop withOutBG', () => {
    const buttonTestId = 'button';
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button
          withOutBG
          color="#3a3bbb"
          onClick={() => {}}
          testID={buttonTestId}>
          test
        </Button>
      </ThemeProvider>,
    );

    const button = getByTestId(buttonTestId);
    expect(button).toHaveStyle({
      backgroundColor: 'none',
      borderColor: 'none',
    });
  });
});
