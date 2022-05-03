import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral._50};
  flex-direction: column;

  padding: 41px 8px;

  div {
    display: flex;
  }

  @media (min-width: 1024px) {
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

export const TabContainer = styled.div`
  @media (min-width: 1024px) {
    width: 400px;
  }
`;
