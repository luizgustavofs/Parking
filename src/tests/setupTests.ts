import '@testing-library/jest-dom/extend-expect';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: any) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

export const mockToastError = jest.fn();
export const mockToastSuccess = jest.fn();

jest.mock('react-toastify', () => {
  const actual = jest.requireActual('react-toastify');
  Object.assign(actual, {
    toast: {
      error: mockToastError,
      success: mockToastSuccess,
    },
  });
  return actual;
});

export const replaceMock = jest.fn();

// delete window.location;
// window.location = { reload: replaceMock };
delete (window as Partial<Window>).location;
window.location = { ...window.location, reload: jest.fn() };

afterEach(() => {
  replaceMock.mockClear();
});
