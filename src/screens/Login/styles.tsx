import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

  background: ${({ theme }) => theme.colors.primary};
  padding: 2rem;

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  img {
    width: 150px;
    height: 150px;
    margin-bottom: 60px;
  }

  input {
    width: 100%;
    margin-bottom: 10px;
    border-radius: 4px;
    padding: 5px;
    text-align: center;
    border: solid 1px ${({ theme }) => theme.colors.neutral._80};

    ::placeholder {
      color: ${({ theme }) => theme.colors.neutral._70};
      font-family: 'Open Sans' sans-serif;
    }
  }

  @media (min-width: 1024px) {
    justify-content: center;

    > div {
      max-width: 300px;
      align-self: center;
    }
  }
`;
