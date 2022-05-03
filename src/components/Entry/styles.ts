import styled from 'styled-components';

export const Container = styled.div`
  min-height: 300px;
  padding: 16px;
  width: 100%;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  background-color: white;

  > img {
    width: 130px;
    height: 130px;
  }

  @media (min-width: 1024px) {
    width: 400px;
  }
`;
