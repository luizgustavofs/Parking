import styled from 'styled-components';

import { HeaderProps } from './types';

export const Container = styled.div<HeaderProps>`
  display: flex;
  height: 3.75rem;
  width: 100vw;
  border: solid 1px ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primary};
  padding: 5px 10px;
  justify-content: space-between;

  img {
    height: 3rem;
    width: 3rem;
    align-self: center;
    z-index: 2;
  }

  span {
    cursor: pointer;
  }

  h3 {
    color: #fff;
    margin-right: 15px;
  }

  > div {
    align-items: center;
    width: 100%;
    div {
      flex: 1;
    }
  }

  .web {
    display: none;
  }

  .menuMobile {
    width: auto;
  }

  @media (min-width: 1024px) {
    .web {
      display: flex;

      .user {
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;

        img:last-child {
          width: 25px;
          height: 25px;
          margin-right: 50px;
        }
      }
    }

    .menuMobile {
      display: none;
    }

    span {
      align-items: center;
      padding: 0.5rem 2rem;
      color: white;

      :hover {
        color: black;
      }
    }

    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export const MenuButton = styled.div`
  cursor: pointer;
`;
