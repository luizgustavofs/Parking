import styled from 'styled-components';

export const ModalContent = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  position: absolute;
  left: 0;
  padding: 5px 10px;
  flex-direction: column;
  z-index: 2;

  div {
    color: #fff;
    margin-bottom: 20px;
  }

  .user {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-between;

    img:last-child {
      width: 30px;
      height: 30px;
      align-self: center;
    }
  }
`;

export const ImageDiv = styled.div`
  img:last-child {
    position: absolute;
    top: 5px;
    right: 1rem;
  }
`;
