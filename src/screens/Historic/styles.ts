import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral._50};
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const HistoricDiv = styled.div`
  display: flex;
  width: 95vw;
  height: 90vh;
  top: 80px;
  left: 10px;
  right: 10px;
  padding: 14px 17px;
  border-radius: 8px;
  background-color: #fff;
  position: absolute;
  z-index: 1;
  flex-direction: column;
  overflow: auto;

  div {
    display: flex;
    top: 0px;
    align-items: center;

    h1 {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  img {
    width: 33px;
    height: 23px;
    margin-right: 12px;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    width: 40vw;
    left: 30vw;
    right: 30vw;
  }
`;

export const ItemHistoricModal = styled.div`
  display: flex;
  position: absolute;
  z-index: 2;
  background-color: #fff;
  flex-direction: column;
  width: 95vw;
  height: 90vh;
  top: 80px;
  left: 10px;
  right: 10px;
  padding: 14px 17px;
  border-radius: 8px;

  h3 {
    margin: 0;
    margin-top: 30px;
    color: ${({ theme }) => theme.colors.neutral._80};
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    margin: 0;
  }

  img {
    width: 33px;
    height: 23px;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    width: 40vw;
    left: 30vw;
    right: 30vw;
  }
`;
