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
    margin-bottom: 40px;
  }
`;

export const ImageDiv = styled.div`
  img:last-child {
    position: absolute;
    top: 5px;
    right: 1rem;
  }
`;
