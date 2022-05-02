import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral._50};
  flex-direction: column;

  padding: 41px 8px;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

export const TabContainer = styled.div`
  display: flex;

  @media (min-width: 1024px) {
    width: 400px;
  }
`;

export const RegisterContent = styled.div`
  display: flex;
  background-color: white;
  padding: 36px 16px 64px 16px;

  flex-direction: column;

  @media (min-width: 1024px) {
    width: 400px;
  }
`;
