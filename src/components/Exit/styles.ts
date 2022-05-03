import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
  min-height: 300px;
  padding: 16px;
  width: 100%;

  background: #fff;

  @media (min-width: 1024px) {
    width: 400px;
  }
`;

export const ConfirmScreen = styled.div`
  width: 100%;
  height: 100%;
  right: 0;
  top: 0;
  background-color: #fff;
  z-index: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 130px;
    height: 130px;
  }
`;

export const LoadingScreen = styled.div`
  width: 100%;
  height: 100%;
  right: 0;
  top: 0;
  background-color: #fff;
  z-index: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 1024px) {
  }
`;

export const DivModal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  background: #0005;
  position: absolute;
  z-index: 1;
  justify-content: center;
  align-items: center;

  > div {
    padding: 16px;
    width: 90vw;
    min-height: 90vw;
    background: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3:first-child {
      width: 170px;
      text-align: center;
      margin-bottom: 1px;
    }

    h1 {
      margin-top: 1px;
      color: ${({ theme }) => theme.colors.primary};
    }

    @media (min-width: 1024px) {
      width: 30vw;
      min-height: 30vw;
    }
  }
`;
