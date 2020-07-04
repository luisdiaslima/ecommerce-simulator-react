import styled from 'styled-components';
import arrow from '../../img/arrow-left.svg';

export const Container = styled.div`
  width: 90%;
  max-width: 1100px;

  /* alinhamento de caixa */
  margin: 0 auto;

  > header {
    margin-top: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      width: 54px;
    }

    > a {
      color: var(--title-color);
      font-weight: bold;

      display: flex;
      align-items: center;

      > span {
        margin-right: 16px;
        background-image: url(${arrow});
        display: flex;
        width: 20px;
        height: 24px;
      }
    }
  }

  > a {
    display: flex;
    color: var(--title-color);
    font-weight: 700;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 24px;

  > div {
    > img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 8px 8px 0 0;
    }

    h1 {
      margin-top: 32px;
      font-size: 36px;
      line-height: 41px;
      color: var(--title-color);
    }

    h3 {
      margin: 24px 0;
      font-weight: bold;
      font-size: 24px;
      line-height: 34px;

      color: var(--primary-color);
    }

    p {
      font-size: 16px;
      line-height: 26px;
      color: #6c6c80;
    }
  }
`;
