import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 80px;
  padding: 16px 40px;
  width: 100%;

  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.neutral._80};
  border-bottom-width: 2px;

  h5 {
    margin: 0;
    color: ${({ theme }) => theme.colors.neutral._80};
  }
  h2 {
    margin: 0;
  }
`;

export const Time = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: center;
`;
export const Payment = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
`;
